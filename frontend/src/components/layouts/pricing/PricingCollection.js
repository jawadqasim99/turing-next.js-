import PricingPlanCard from '@/components/compoenet/PricingPlanCard'
import React from 'react'
async function getData() {
  const headers = {
      Authorization:process.env.API_TOKEN
  };
  const res = await fetch('http://localhost:1337/api/pricings', { headers: headers });

  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function PricingCollection() {
  const { data } = await getData();
  return (
    <div className='flex flex-wrap  justify-center'>
      {data.map((item)=>{
        return( <PricingPlanCard key={item.id} plan={item.attributes.title} id={item.id} cost={item.attributes.price}/>)
      })}
    
    </div>
  )
}
