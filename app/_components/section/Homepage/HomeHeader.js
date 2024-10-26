import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HomeHeader = () => {
    return (
        <div className='flex items-center justify-center mt-[100px] text-white '>
            <div className='w-[631px] flex flex-col justify-center gap-3 '>
                <div>
                    <Image alt='' src={"https://res.cloudinary.com/drwcrqziw/image/upload/v1729610224/Vector_1_lt8d4r.png"} width={40} height={40} />
                </div>
                <div>
                    <h2 className='text-[40px] font-bold'>No matter where you’re going to, we’ll take you there</h2>
                </div>
                <div className='flex items-center justify-between px-5 py-5 bg-white rounded bg-4 bg-opacity-40'>
                    <div className='w-full max-w-xs min-w-[100px] '>
                        <input className="w-full p-2 text-white transition duration-300 bg-transparent placeholder:text-white ease focus:outline-none focus:border-slate-400" placeholder="Where to?" />
                    </div>
                    <div className='h-10 w-[2px] border border-white/70 mx-5'></div>
                    <div className='w-full max-w-xs min-w-[100px]'>
                        <input className="w-full p-2 text-white transition duration-300 bg-transparent placeholder:text-white ease focus:outline-none focus:border-slate-400" placeholder="Travel Type" />
                    </div>
                    <div className='h-10 w-[2px] border border-white/70 mx-5'></div>
                    <div className='w-full max-w-xs min-w-[100px]'>
                        <input className="w-full p-2 text-white transition duration-300 bg-transparent placeholder:text-white ease focus:outline-none focus:border-slate-400" placeholder="Duration" />
                    </div>
                    <div>
                        <Button>Submit</Button>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3 '>
                        <div className="flex -space-x-3 rtl:space-x-reverse">
                            <Image className="border-2 border-white rounded-full w-7 h-7" width={50} height={50} src="https://res.cloudinary.com/drwcrqziw/image/upload/v1729617432/ujas_photos_2_xt2fks.jpg" alt="" />
                            <Image className="border-2 border-white rounded-full w-7 h-7" width={50} height={50} src="https://res.cloudinary.com/drwcrqziw/image/upload/v1729617507/WhatsApp_Image_2024-08-02_at_17.59.44_de4c3ffb_auasvs.jpg" alt="" />
                            <Image className="border-2 border-white rounded-full w-7 h-7" width={50} height={50} src="https://res.cloudinary.com/drwcrqziw/image/upload/v1729617540/WhatsApp_Image_2024-06-21_at_08.09.08_386c75f6_hgttrd.jpg" alt="" />
                            <a className="flex items-center justify-center text-xs font-medium border-2 border-white rounded-full w-7 h-7 bg-primary" href="#">+</a>
                        </div>
                        <p className='text-sm'>2,500 people booked Tommorowland Event in last 24 hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader