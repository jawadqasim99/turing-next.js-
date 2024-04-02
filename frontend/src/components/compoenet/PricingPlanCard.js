import React from 'react';

export default function PricingPlanCard({ id, cost, plan }) {
    const plans = [
        { website: "Unlimited Website" },
        { user: "Unlimited Users" },
        { bandwidth: "5 GB Bandwidth" },
        { speed: "Highest Speed" },
        { security: "Data Security and Backups" },
        { storage: "1 GB Storage" },
        { supports: "24x7 Great Support" },
        { monthly: "Monthly Reports and Analytics" }
    ];


    let highlightIndices = [];
    if (id === 1) {
        highlightIndices = [0, 1, 2, 3, 4];
    } else if (id === 2 ){
        highlightIndices = [0,1,2,3,4,5];
    
    }else {
        highlightIndices = [0,1,2,3,4,5,6,7];
    
    }

    return (
        <div className={`nunito w-[20rem] lg:w-[23rem] m-8  bg-white flex items-center flex-col `} style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
            <div className={`w-full bg-white h-[8rem] flex justify-center items-center   text-gray-500 text-center ${id === 2 ? 'bg-purple-600  text-white' : ''} `}>
                <p>{plan}</p>
            </div>

            <div className='w-[3rem] h-[3rem]  -mt-6 rounded-bl-[15px] rounded-br-[15px] rounded-tl-[15px] flex justify-center items-center bg-white ' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                {id}
            </div>

            <div class=" text-center m-8  text-purple-500 mt-12 ">
                <span class="text-3xl font-bold">${cost}</span>
                <span class=" text-xs uppercase ml-2  ">/Month</span>
            </div>

            <ul className='text-center flex flex-col gap-y-4  mt-8'>
                {plans.map((item, index) => (
                    <li key={index} style={{ color: highlightIndices.includes(index) ? 'black' : 'gray' }}>{Object.values(item)[0]}</li>
                ))}
            </ul>
            <div className='m-8 mt-12' >
                <button className='w-[10rem] h-[2rem] text-[14px] rounded-tl-[1rem] rounded-bl-[1rem] items-center  rounded-br-[1rem] flex  pl-8 py-5 bg-[#7168CC]  text-white '>SELECT PLAN</button>
            </div>
        </div>
    );
}
