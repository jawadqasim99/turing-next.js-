import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function TeamCard({ namePer, passion, imgUrl,description}) {
 
 
  return (
    <div className='nunito w-[18rem] bg-white flex gap-y-8 items-center flex-col' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <div className='w-[4rem] h-[4rem] bg-slate-400 rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] transition-transform duration-300 -mt-8 hover:-translate-y-2'>
        <div className='w-full h-full'>
          <img src={imgUrl} className='rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px]' style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt='error' />
        </div>
      </div>
      <div className='w-full h-[5rem] bg-[#6741D5] flex flex-col justify-center text-white text-center '>
        <h1>{namePer}</h1>
        <p>{passion}</p>
      </div>
      <div className='text-[#6741D5] w-full'>
        <div className='flex w-full h-6 justify-center gap-x-4'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <p className='text-center p-2'>{description}</p>
    </div>
  );
}
