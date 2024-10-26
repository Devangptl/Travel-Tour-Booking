import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Special = () => {
    return (
        <div className='px-20 py-10'>
            <div className='grid grid-cols-2 gap-20'>
                <div>
                    <Image src={"/homepage/honymoon.png"} width={500} height={500} />
                </div>
                <div>
                    <div className='flex flex-col items-start justify-center h-full gap-2'>
                        <p className='text-sm font-bold text-primary'>HONEYMOON SPECIAL</p>
                        <h2 className='mb-3 text-4xl font-bold'>
                            Our Romantic Tropical Destinations
                        </h2>
                        <p className=''>
                            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
                        </p>
                        <Button className="text-sm">View Packages</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Special