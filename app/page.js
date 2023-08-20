import AccurateData from "./components/AccurateData";
import CardsGroup from "./components/CardsGroup";
import Connected from "./components/Connected";
import Customization from "./components/Customization";
import Sharing from "./components/Sharing";
import Slider from "./components/Slider";
import Faq from "./components/Faq";

export default function Home() {
  return (
   <>
   <div className="container">
   <div className="d-flex" style={{marginTop:"70px"}}>
     <Slider />
   </div>
   <CardsGroup />
   <hr className="text-dark border-3"/>
   <div className="flex">
     <Customization />
     <AccurateData />
     <Sharing />
     <Connected />
   </div>
   <hr className="text-dark border-3" />
   <div className="my-5">
   <Faq />
   </div>
 </div>
 </>
);
}
