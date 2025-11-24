import { Linkedin } from './svgs';
import { Link } from 'react-router';

interface ProfileCardsProps {
  imagePath: string;
  name: string;
  qualifications: string;
  description: string;
  linkedinName: string;
}

function ProfileCards({ imagePath, name, qualifications, description, linkedinName }: ProfileCardsProps) {
  return (
    <div className="md:p-6 p-4 bg-neutral-800 md:rounded-4xl rounded-2xl flex not-md:flex-col gap-x-6 gap-y-4 font-inter font-regular 2xl:text-lg not-md:text-sm">
      <img src={imagePath} alt={`${name} photo`} className="md:aspect-square rounded-[14px] 2xl:w-[190px] lg:w-[150px] md:w-[190px] not-md:w-full not-md:max-h-[200px] object-cover" />

      <div className='flex flex-col justify-between md:gap-y-4 gap-y-6'>
        <p className="mb-2">{description}</p>

        <div className='flex justify-between items-end'>
          <div className='flex flex-col '>
            <h4 className="font-bold">{name}</h4>
            <p className="">{qualifications}</p>
          </div>
          <Link to={`https://www.linkedin.com/in/${linkedinName}`} target='_blank'>
            <Linkedin width={23} height={23} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCards
