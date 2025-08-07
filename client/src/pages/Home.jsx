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
import arrow from '../assets/r1.svg'; // <-- NEW
import "../index.css";
import Loader from "../components/Loader";

function Home() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid Layout */}
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

              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 text-xs sm:text-sm md:text-base">
                <p className="font-semibold">Diagnosis Reports</p>
                <p className="font-semibold">Heart Reports</p>
                <p className="font-semibold">Prescriptions</p>
              </div>
            </div>
          </div>

          {/* Right Side Phone Mockup */}
          <div className="relative w-[162px] sm:w-[180px] md:w-[200px] mx-auto">
            <img src={screen} alt="banner_mobile" className="max-w-full object-contain object-center" />
            <img src={homebar} alt="home_bar" className="w-[96%] mx-auto absolute left-0 right-0 bottom-1 object-contain object-center rounded-bl-[30px] rounded-br-[30px] z-10" />
            <div className="absolute left-0 right-0 top-0 bottom-0 m-2 mx-1 overflow-hidden z-0 rounded-[30px]">
              <div className="scroll-loop h-fit w-fit">
                <img src={scroll} alt="all_records" className="w-full h-auto min-h-[200%] object-cover object-top" />
              </div>
            </div>
          </div>

          {/* Horizontal Line with Arrow */}
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
          {/* Store Section - Aligned with Left Icons */}
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">Store</h2>
            <p className="text-gray-500">Effortlessly organize your medical records with just one click—both digital and physical documents securely stored in one place.</p>
          </div>

          {/* We Do The Work Section - Aligned with Circle */}
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">We Do The Work</h2>
            <p className="text-gray-500">Let our technology seamlessly manage backend tasks for efficient medical record organization.</p>
          </div>

          {/* Get Timeline Section - Aligned with Phone */}
          <div className="text-center px-4">
            <h2 className="font-bold text-xl mb-2">Get Timeline</h2>
            <p className="text-gray-500">Organize your medical records effortlessly with our timeline, ensuring you never worry about them again. Streamline your health journey with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
