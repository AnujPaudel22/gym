import { Pushups } from "../../image"


const HeroSection = () => {
  return (
    
    <>
    <span id="/gym/home"></span>
      <div className="relative h-screen w-full overflow-hidden page-container">
      <div className="">
        <div >
            <img src={Pushups} alt="MySelf" className="absolute inset-0 h-full w-full object-cover " />
        </div>
          
      <div className="absolute inset-0 bg-white/50 dark:bg-black/70 ">
        <div className="h-screen w-full flex items-center">
            <div className="w-full text-center text-2xl mx-auto">
                <p className="text-primary dark:text-white">Start Your Fitness Journey</p>
                <h1 className=" dark:text-white text-5xl md:4xl font-bold capitalize">Your Fitness Journey Begins</h1>
                <p className="py-2 text-primary dark:text-white">The body achieves that mind believes</p>
                <button className="primary-btn">Get Started</button>
            </div>
        </div>
      </div>
      </div>
      
    </div>    
    </>
  )
}

export default HeroSection
