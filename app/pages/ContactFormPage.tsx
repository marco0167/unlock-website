import CustomTextarea from '~/components/form/CustomTextarea'
import Form from '~/components/form/Form'
import CustomInput from '~/components/form/CustomInput'
import supabase from '~/supabase/supabase';
import { useEffect, useState } from 'react';
import validateEmail from '~/utils/validateEmail';

function ContactFormPage() {
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function clearForm() {
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

   useEffect(() => {
    const checkRequiredData = async () => {
      if (!email || !message || !name || !surname) {
        setDisabled(true);
        return;
      }
      if (
        !validateEmail(email) ||
        !(message.length > 5) ||
        !name ||
        !surname
      ) {
        setDisabled(true);
        return;
      }
      setDisabled(false);
    };

    checkRequiredData();
  }, [email, message, name, surname]);


  const handleSubmit = async () => {
    try {
      if (!email || !message || !name || !surname) {
        throw new Error("All fields are required");
      }

      const { data, error } = await supabase.functions.invoke('send-contact-form-email', {
          body: {
            formType: 'Club Form Submission',
            name: name,
            surname: surname,
            phoneNumber: phone.length > 0 ? phone : undefined,
            email: email,
            message: message
          },
        })
      if (error) {
        throw error;
      } else {
        console.log("Supabase function response:", data);
        clearForm();
        return data;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      return null;
    }
  }
  return (
    <section className='min-h-screen md:bg-gradient-to-b bg-gradient-to-t from-neutral-800 md:to-30% to-100% to-background flex items-center'>
      <Form
        title="Join us in supporting athletes beyond the pitch."
        subtitle='We work with clubs and organisations to make mindset training part of everyday performance.'
        quote="Unlock makes mental training stick. It's genuinely useful and I've been able to apply it directly."
        quoteBy="Ben Mee, Brentford F.C."
        onSubmit={handleSubmit}
        isDisabled={disabled}
      >
        <div className='flex flex-col gap-y-4'>
          <div className='flex gap-x-4'>
            <CustomInput type="text" placeholder="Last Name*" value={surname} onChange={e => setSurname(e.target.value)} />
            <CustomInput type="text" placeholder="First Name*" value={name} onChange={e => setName(e.target.value)} />
          </div>
            <CustomInput type="email" inputMode='email' placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)} />
            <CustomInput type="text" inputMode='tel' placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
            <CustomTextarea placeholder="Tell us how we can help*" value={message} onChange={e => setMessage(e.target.value)} />
        </div>
      </Form>
    </section>
  )
}

export default ContactFormPage
