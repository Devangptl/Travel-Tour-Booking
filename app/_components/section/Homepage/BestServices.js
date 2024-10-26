import Image from 'next/image'
import React from 'react'

const BestServices = () => {

    const category = [
        {
            id:1,
            title:"Guided Tours",
            description:"Sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            image:"/homepage/tour-guide 1.png"
        },
        {
            id:2,
            title:"Best Flights Options",
            description:"Sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            image:"/homepage/travelling 1.png"
        },
        {
            id:3,
            title:"Religious Tours",
            description:"Sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            image:"/homepage/hands 1.png"
        },
        {
            id:1,
            title:"Medical insurance ",
            description:"Sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            image:"/homepage/medical-team 1.png"
        },
    ] 

  return (
    <div className='py-16'>
        <div className='text-center'>
            <div className='mb-4 '>
                <p className='text-sm font-bold text-center text-primary'>CATEGORY</p>
            </div>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold '>We Offer Best Services</h2>
            </div>
            <div>
                <div className='flex items-center justify-between w-full gap-10 px-32'>
                    {
                        category.map((item,index)=>(
                            <div key={index} className='flex flex-col items-center gap-3 cursor-pointer w-[200px] p-4 hover:shadow-lg rounded-3xl '>
                                 <Image src={item.image} width={55} height={55} />
                                 <h4 className='font-bold'>{item.title}</h4>
                                 <p className='text-sm'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestServices