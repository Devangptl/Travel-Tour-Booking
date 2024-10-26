"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Partners = () => {

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch('/api/partners');
        const data = await res.json();
        setPartners(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);
  console.log(partners);
  return (
    <div className='bg-[#F7F7F7] py-8 px-28'>
      <div className='flex items-center justify-between '>
        {partners.map((partner,index)=>{
          return(
            <div key={index}>
              <Image alt='' src={partner.image.url} height={150} width={150}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Partners

