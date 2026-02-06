import { pose } from "../../image"


const Banner = () => {
  return (
    <div className="page-container dark:bg-black py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="space-y-5">
          <div className="flex items-center gap-4 dark:text-white">
            <div className="text-7xl text-primary/60">
              <h1 className="font-bold">2</h1>
            </div>
            <div>
              <p className="text-secondary">Global Fitness</p>
              <p className="text-2xl sm:text-4xl font-semibold ">About Us</p>
            </div>
            
          </div>
          <div>
            <p className="text-justify dark:text-white pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id, nisi quas voluptate sunt nobis aut non nam voluptas vel rem laboriosam delectus voluptates laborum provident tenetur, perferendis ipsam tempore?
            Pariatur, fuga. Laudantium facilis a ex ut soluta, molestias at, dignissimos porro quisquam provident vitae enim commodi sint suscipit ratione. Praesentium deleniti beatae vitae veritatis ex illo corrupti modi aliquid!</p>
          </div>
          <button className="primary-btn">Get STarted</button>
        </div>
        <img src={pose} alt="image" className="max-h-[300px] sm:scale-125 drop-shadow-lg" />
      </div>
    </div>
  )
}

export default Banner
