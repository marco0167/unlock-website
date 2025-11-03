
export default function VideoText() {
  return (
    <div className="relative container overflow-hidden ">
      <div className='w-full h-full absolute p-1 left-0 translate-y-[-50%] top-1/2' >
      <video className='w-full object-fill'  autoPlay loop muted>
        <source
          src="assets/videos/nike.mp4"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      </div>
      <div
        className='inset-0 text vina-sans text-[18rem] flex align-middle text-center  bg-gray-950 mix-blend-darken text-white select-none'
      >
        UNLOCK YOUR EDGE
      </div>
    </div>
  )
}

