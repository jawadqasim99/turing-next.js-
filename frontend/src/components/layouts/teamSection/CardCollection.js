import TeamCard from '@/components/compoenet/TeamCard'
import React from 'react'
async function getData() {
  const headers = {
      Authorization:process.env.API_TOKEN
  };
  const res = await fetch('http://localhost:1337/api/teams?populate=*', { headers: headers });

  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default async function CardCollection() {
  const { data } = await getData();

  return (
   
    <div className='flex gap-x-6 flex-wrap justify-center gap-y-[5rem]'>
      {data.map((item)=>{
        return(
          <TeamCard key={item.id} namePer={`${item.attributes.name}`} imgUrl={item.attributes.image.data && `http://localhost:1337${item.attributes.image.data[0].attributes.url}`} passion={item.attributes.designation} description={item.attributes.Description}/>
        );
      })}
    
    </div>
  )
}
