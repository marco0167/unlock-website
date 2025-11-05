import Form from '~/components/general/form/Form'
import CustomInput from '~/components/general/form/CustomInput'

function WaitlistPage() {
  return (
    <section className='min-h-screen bg-gradient-to-b from-neutral-800 to-30% to-background flex items-center'>
      <Form
        title="Join the waitlist"
        subtitle='Sign up to get early access, updates, and exclusive content from our team.'
        quote="Unlock makes mental training stick. It's genuinely useful and I've been able to apply it directly."
        quoteBy="Ben Mee, Brentford F.C."
      >
        <div className='flex flex-col gap-y-4'>
          <div className='flex gap-x-4'>
            <CustomInput type="text" placeholder="Last Name*" />
            <CustomInput type="text" placeholder="First Name*" />
          </div>
            <CustomInput type="email" inputMode='email' placeholder="Email*" />
            <CustomInput type="text" placeholder="What club do you play for?*" />
            <CustomInput type="text" inputMode='tel' placeholder="Phone Number*" />
        </div>
      </Form>
    </section>
  )
}

export default WaitlistPage
