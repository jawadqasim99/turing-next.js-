
import { Nunito } from "next/font/google";
import MainPage from "./allpage/MainPage";

const nunito_init=  Nunito({
  subsets: ["latin"],
  weight:['600'],
  variable: "--font-nunito"
})

export default function Home() {
  return (

   <div className={nunito_init.variable}>
  
  <MainPage/>


  </div>
  );
}
