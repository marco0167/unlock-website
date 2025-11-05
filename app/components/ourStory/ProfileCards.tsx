import React from 'react'
import { Linkedin } from '../svgs';
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
    <Link to={`https://www.linkedin.com/in/${linkedinName}`} target='_blank' className="md:p-6 p-3 bg-neutral-800 md:rounded-4xl rounded-2xl flex gap-x-6 font-inter font-regular 2xl:text-lg not-md:text-sm">
      <img src={imagePath} alt={`${name} photo`} className="aspect-square rounded-[14px] 2xl:w-[190px] lg:w-[150px] md:w-[190px] sm:w-[150px] w-[120px] object-cover" />

      <div className='flex flex-col justify-between md:gap-y-4'>
        <p className="mb-2">{description}</p>

        <div className='flex justify-between items-end'>
          <div className='flex flex-col '>
            <h4 className="font-bold">{name}</h4>
            <p className="">{qualifications}</p>
          </div>

          <Linkedin width={23} height={23} />
        </div>
      </div>
    </Link>
  )
}

export default ProfileCards
