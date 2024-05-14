import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import illustrationIntro from '../assets/illustration-intro.svg';

const HeroSection = () => {
  return (



    <section className="bg-orange-300">
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row '>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
         Towards Innovation In Education
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          Join with us in fostering skill development and community-driven innovation to address societal challenges using cutting-edge digital tools. Together, let's build a brighter future."
          </p>
          <div className='flex justify-center md:justify-start'>
            {/* <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </Link> */}
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustrationIntro} alt='' />
        </div>
      </div>
    </section>
    // <div className="flex flex-col items-center mt-6 lg:mt-20">
      
    //   <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    //   Empowering 
    //     <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
    //       {" "}
    //       Tomorrow's Tech Minds
    //     </span>
    //   </h1>
    //   <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    //     Empower your creativity and bring your  ideas to life with our
    //     intuitive tools. Get started today and turn your imagination
    //     into reality!
    //   </p>
    //   <div className="flex justify-center my-10">
    //     <a
    //       href="#"
    //       className="bg-gradient-to-r from-orange-300 to-orange-500 py-3 px-4 mx-3 rounded-md"
    //     >
    //       Start for free
    //     </a>
    //     <a href="#" className="py-3 px-4 mx-3 rounded-md border">
    //       Documentation
    //     </a>
    //   </div>
    //   <div className="flex mt-10 justify-center">
    //     <video
    //       autoPlay
    //       loop
    //       muted
    //       className="rounded-lg w-1/2 border border-neutral-100 shadow-sm shadow-neutral-400 mx-2 my-4"
    //     >
    //       <source src={video1} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //     <video
    //       autoPlay
    //       loop
    //       muted
    //       className="rounded-lg w-1/2 border border-neutral-100 shadow-sm shadow-neutral-400 mx-2 my-4"
    //     >
    //       <source src={video2} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    // </div>
  );
};

export default HeroSection;
