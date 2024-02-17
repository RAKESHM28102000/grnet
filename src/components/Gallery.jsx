// import { motion } from "framer-motion";
// const sliderVariants = {
    // initial: {
      // y:10,
      // opacity:0
    // },
    // animate: {
      // y:0,
      // transition: {
        // duration:1,
        // opacity:1
      // },
    // },
  // };

const Gallery = () => {
  return (
    <section id='testimonial'
    className="min-h-[100vh]  bg-cover bg-bg5 flex flex-col justify-start gap-5 items-center overflow-hidden">
        <h2 className="max-md:w-[300px] md:w-1/2 ring-2 ring-[#163020] hover:ring-yellow-200 text-[#163020] bg-[#EEF0E5] max-xl:text-[20px] xl:text-4xl text-center font-bold m-4 p-4 hover:text-[#365486] hover:bg-[#E0CCBE] rounded-md shadow-lg shadow-black hover:shadow-white uppercase ">Gallery</h2>
  <div className="flex flex-row justify-start items-center flex-nowrap gap-2 animate-righttoleftinfinite px-[50px] lg:px-6 overflow-hidden">
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-1 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-2 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-3 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-4 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-5 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-6 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-7 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-8 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-9 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-1 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-2 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-3 bg-cover"></div>
    <div className="w-[400px] max-md:w-[240px] max-md:h-[300px] h-[400px] bg-white ring-2 ring-black pl-4 overflow-hidden bg-bg-4 bg-cover"></div>
  </div>
  </section>
  )
}

export default Gallery