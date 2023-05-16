import homepic from "../assets/ecom2.png"
import CreateAndManage from "../component/CreateAndManage";
import CustomerLoyalty from "../component/CustomerLoyalty";
import OurPlatForms from "../component/OurPlatForms";
import MorePoweMoreBenifits from "../component/MorePowerMoreBenifits";
import KeyPartnerForSuccess from "../component/KeyPartnerForSuccess";
import CreateOnlineStore from "../component/CreateOnlineStore";
import Footer from "../component/Footer";
const Main = () => {
  return (
    <section className="w-full h-[50vh] ">
         <div className="w-full h-[80vh] sm:h-[90vh] relative">
             <div className="before:absolute bg-fixed  w-full h-full bg-cover bg-center bg-no-repeat object-contain" style={{backgroundImage:`url(${homepic})`}}>
                 <div className="px-2 md:w-3/4 top-40  mx-auto md:top-58 md:left-20 absolute">
                    <h1 className=" text-4xl font-extrabold md:text-7xl text-white">Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 font-bold to-blue-600  animate-pulse">Online</span>  Store</h1>
                    <h1 className=" text-4xl font-extrabold md:text-7xl text-white">Today. {"It's"} FREE.</h1>
                    <div className="w-4/5 md:w-3/5  font-semibold py-4">
                       <p className=" sm:px-2 lg:px-2 sm:text-4xl text-white">Take Direct Orders from your customers at 0% commission</p>
                      <button className="rounded-md bg-secondary-500 px-12 py-4 my-6 md:mx-3 border hover:border-0 hover:bg-gradient-to-r from-green-400 to-blue-500 text-white hover:border-dashed cursor-pointer">
                          Get Started
                      </button>
                    </div>
                 </div>
             </div>
         </div>
         <OurPlatForms/>
         <CreateAndManage/>
         <CustomerLoyalty/>
         <MorePoweMoreBenifits/>
         <KeyPartnerForSuccess/>
         <CreateOnlineStore/>
         <Footer/>
    </section>
  )
}

export default Main;