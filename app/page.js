import Image from "next/image";
import Navbar from "./_components/Navbar";
import HomeHeader from "./_components/section/Homepage/HomeHeader";
import Partners from "./_components/section/Homepage/Partners";
import BestServices from "./_components/section/Homepage/BestServices";
import Special from "./_components/section/Homepage/Special";
import { FastEasy } from "./_components/section/Homepage/FastEasy";
import Banner from "./_components/section/Homepage/Banner";
import Promotion from "./_components/section/Homepage/Promotion";
import RectangleBanner from "./_components/section/Homepage/RectangleBanner";

export default function Home({}) {
  

  return (
    <div>
      <div className="h-screen bg-center bg-cover" style={{
        backgroundImage: `url('https://res.cloudinary.com/drwcrqziw/image/upload/v1729530542/Rectangle_19290_1_azwxvk.png')`,
      }}>
        <Navbar />
        <div>
          <HomeHeader />
        </div>
      </div>
      <Partners/>
      <BestServices/>
      <Special/>
      <FastEasy/>
      <Banner/>
      <Promotion/>
      <RectangleBanner/>
    </div>
  );
}



