import CustomTextarea from '~/components/general/form/CustomTextarea'
import Form from '~/components/general/form/Form'
import CustomInput from '~/components/general/form/CustomInput'

function ContactFormPage() {
  return (
    <section className='min-h-screen bg-gradient-to-b from-neutral-800 to-30% to-background flex items-center'>
      <Form
        title="Join us in supporting athletes beyond the pitch."
        subtitle='We work with clubs and organisations to make mindset training part of everyday performance.'
        quote="Unlock makes mental training stick. It's genuinely useful and I've been able to apply it directly."
        quoteBy="Ben Mee, Brentford F.C."
      >
        <div className='flex flex-col gap-y-4'>
          <div className='flex gap-x-4'>
            <CustomInput type="text" placeholder="Last Name*" />
            <CustomInput type="text" placeholder="First Name*" />
          </div>
            <CustomInput type="email" inputMode='email' placeholder="Email*" />
            <CustomInput type="text" inputMode='tel' placeholder="Phone Number*" />
            <CustomTextarea placeholder="Tell us how we can help*" />
        </div>
      </Form>
    </section>
  )
}

export default ContactFormPage
