import BlogsCard from '@/components/compoenet/BlogsCard';
import React from 'react';
async function getData() {
  const headers = {
      Authorization: process.env.API_TOKEN
  };
  const res = await fetch('http://localhost:1337/api/blogs-posts?populate=*', { headers: headers });

  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function BlogsCollection() {
  const { data } = await getData();
  return (
    <div className='flex flex-wrap justify-center gap-y-12 gap-x-8 p-6'>
      {data.map((item)=>{
        return(  <BlogsCard
        key={item.id}
          url={item.attributes.image.data && `http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
          heading={item.attributes.title}
          des={item.attributes.description}
        />)
      })}
    
    
    </div>
  );
}
