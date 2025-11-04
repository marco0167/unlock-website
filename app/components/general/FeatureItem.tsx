function FeatureItem({
  title,
  description,
  image,
  imageClass = "",
}: {
  title: string;
  description: string;
  image: string;
  imageClass?: string;
}) {
  return (
    <div className="flex not-md:flex-col overflow-hidden justify-between items-center w-full gap-9 md:gap-21 md:nth-[even]:flex-row-reverse">
      <div className={`md:rounded-[46px] rounded-[20px] not-md:w-[100%] md:w-1/2 max-w-[800px] md:h-120 mb-4 ${imageClass}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg "
        />
      </div>

      <div className="flex flex-col gap-6 md:w-1/2">
        <span className="text-3xl md:text-5xl font-sora font-regular">{title}</span>

        <p className="md:text-2xl font-inter font-regular">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
