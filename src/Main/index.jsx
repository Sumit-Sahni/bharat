import homepic from "../assets/homepic.jpg"
import CreateAndManage from "../component/CreateAndManage";
import OurPlatForms from "../component/OurPlatForms";
const Main = () => {
  return (
    <section  className="w-full h-full">
         <div className="w-full h-[80vh] sm:h-[90vh] relative">
             <div className="before:absolute bg-fixed  w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${homepic})`}}>
                 <div className="px-2 md:w-3/4 top-40  mx-auto md:top-58 md:left-20 absolute">
                    <h1 className=" text-4xl font-extrabold md:text-7xl text-white">Start Your Online Store</h1>
                    <h1 className=" text-4xl font-extrabold md:text-7xl text-white">Today. {"It's"} FREE.</h1>
                    <div className="w-4/5 md:w-3/5  font-semibold py-4">
                       <p className=" sm:px-2 lg:px-2 sm:text-4xl text-white">Take Direct Orders from your customers at 0% commission</p>
                      <button className="rounded-md bg-secondary-500 px-12 py-4 my-4 md:mx-3 border hover:bg-blue-400 hover:text-white hover:border-dashed cursor-pointer">
                          Get Started
                      </button>
                    </div>
                 </div>
             </div>
         </div>
         <OurPlatForms/>
         <CreateAndManage/>
    </section>
  )
}

export default Main;