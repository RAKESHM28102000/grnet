import {  motion } from "framer-motion";
const textVariants = {
  initial: {
    y:150,
    opacity: 0,
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration:.9,
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

const Work = () => {
  return (
    <section id="work" className='bg-bg3 bg-cover overflow-hidden bg-white  w-full min-h-screen text-white flex flex-col justify-start gap-3 items-center p-2 lg:p-4 '>
    <h2 className="w-[90%] lg:w-[50%] ring-2 ring-[#ff62a1] hover:ring-white text-[#19155e] hover:text-[#ffffff] bg-[#ffd3b3] hover:bg-[#ffbf91] max-xl:text-[20px] xl:text-4xl text-center font-bold m-4 p-4 rounded-md shadow-lg shadow-black hover:shadow-white">WHAT OUR WORK</h2>
    <motion.div whileInView='animate' initial='initial' variants={textVariants} className="flex justify-start flex-col gap-4 items-center">
    <motion.p  variants={textVariants} className="text-lg  p-2 lg:p-4 rounded-md ring-4 shadow-lg shadow-black hover:shadow-white ring-black hover:ring-[#ff4b4b] w-[90%]  capitalize bg-gradient-to-r from-[#ff5b6e] to-[#ffc3ca] text-[#1F1717]"> Our Product is GOWTHAMRAJ NETWORK Edu-tech Platform.The main idea behind the platform is to make everyone in the society to learn the highly needed skills in the current world.In our Platform we provide high quality educational courses to the learners at very low cost.</motion.p>
    <motion.p  variants={textVariants} className="text-lg  p-2 lg:p-4 rounded-md ring-4 shadow-lg shadow-black hover:shadow-white ring-black hover:ring-[#00A9FF] w-[90%]  capitalize bg-gradient-to-r from-[#0d4b57] to-[#ccf6ff] text-[#1d1853]">Our professional courses includes everything from technical to non technical, from basic c to advanced data science concepts, from IT related skills to core domain related skills which includes but not limited to ECE, EEE ,Mechanical core domains.We cover all the technical skills needed in the current market to upskill the person to land in his/her dream job, run an organisation and so on.</motion.p>
    <motion.p  variants={textVariants} className="text-lg  p-2 lg:p-4 rounded-md ring-4 shadow-lg shadow-black hover:shadow-white ring-black hover:ring-[#b4a213] w-[90%]  capitalize bg-gradient-to-r from-[#ffe043] to-[#fff2ae] text-[#45474B]">Through our platform already working IT and core company employees can work as instructors / mentors so that they can teach new technologies and they can also learn new things. We are providing coaching and guidance to the learners both in online and offline platform.</motion.p>
    <motion.p  variants={textVariants} className="text-lg  p-2 lg:p-4 rounded-md ring-4 shadow-lg shadow-black hover:shadow-white ring-black hover:ring-[#ff8551] w-[90%]  capitalize bg-gradient-to-r from-[#64390f] to-[#ffc184] text-[#192655]">We are also conducting different sessions for helping them in various aspects like placement training, skill development in various technologies and so on.</motion.p>
    <motion.p  variants={textVariants} className="text-lg  p-2 lg:p-4 rounded-md ring-4 shadow-lg shadow-black hover:shadow-white ring-black hover:ring-[#84c4ff] w-[90%]  capitalize bg-gradient-to-r from-[#8b1471] to-[#ff82e4] text-[#072541]">The company also features the best technical and general products / services between the courses in our platform so that the learners can also use the other best startup brands.We are also very aware that our featuring content should be suitable for all kind of learners.Hence we help learners to learn new skills through the courses in our edu-tech platform , startups/brands/companies to feature their products/services in our platform as slide Advertisements equivalent to TV Channels.All the courses are categorised as individual shows ,the sponsors / advertisers content will come in the appropriate time period.Other startups, companies,organisation can also get benefitted by featuring their services to the next generation at the lowest cost in our platform.</motion.p>
    </motion.div>
  </section>
  )
}

export default Work