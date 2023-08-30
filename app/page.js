import AccurateData from "./components/AccurateData";
// import CardsGroup from "./components/CardsGroup";
import Connected from "./components/Connected";
import Customization from "./components/Customization";
import Sharing from "./components/Sharing";
// import Slider from "./components/Slider";
import Faq from "./components/Faq";
import Banner from "./components/Banner";

export default function Home() {
  return (
   <>
   <div className="">
   <div className="d-flex" >
   <Banner />
    
   </div>
  
   <div className="flex">
     <Customization />
     <AccurateData />
     <Sharing />
     <Connected />
   </div>
   <div className="">
   <Faq />
   </div>
 </div>
 </>
);
}
