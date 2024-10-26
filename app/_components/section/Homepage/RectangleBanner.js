import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const RectangleBanner = () => {
    return (
        <div className='flex h-[300px] py-10'>
            <div className="w-full bg-cover bg-fill" style={{
                backgroundImage: `url(/homepage/Rectangle-banner-1.png)`,
            }}>
                <div className='grid w-full h-full '>
                    <div className='flex flex-col items-center justify-center w-full h-full font-semibold text-white bg-black/20'>
                        <p className='text-sm uppercase '>Promotion</p>
                        <h2 className='text-3xl'>Explore Nature</h2>
                        <Button className="mt-2 bg-transparent border hover:bg-transparent ">View Packages</Button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-cover bg-fill" style={{
                backgroundImage: `url(/homepage/Rectangle-banner-2.png)`,
            }}>
                <div className='grid w-full h-full '>
                <div className='flex flex-col items-center justify-center w-full h-full font-semibold text-white bg-black/40'>
                <p className='text-sm uppercase '>Promotion</p>
                        <h2 className='text-3xl'>Explore Cities</h2>
                        <Button className="mt-2 bg-transparent border hover:bg-transparent ">View Packages</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RectangleBanner


// Rectangle - banner - 1