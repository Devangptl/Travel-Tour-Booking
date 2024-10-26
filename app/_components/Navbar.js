"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    
    const navItem = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: <NavigationMenuDemo />,
            path: "/service"
        },
        {
            id: 4,
            name: "Upcomming Packages",
            path: "/upcomming-packages"
        },
        {
            id: 5,
            name: "Blogs",
            path: "/blogs"
        },
    ]

    return (
        <div className={` flex items-center justify-around py-5 text-white`} >
            <div>
                <Image alt='logo' src={"https://res.cloudinary.com/drwcrqziw/image/upload/v1729530066/logo_1_lnjbvd.png"} width={90} height={90} />
            </div>
            <div className='flex items-center gap-7'>
                {
                    navItem.map((item, index) => (
                        <div key={index}>
                            <Link href={item.path} className='duration-300 cursor-pointer hover:underline underline-offset-8'>
                                {item.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div>
                <Button>Get in Touch</Button>
            </div>
        </div>
    )
}

export default Navbar


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

const components = [
    {
        id: 1,
        name: "Honeymoon Packages",
        path: "/honeymoon-packages",
    },
    {
        id: 2,
        name: "Tours Packages",
        path: "/tours-ackages",
    },
    // {
    //     id: 3,
    //     name: "Musical Events",
    //     path: "/musical-events",
    // },
    // {
    //     id: 4,
    //     name: "Build Package",
    //     path: "/build-package",
    // },

]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem >
                    <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <ul className=" text-white  flex flex-col bg-[gray]/10  items-center gap-3 p-4 w-[250px] ">
                            {components.map((component,index) => (
                                    <div key={index}>
                                        <Link href={component.path} className='duration-300 cursor-pointer hover:text-primary'>
                                            {component.name}
                                        </Link>
                                    </div>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
