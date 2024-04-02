import Logo from '@/components/compoenet/Logo';
import React from 'react';

export default function Footer() {
    const Helpful = [
        { about: 'About Us' },
        { features: 'Features' },
        { faq: 'FAQs' },
        { blog: 'Blog' },
    ];
    const support = [
        { privacy: 'Privacy Policy' },
        { Terms: 'Terms of Use' },
        { Support: 'Support Center' },
        { Contact: 'Contact' },
    ];
    const contact = [
        { adress: '455 West Orchard Street' },
        { town: 'Kings Mountain, NC 28086' },
        { phone: 'Phone: (272) 211-7370' },
        { email: 'E-Mail:support@yourbrand.com' },
    ];
    return (
        <div className='w-full bg-[#EBF5FF] mt-[9rem] nunito pb-8'>
            <div className='w-[90%] mx-auto flex flex-col lg:flex-row items-center tracking-wider'>
                <div className='w-full  lg:w-[40%] p-12 gap-y-4'>
                    <Logo />
                    <div className='mt-8 tracking-widest leading-[1.7rem] text-gray-500 text-[0.8rem]'>
                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.
                    </div>
                </div>
                <div className='w-[80%] mx-auto lg:w-[50%] flex flex-col  lg:flex-row justify-between'>
                    <div className='mb-8 lg:mb-0'>
                        <h1 className='mb-4'>Helpful Links</h1>
                        <ul>
                            {Helpful.map((item, index) => {
                                return <li key={index} className='mt-3 text-[0.9rem] text-navcolor'> {Object.values(item)[0]}</li>;
                            })}
                        </ul>
                    </div>
                    <div className='mb-8 lg:mb-0'>
                        <h1 className='mb-4'>Support</h1>
                        <ul>
                            {support.map((item, index) => {
                                return <li key={index} className='mt-3 text-[0.9rem] text-navcolor'> {Object.values(item)[0]}</li>;
                            })}
                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-4'>Contact Us</h1>
                        <ul>
                            {contact.map((item, index) => {
                                return <li key={index} className='mt-3 text-[0.9rem] text-navcolor'> {Object.values(item)[0]}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='w-[90%] mx-auto mt-8' />
            <div className='w-[90%] mx-auto h-[20%] mt-8 flex items-center justify-center tracking-wider text-[0.9rem] text-navcolor'>
                <span>&copy;{new Date().getFullYear()} Turing. All Rights Reserved.</span>
            </div>
        </div>
    );
}
