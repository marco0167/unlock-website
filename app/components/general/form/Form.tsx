import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormProps {
  title: string;
  subtitle: string;
  quote: string;
  quoteBy: string;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onSubmit?: () => Promise<any>;
}

function Form({title, subtitle, quote, quoteBy, onSubmit, children, isDisabled}: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await onSubmit?.();
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className='p-5 bg-neutral-800 container m-auto max-w-[1200px] rounded-[20px] grid grid-cols-2 gap-7'>
      <div className="flex flex-col justify-center p-10 gap-y-10">

        <div className="flex flex-col gap-y-2">
          <h2 className="font-inter font-semibold text-3xl">{title}</h2>
          <p className="font-inter font-regular text-base">{subtitle}</p>
        </div>

        <div className="flex flex-col">
          {children}

          <div className="flex items-center my-4 cursor-pointer w-full">
            <input type="checkbox" id="terms" name="terms" className="mr-4 h-4 w-4 cursor-pointer" onChange={e => setIsChecked(e.target.checked)}/>
            <label htmlFor="terms" className="font-inter font-regular text-[10px] cursor-pointer">
              I agree to be contacted by Unlock about updates, news, and marketing.
            </label>
          </div>
          <button disabled={isLoading || isDisabled || !isChecked} onClick={handleSubmit} className="bg-blue-600 px-[10px] py-3 rounded-[5px] disabled:opacity-50">Submit</button>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <img src="assets/images/form-img.jpg" alt="Brain background with Unlock app screen on top" className="w-full h-full object-cover rotate-15 scale-150" />
        <div className="absolute h-full w-full top-0 left-0 px-7 pb-12 font-inter font-regular text-base flex flex-col justify-end bg-gradient-to-t from-[#0A0D17] to-[#0A0D17]/0 ">
          <blockquote className="">"{quote}"</blockquote>
          <p className="mt-2 font-medium">{quoteBy}</p>
        </div>
      </div>
    </div>
  )
}

export default Form
