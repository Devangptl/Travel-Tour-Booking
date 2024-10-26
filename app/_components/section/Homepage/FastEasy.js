import Image from 'next/image'
import React from 'react'

export const FastEasy = () => {

    const category = [
        {
            title: "Choose Destination",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
            image: "/homepage/Group 7.png"
        },
        {
            title: "Check Availability",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
            image: "/homepage/Group 12.png"
        },
        {
            title: "Let’s Go",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
            image: "/homepage/Group 11.png"
        },
    ]

    return (
        <div className='px-40 py-10'>
            <div className='grid grid-cols-2 gap-20'>
                <div className='col-span-1'>
                    <div className='flex flex-col items-start justify-center h-full gap-2'>
                        <p className='text-sm font-bold text-primary'>Fast & Easy</p>
                        <h2 className='mb-3 text-4xl font-bold'>
                            Get Your Favourite Resort Bookings
                        </h2>
                        <div className='flex flex-col items-center gap-5'>
                        {
                            category.map((item, index) => (
                                <div key={index} className='flex items-center gap-4'>
                                    <Image src={item.image} width={50} height={50} />
                                    <div>
                                        <h4 className='font-bold text-gray-700'>{item.title}</h4>
                                        <p className='text-sm text-gray-600'>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className='flex items-end w-full col-span-1 '>
                    <Image className='' src={"/homepage/fastEasy.png"} width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}
