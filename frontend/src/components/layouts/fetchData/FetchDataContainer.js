import DataReport from '@/components/compoenet/DataReport';
import React from 'react';

export default function FetchDataContainer() {
  return (
    <div className='w-full lg:h-[20rem] bg-[#7168CC]   flex items-center justify-center'>
      <div className='w-[90%]  flex flex-wrap flex-grow justify-around gap-y-12 pt-8 pb-8 mx-auto flex-col sm:flex-row'>
        <DataReport des1={'Total'} des2={'Projects'} id={'element1'} maxLength={96} />
        <DataReport des1={'Happy'} des2={'Customers'} id={'element2'} maxLength={190} />
        <DataReport des1={'Experienced'} des2={'Staff'} id={'element3'} maxLength={12} />
        <DataReport des1={'Ongoing'} des2={'Projects'} id={'element4'} maxLength={46} />
      </div>
    </div>
  );
}
