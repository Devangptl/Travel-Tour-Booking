import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Promotion = () => {
    
    const images = [
        {
            image:"/homepage/promotion-1.png"
        },
        {
            image:"/homepage/promotion-2.png"
        },
        {
            image:"/homepage/promotion-3.png"
        },
    ]

    return (
        <div className='px-40 py-20'>
            <div className='grid grid-cols-2 '>
                <div className='h-full'>
                    <div className='flex flex-col items-start justify-center h-full gap-2'>
                        <p className='text-sm font-bold uppercase text-primary'>Promotion</p>
                        <h2 className='mb-3 text-4xl font-bold'>
                        We Provide You Best Europe Sightseeing Tours
                        </h2>
                        <p className=''>
                            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
                        </p>
                        <Button className="text-sm">View Packages</Button>
                        <div className='flex items-center justify-between w-[120%] z-10 gap-3 mt-10'>
                        {
                            images.map((item,index)=>(
                                <div>
                                    <Image src={item.image} width={200} height={200} alt=''/>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                   
                </div>
                <div className='flex items-center justify-end w-full h-full '>
                    <Image className='w-full h-full' src={"/homepage/promotion-Illustration.png"} width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}

export default Promotion