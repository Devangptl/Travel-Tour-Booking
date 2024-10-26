import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='py-10'>
            <div className="h-[249px] bg-fill bg-cover " style={{
                backgroundImage: `url('https://res.cloudinary.com/drwcrqziw/image/upload/v1729929658/banner_9f53509ba2.png')`,
            }}>
                <div className='grid h-full grid-cols-2 px-20'>
                    <div className='flex flex-col items-start justify-center h-full pl-32 text-4xl font-semibold text-white'>
                        <h2 className=''>Let’s make your</h2>
                        <h2>next holiday amazing</h2>
                        <div className='flex items-end justify-end w-full mt-1'>
                        <Image className='' src={"/homepage/Line-1.png"} height={250} width={250}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner