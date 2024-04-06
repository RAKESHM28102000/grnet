import { img2} from "../assets/images"
import {  motion } from "framer-motion"
import About from "./About";
import Work from "./Work";
import Gallery from "./Gallery";
import Workers from "./Worker";
import Contact from "./Contact";
// import Coursel from "./Coursel";
const textVariants = {
  initial: {
    x:-200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration:3,
      repeat: Infinity,
      repeatType:"mirror",
    },
  },
};
const Home = () => {
  return (<>
    <section id="home" className="w-full min-h-screen px-2 flex flex-col lg:flex-row lg:justify-between bg-bg1 bg-cover overflow-hidden mx-auto ">
        <motion.div variants={textVariants} whileInView="animate" initial="initial" className="text-left w-full lg:w-3/5 min-h-screen px-4 text-white  flex flex-col justify-center gap-5">
          <motion.h1 variants={textVariants} className=" text-[#2c2c2c] bg-[#DAFFFB] text-2xl xl:text-4xl inline-block p-4 font-bold  rounded-md shadow-lg shadow-black hover:shadow-white ">GOWTHAMRAJ NETWORK INDIA PRIVATE LIMITIED</motion.h1>
          <motion.h1 variants={textVariants} className="bg-[#F1B4BB] text-[#132043]  text-2xl  xl:text-3xl  rounded-md p-4 shadow-lg shadow-black  hover:shadow-white">EDUCATION TECHNOLOGY MEDIA COMPANY</motion.h1>
          <motion.div variants={textVariants} className="text-[#113946] bg-[#FFF2D8] text-2xl  xl:text-3xl  p-4 shadow-2xl shadow-black  hover:shadow-white rounded-md"><p>Education is the most powerful weapon which you can use to change the world - A.P.J ABDUL KALAM</p></motion.div>
        </motion.div>
        <motion.div  className="text-xl lg:text-3xl px-4 w-full lg:w-2/5 min-h-screen flex flex-col justify-center items-center gap-5 relative">
              {/* <img className="-z-100 absolute top-[100px] right-[100px] rounded-xl  size-3/5 shadow-lg shadow-black" src={img1} alt="home-img" /> */}
              <img className="rounded-full shadow-2xl shadow-black hover:shadow-white" src={img2} alt="home-img" width={"400px"} height={"400px"} />
              <button className="relative p-4 uppercase font-semibold  bg-black text-white ring-2 ring-white hover:bg-white hover:text-black  shadow-2xl shadow-black hover:ring-black hover:shadow-white rounded-full text-2xl w-[240px]">Enroll Now</button>
       </motion.div>
       </section>
       <About/>
       <Work/>
       <Gallery/>
       <Workers/>
       <Contact/>
       {/* <Coursel/> */}
       </>
  
  )
}

export default Home