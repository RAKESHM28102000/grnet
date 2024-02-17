/* eslint-disable react/no-unescaped-entities */
import {  motion } from "framer-motion";
import { imge1, imge4 } from "../assets/images";
const textVariants = {
  initial: {
    x:200,
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
    },
  },
};
const textVariants1 = {
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
};
const About = () => {
  return(<section id="about" className="w-full min-h-screen p-2 mx-auto bg-bg3 bg-cover flex flex-col overflow-hidden font-mono">
       <motion.div className="w-full  p-2 mx-auto  flex flex-col lg:flex-row lg:justify-between overflow-hidden font-mono gap-3">
       {/* first-child */}
       <motion.div variants={textVariants1} whileInView="animate" initial="initial" className="flex flex-col justify-center items-center gap-4 lg:w-2/5 w-full">
          <motion.img variants={textVariants1} className="max-lg:hidden rounded-md shadow-2xl shadow-black hover:shadow-white h-[70%]" src={imge1} alt="home-img" width={"90%"} height={"90%"} />
          {/* <motion.button variants={textVariants} className="relative p-4 uppercase font-semibold hover:text-white hover:bg-black bg-[#DAFFFB] text-[#04364A] shadow-2xl shadow-black ring-2  ring-black hover:ring-white hover:shadow-white rounded-full text-2xl w-[240px]">Enroll Now</motion.button>       */}
        </motion.div>
        {/* 2-child */}
       <motion.div variants={textVariants} whileInView="animate" initial="initial" className="w-full lg:w-3/5 px-2 min-h-screen text-left flex flex-col justify-center gap-7 items-center "> 
         <motion.h1 variants={textVariants} className="w-[90%] text-center font-bold text-[#141E46] text-3xl xl:text-4xl p-4 hover:text-[#365486] bg-[#FFF5E0] rounded-md shadow-2xl shadow-black hover:shadow-white ring-2 ring-[#0F1035]">WHAT WE DO</motion.h1>
         <motion.p  variants={textVariants} className="w-[90%] p-4 text-lg capitalize font-semibold bg-[#FFD1E3] text-[#392467] shadow-2xl shadow-black hover:shadow-white rounded-md ">GOWTHAMRAJ NETWORK INDIA PRIVATE LIMITED - GR NETWORK is the first ever TV Channel based Educational Technology(Edu-tech) Media Company in India.We are social innovative startup.<br/><br/>The company's main motto is to provide high quality educational courses for everyone at very low cost so that everyone in the society can learn without any barriers.We provide diverse professional certificate tech courses to the every individual in the society which includes students, graduates, and working professionals who wish to upskill themselves and learn new technologies.<br/><br/>We offers high quality learning courses on various IT and tech domains in two languages such as Tamil and English.</motion.p>
         <motion.button  variants={textVariants} className="w-[90%] text-xl p-2 rounded-full bg-black text-white border-2 border-white shadow-2xlhover:shadow-white hover:bg-white hover:text-black font-bold"><a href="https://gowthamrajnetwork.com/" target="blank">Our Edutech Platform</a></motion.button>
       </motion.div>
         </motion.div> 

         {/* section-2 */}
         <motion.div className="w-full  p-2 mx-auto  flex flex-col lg:flex-row lg:justify-between overflow-hidden font-mono gap-3">
         {/* first-child-2     */}
         <motion.div variants={textVariants1} whileInView="animate" initial="initial" className="w-full lg:w-3/5 px-2 min-h-screen text-left flex flex-col justify-center gap-7 items-center "> 
             <motion.p  variants={textVariants1} className="w-[90%] p-4 text-lg capitalize font-semibold bg-[#B6C4B6] text-[#163020] shadow-2xl shadow-black hover:shadow-white rounded-md ">Our mission is to make technical education available to all at a very very affordable cost. We are providing the courses for free of cost for initial few months after that we are charging only the platform fee that is affordable by everyone. Our primary goal is to bring tech closer to everyone without any financial barriers. We offering courses created by working professionals in well-known companies and experts in their fields so that we ensure the quality of the courses.We are providing the professional certificates after completing the courses.Other startups, companies,organisation can also get benefitted by featuring their services to the next generation at the lowest cost in our platform.<br/><br/>We are providing coaching and guidance to the learners both in online and offline platform. <br/><br/>We are also conducting different sessions for helping them in various aspects like placement training, skill development in various technologies and so on.<br/><br/>The company also features the best technical and general products / services between the courses in our platform so that the learners can also use the other best startup brands.We are also very aware that our featuring content should be suitable for all kind of learners.Hence we help learners to learn new skills through the courses in our edu-tech platform , startups/brands/companies to feature their products/services in our platform as slide Advertisements equivalent to TV Channels.All the courses are categorised as individual shows ,the sponsors / advertisers content will come in the appropriate time period.</motion.p>
             </motion.div>

           {/* second-child-2 */}
         <motion.div variants={textVariants} whileInView="animate" initial="initial" className="flex flex-col justify-center items-center gap-4 lg:w-2/5 w-full">
            <motion.img variants={textVariants} className="rounded-md shadow-2xl shadow-black hover:shadow-white h-[70%]" src={imge4} alt="home-img" width={"90%"} height={"100%"} />
            {/* <motion.button variants={textVariants} className="relative p-4 uppercase font-semibold hover:text-white hover:bg-black bg-[#DAFFFB] text-[#04364A] shadow-2xl shadow-black ring-2  ring-black hover:ring-white hover:shadow-white rounded-full text-2xl w-[240px]">Enroll Now</motion.button>       */}
            <motion.button  variants={textVariants} className="w-[90%] text-xl p-2 rounded-full bg-black text-white  hover:bg-white hover:text-black border-2 border-white shadow-2xlhover:shadow-white font-bold"><a href="https://gowthamrajnetwork.com/" target="blank">Learn More</a></motion.button>
          </motion.div>          
        </motion.div>

</section>
  )
  }

export default About