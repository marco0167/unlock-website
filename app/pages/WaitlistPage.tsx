import Form from '~/components/general/form/Form'
import CustomInput from '~/components/general/form/CustomInput'
import { useEffect, useState } from 'react';
import supabase from '~/supabase/supabase';
import validateEmail from '~/utils/validateEmail';

function WaitlistPage() {
  const [disabled, setDisabled] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [club, setClub] = useState("");

  function clearForm() {
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setClub("");
  }

    useEffect(() => {
      const checkRequiredData = async () => {
        if (!email || !club || !name || !surname) {
          setDisabled(true);
          return;
        }
        if (
          !validateEmail(email) ||
          !(club.length > 2) ||
          !name ||
          !surname
        ) {
          setDisabled(true);
          return;
        }
        setDisabled(false);
      };

      checkRequiredData();
    }, [email, club, name, surname]);

  const handleSubmit = async () => {
    try {
      if (!email || !club || !name || !surname) {
        throw new Error("All fields are required");
      }

      const { data, error } = await supabase.functions.invoke('send-contact-form-email', {
          body: {
            formType: 'Waitlist Form Submission',
            name: name,
            surname: surname,
            phoneNumber: phone.length > 0 ? phone : undefined,
            email: email,
            club: club
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
    <section className='min-h-screen bg-gradient-to-b from-neutral-800 to-30% to-background flex items-center'>
      <Form
        title="Join the waitlist"
        subtitle='Sign up to get early access, updates, and exclusive content from our team.'
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
            <CustomInput type="text" placeholder="What club do you play for?*" value={club} onChange={e => setClub(e.target.value)} />
            <CustomInput type="text" inputMode='tel' placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
      </Form>
    </section>
  )
}

export default WaitlistPage
