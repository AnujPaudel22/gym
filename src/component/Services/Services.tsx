import { ServicePlan } from "../../Constant/ServicePlan"


const Services = () => {
  return (
    <>
    <span id="services"></span>
    <div className="page-container py-14 dark:bg-gray-500  ">
      <div>
        <div className="pb-14" >
            <h1 className="text-3xl font-bold text-center">Why <span className="text-secondary">Choose</span> Us</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3 ">
            {ServicePlan.map((services)=>(
                <div key={services.id} className="space-x-3 sm:space-y-6 text-center bg-gray-200 dark:bg-black dark:border-3    hover:border-secondary dark:text-white hover:bg-primary/50 dark:hover:bg-primary/30 rounded-2xl p-5">
                    <h1 className="text-3xl font-bold">{services.name}</h1>
                    <h1 className="text-center text-4xl font-semibold text-primary hover:text-white duration-500">{services.price}</h1>
                    {services.description.map((des,key)=>(
                        <p key={key}>{des}</p>
                    ))}
                    <p>{services.duration}</p>
                    <a href=""className="primary-btn">Learn More</a>

                </div>
            ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
