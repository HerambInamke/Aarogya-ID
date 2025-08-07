import { useEffect, useState } from 'react';
import doctors from '../assets/doctors.svg';
import folder from '../assets/folder.svg';
import gmail from '../assets/gmail.svg';
import phone from '../assets/phone.svg';
import googlefit from '../assets/google-fit.svg';
import hospital from '../assets/hospital.svg';
import health from '../assets/health.svg';
import whatsapp from '../assets/whatsapp.svg';
import screen from '../assets/screen.webp';
import scroll from '../assets/scroll.webp';
import homebar from '../assets/homebar.webp';
import arrow from '../assets/r1.svg';
import "../index.css";
import Loader from "../components/Loader";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const screenshots = [
    { src: "https://swasthx.com/assets/banner_3-de66739a.webp" },
    { src: "https://swasthx.com/assets/banner_1-b49a4066.webp" },
    { src: "https://swasthx.com/assets/banner_5-f92d780d.webp" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        

        {/* Top Section - Hero Text + Phone Carousel */}
        <div className="flex items-center justify-between mb-16 gap-12">
          {/* Left Side - Hero Text */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Your Health At<br />
              Your Fingertips
            </h1>
            <p className="text-xl md:text-2xl text-blue-500 mb-4 font-semibold">
              Fewer steps, Faster Care.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              "Walk into hospitals like you fly through airports—smart, paperless,<br />
              and powered by Swasthx AI."
            </p>
          </div>

          {/* Right Side - Phone Carousel */}
          <div className="flex-1 flex justify-end">
            <div className="flex justify-center items-center relative w-[320px] h-[640px] xl:shadow-[0px_50px_50px_-20px_rgba(0,0,0,0.2)] rounded-[50px]">

              {/* Left Image */}
              <div className="absolute top-3 bottom-3 left-3 right-3 transform transition-all duration-[1500ms] ease-out translate-x-[-40%] scale-[0.85] z-10 opacity-70 xl:shadow-lg rounded-[40px] overflow-hidden">
                <img
                  src={screenshots[(currentImageIndex - 1 + screenshots.length) % screenshots.length].src}
                  className="w-full h-full object-cover object-center"
                  alt="Healthcare image"
                />
              </div>

              {/* Right Image */}
              <div className="absolute top-3 bottom-3 left-3 right-3 transform transition-all duration-[1500ms] ease-out translate-x-[40%] scale-[0.85] z-10 opacity-70 xl:shadow-lg rounded-[40px] overflow-hidden">
                <img
                  src={screenshots[(currentImageIndex + 1) % screenshots.length].src}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Center/Active Image */}
              <div className="absolute top-3 bottom-3 left-3 right-3 transform transition-all duration-[1500ms] ease-out translate-x-0 scale-100 z-20 opacity-100 rounded-[40px] overflow-hidden shadow-xl">
                <img
                  src={screenshots[currentImageIndex].src}
                  alt="Healthcare image"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* ✅ Updated Phone Frame Overlay - FIXED */}
              <div className="absolute inset-0 pointer-events-none z-30">
                <div className="w-full h-full rounded-[50px] p-3">
                  <div className="w-full h-full border-2 border-gray-800 rounded-[40px]"></div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout - Original Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-12 relative">

          {/* Left Side Icons */}
          <div className="flex flex-col items-center w-[280px] max-w-4xl mx-auto py-16 space-y-0.5">
            <div className="flex justify-between w-full px-8">
              <img src={whatsapp} className="icon-size" alt="WhatsApp" />
              <img src={health} className="icon-size" alt="Health" />
            </div>
            <div className="flex justify-center w-full">
              <img src={folder} className="icon-size" alt="Folder" />
            </div>
            <div className="flex justify-between w-full px-8">
              <img src={doctors} className="icon-size" alt="Doctors" />
              <img src={hospital} className="icon-size" alt="Hospital" />
            </div>
            <div className="flex justify-center w-full">
              <img src={gmail} className="icon-size" alt="Gmail" />
            </div>
            <div className="flex justify-between w-full px-8">
              <img src={googlefit} className="icon-size" alt="Google Fit" />
              <img src={phone} className="icon-size" alt="Phone" />
            </div>
          </div>
                
          {/* Middle Circle Loader with Text */}
          <div className="relative flex justify-center items-center w-full">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <Loader />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 text-xs sm:text-sm md:text-base">
                <p className="font-semibold">Diagnosis Reports</p>
                <p className="font-semibold">Heart Reports</p>
                <p className="font-semibold">Prescriptions</p>
              </div>
            </div>
          </div>

          {/* Right Side Phone Mockup - Original */}
          <div className="relative w-[162px] sm:w-[180px] md:w-[200px] mx-auto">
            <img src={screen} alt="banner_mobile" className="max-w-full object-contain object-center" />
            <img src={homebar} alt="home_bar" className="w-[96%] mx-auto absolute left-0 right-0 bottom-1 object-contain object-center rounded-bl-[30px] rounded-br-[30px] z-10" />
            <div className="absolute left-0 right-0 top-0 bottom-0 m-2 mx-1 overflow-hidden z-0 rounded-[30px]">
              <div className="scroll-loop h-fit w-fit">
                <img src={scroll} alt="all_records" className="w-full h-auto min-h-[200%] object-cover object-top" />
              </div>
            </div>
          </div>

          {/* NEW: Hospital to Circle Line with Arrow */}
          <div className="hidden md:block absolute left-[24.1%] top-[50%] transform -translate-y-1/2 w-[214px] h-[3px] bg-blue-400 z-0 overflow-hidden">
            <img
              src={arrow}
              alt="arrow"
              className="absolute left-0 top-[-0.75rem] w-6 h-6 animate-arrow-slide"
            />
          </div>

          {/* Original Horizontal Line with Arrow (Circle to Phone) */}
          <div className="hidden md:block absolute left-[53%] top-[52%] transform -translate-y-1/2 translate-x-[75px] w-[225px] h-[2px] bg-blue-400 z-0 overflow-hidden">
            <img
              src={arrow}
              alt="arrow"
              className="absolute left-0 top-[-0.75rem] w-6 h-6 animate-arrow-slide"
            />
          </div>
        </div>

        {/* Bottom features - Aligned with the grid above */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">Store</h2>
            <p className="text-gray-500">
              Effortlessly organize your medical records with just one click—both digital and physical documents securely stored in one place.
            </p>
          </div>
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">We Do The Work</h2>
            <p className="text-gray-500">
              Let our technology seamlessly manage backend tasks for efficient medical record organization.
            </p>
          </div>
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">Get Timeline</h2>
            <p className="text-gray-500">
              Organize your medical records effortlessly with our timeline, ensuring you never worry about them again. Streamline your health journey with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;  