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
import "../index.css";

function Home() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 items-center gap-8">


        <div className="flex flex-col items-center w-[280px] max-w-4xl mx-auto py-16 space-y-0.5">
        


  {/* Row 1 */}
  <div className="flex justify-between w-full px-8">
    <img src={whatsapp} className="icon-size" alt="WhatsApp" />
    <img src={health} className="icon-size" alt="Health" />
  </div>

  {/* Row 2 */}
  <div className="flex justify-center w-full">
    <img src={folder} className="icon-size" alt="Folder" />
  </div>

  {/* Row 3 */}
  <div className="flex justify-between w-full px-8">
    <img src={doctors} className="icon-size" alt="Doctors" />
    <img src={hospital} className="icon-size" alt="Hospital" />
  </div>

  {/* Row 4 */}
  <div className="flex justify-center w-full">
    <img src={gmail} className="icon-size" alt="Gmail" />
  </div>

  {/* Row 5 */}
  <div className="flex justify-between w-full px-8">
    <img src={googlefit} className="icon-size" alt="Google Fit" />
    <img src={phone} className="icon-size" alt="Phone" />
  </div>

</div>




        
      


  
<div className="relative flex justify-center items-center w-full">
  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M100,10
           a90,90 0 1,1 -0.01,0"  // perfect circle path
        fill="none"
        stroke="#60A5FA"          // Tailwind's blue-400
        strokeWidth="8"
      />
    </svg>

    {/* Overlay text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 text-xs sm:text-sm md:text-base">
      <p className="font-semibold">Diagnosis Reports</p>
      <p className="font-semibold">Heart Reports</p>
      <p className="font-semibold">Prescriptions</p>
    </div>
  </div>
</div>


<div className="relative w-[162px] sm:w-[180px] md:w-[200px]">
  {/* Phone frame */}
  <img
    src={screen}
    alt="banner_mobile"
    className="max-w-full object-contain object-center"
  />

  {/* Bottom bar overlay */}
  <img
    src={homebar}
    alt="home_bar"
    className="w-[96%] mx-auto absolute left-0 right-0 bottom-1 object-contain object-center rounded-bl-[30px] rounded-br-[30px] z-10"
  />

  {/* Scrolling content behind frame */}
  <div className="absolute left-0 right-0 top-0 bottom-0 m-2 mx-1 overflow-hidden z-0 rounded-[30px]">
    <div className="scroll-loop h-fit w-fit">
      <img
        src={scroll}
        alt="all_records"
        className="w-full h-auto min-h-[200%] object-cover object-top"
      />
    </div>
  </div>
</div>

      </div>

      {/* Bottom features */}
      <div className="flex flex-col md:flex-row justify-around items-start w-full max-w-6xl mt-12 space-y-8 md:space-y-0 md:space-x-4 mx-auto">
        <div className="max-w-xs text-center mx-auto">
          <h2 className="font-bold text-xl mb-2">Store</h2>
          <p className="text-gray-500">Effortlessly organize your medical records with just one click—both digital and physical documents securely stored in one place.</p>
        </div>
        <div className="max-w-xs text-center mx-auto">
          <h2 className="font-bold text-xl mb-2">We Do The Work</h2>
          <p className="text-gray-500">Let our technology seamlessly manage backend tasks for efficient medical record organization.</p>
        </div>
        <div className="max-w-xs text-center mx-auto">
          <h2 className="font-bold text-xl mb-2">Get Timeline</h2>
          <p className="text-gray-500">Organize your medical records effortlessly with our timeline, ensuring you never worry about them again. Streamline your health journey with ease.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
