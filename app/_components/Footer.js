import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
    return (
        <div className='px-40 py-20 '>
            <div className='grid grid-cols-5 '>
                <div>
                    <Image alt='logo' src={"/homepage/logo-2.png"} width={90} height={90} />
                    <p className='text-sm text-gray-600'>Travel helps companies manage payments easily.</p>
                    <div className='flex items-center gap-3 mt-6 text-2xl text-primary'>
                        <Link href={""}><FaInstagram /></Link>
                        <Link href={""}><RiFacebookFill /></Link>
                        <Link href={""}><FaLinkedinIn /></Link>
                        <Link href={""} className='text-xl'><RiTwitterXLine /></Link>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-2 text-[#181433] '>
                        <h2 className=' font-bold mb-2 text-lg'>Company</h2>
                        <Link href={""} className='hover:text-primary duration-200'>About Us</Link>
                        <Link href={""} className='hover:text-primary duration-200'>Careers</Link>
                        <Link href={""} className='hover:text-primary duration-200'>Blog</Link>
                        <Link href={""} className='hover:text-primary duration-200'>Pricing</Link>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-2 text-[#181433] '>
                        <h2 className=' font-bold mb-2 text-lg'>Destinations</h2>
                        <Link href={""} className='hover:text-primary duration-200'>Maldives</Link>
                        <Link href={""} className='hover:text-primary duration-200'>Los Angelas</Link>
                        <Link href={""} className='hover:text-primary duration-200'>Las Vegas</Link>
                        <Link href={""} className='hover:text-primary duration-200'>Torronto</Link>
                    </div>
                </div>
                <div className=' col-span-2'>
                    <div className='flex flex-col text-[#181433] mx-3 '>
                        <h2 className=' font-bold mb-2 text-lg'>Join Our Newsletter</h2>
                        <div className="flex w-full items-center space-x-2">
                            <Input type="email" placeholder="Email" />
                            <Button type="submit">Subscribe</Button>
                        </div>
                        <p className='text-sm mt-2'>Will send you weekly updates for your better tour packages.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer