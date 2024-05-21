import Navbar from './components/Navbar'
import greenlogo from "./assets/motionarteffect-img2.png"
import redlogo from "./assets/motionarteffect-img1.png"
import Review from './components/Review'
import Wlogo from './assets/motionarteffect-img3.png'
import MagicWand from "./assets/motionarteffect-img5.png"
import SectionBox from "./assets/motionarteffect-img11.png"
import PageBox from "./assets/motionarteffect-img10.png"
import Card from './components/Card'
import ThumpsUp from "./assets/motionarteffect-img6.png"
import Moon from "./assets/motionarteffect-img7.png"
import Speed from "./assets/motionarteffect-img9.png"
import LongBar from './components/LongBar'
import IconCard from './components/IconCard'
import Footer from './components/Footer'
import RightArrow from "./assets/Arrow.png"

function App() {

  return (
    <>
   
    <div className='bg-transparent min-h-screen  flex items-center flex-col'>
      <Navbar/>
      <div className=' w-full  md:pl-4 md:pr-4 xl:pl-14 xl:pr-14 2xl:pl-44 2xl:pr-44 3xl:pl-56 3xl:pr-56 4xl:pl-72 4xl:pr-72'>
        <div className='w-full flex justify-between pt-10'>
            <div className='flex hover:cursor-pointer'>
            <img className=' size-fit' src="https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png"></img>
            </div>
            <div className='purchase flex'>
              <button className='bg-white pt-2 pb-2 pl-3 pr-3 rounded-lg w-48 font-sora  text-bg hover:bg-transparent hover:text-white border-2 hidden lg:block'>Purchase Now</button>
            </div>
        </div>
        <div className='text grid grid-rows-3 md:grid-rows-none md:grid-cols-4 text-white w-full  pt-16  place-items-center md:place-items-start'>

            <div className='transform-text grid row-span-1 md:col-span-1 pt-2 font-sora '>
              <div className='gap-2 md:gap-6 flex flex-col font-semibold font-sora'>
                <span>
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-custom-orange to-custom-blue max-w-40'>Transform<br /></span><span className='text-transparent bg-clip-text  bg-gradient-to-r from-custom-orange to-custom-blue'> Your Website</span>
              </span>
              <span className='text-[#eee5ff]'>With Motion Art<br /> Effect</span>
                
              </div>
              
            </div>
            <div className=' center-text grid row-span-2 md:col-span-2 justify-center palce-items-center pl-4 pr-4 sm:pl-0 sm:pr-0 '>
              <div className=' attract-text font-sora text-[#eee5ff] xl:text-[65px] md:text-[40px] lg:text-[55px] font-[500] text-[26px]' > 
                Attract Your Visitors Attention With Colorful <span className='text-transparent bg-clip-text bg-gradient-to-r from-custom-orange to-custom-blue'> <br/>Motion</span><span className='text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-blue'> Art Effect</span>
              </div>
              <div className='text-[16px] pt-3 overflow-auto font-Outfit font-light text-[#b2acc2] '>
              Unleash the power of creativity with Motion Art for Elementor - your <br/>
              ultimate solution for seamlessly integrating captivating animations 
              into your website. 
              </div>
            </div>
            <div className='grid col-span-1  '>

            </div>
        </div>
        <div className='flex w-full flex-col items-center pt-24'>
            <div className='flex font-sora   font-semibold text-lg text-[#eee5ff] place-items-center'>
            Trusted by thousands of users around the world
            </div>
            <div className='flex pt-16 w-full '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  place-items-center xl:place-items-start  w-full gap-12  lg:gap-36 xl:gap-56  2xl:gap-60 3xl:gap-72 4xl:gap-80'> 
              <div className='grid col-span-1'><Review logo={greenlogo}></Review></div>
              <div className='grid col-span-1'><Review logo={redlogo}></Review></div>
        
              <div className='grid col-span-1 lg:col-start-auto lg:col-end-auto md:col-start-1 md:col-end-3'><Review logo={Wlogo}></Review></div>
              
            </div>
            </div>
        </div>
        <div className='w-full flex pt-32 pl-4 md:pl-0'>
          <div className='grid frid-rows-2 md:grid-cols-5 w-full'> 
              <div className=' grid row-span-1 md:col-span-3 font-sora  '>
                  <h2 className='text-[#eee5ff] text-[25px] xl:text-[40px] md:text-[30px] lg:text-[34px]  font-semibold '>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
                  <div className='text-[#b2acc2]  pt-3'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</div>
                  <div className='pt-7  place-self-center md:place-self-auto'>
                    <button className='text-white bg-gradient-to-r from-custom-orange to-custom-blue  pl-7 pr-7 pt-4 pb-4 rounded-2xl font-sora text-lg flex gap-5'>
                      Purchase From Envato
                      <img className='size-fit h-7' src={RightArrow}></img>
                    </button>
                  </div>
              </div>
              <div className='grid  row-span-1 md:col-span-2 pl-20 md:justify-end  justify-center pt-10 md:pt-0'>
                <img src={MagicWand}></img>
              </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center pt-24 pl-4 pr-4 sm:pl-0 sm:pr-0'>
            <div className='w-7/12 text-[20px] text-[#eee5ff] xl:text-[42px] md:text-[30px] lg:text-[35px] text-center font-sora flex '>
           <h2>Apply On Any Section Or Enable For Whole Page</h2> 
            </div>
            <div className='pt-[60px] flex md:gap-5 flex-col md:flex-row'>
              <div>
              <Card image={SectionBox} title={"Apply On Section"} text={"Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."}></Card>
              </div>
               <div className='pt-5 md:pt-16'> 
                <Card image={PageBox} title={"Apply On Page"} text={"Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."}></Card>
               </div>
            </div>
        </div>
        <div className='w-full pt-36 pl-5 pr-5 md:pl-0 md:pr-0'>
            <LongBar></LongBar>
        </div>
        <div className='flex pt-24 flex-col items-center'> 
            <div className='max-w-[460px] text-[#eee5ff] text-[39px] font-sora xl:font-semibold xl:text-[38px] text-center'>
            An All-Round Plugin With Powerful Features
            </div>
            <div className='max-w-[500px] text-[#b2acc2] text-[16px] text-center pt-5'>
            Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
            </div>
        </div>
        <div className='flex pt-16 place-content-center md:place-content-start pl-4 pr-4 sm:pl-0 sm:pr-0'>
          <div className='grid grid-rows-2 lg:grid-rows-none lg:grid-cols-3 md:grid-cols-2 gap-5 items-center'>
            <div className='grid row-span-1 md:col-span-1'>
              <IconCard image={Speed} title={"Light Weight"} text={"Motion Art for Elementor is designed to be lightweight."}></IconCard>
            </div>
            <div className='grid row-span-1 md:col-span-1'>
              <IconCard image={ThumpsUp} title={"100% Responsive"} text={"Create a consistent visual experience across all devices."}></IconCard>
            </div>
            <div className='grid row-span-1  lg:col-span-1 md:col-span-2'>
              <IconCard image={Moon} title={"User Friendly Interface"} text={"Ensure a smooth experience for both applicants and administrators."}></IconCard>
            </div>
          </div>
        </div>
        
      </div>
      <div className='w-full lg:pt-28 pt-16 '>
          <Footer/>
        </div>
    </div>
    </>
  )
}

export default App