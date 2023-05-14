import homepic from "../assets/bharathome.jpg"
import qr from "../assets/qr.jpg"
import phoneOrder from "../assets/phoneorder.jpg"
import mobileApp from "../assets/phone.jpg"


const CustomerLoyalty = () => {

  return (
      <section className="h-auto py-40" >
           <div className="px-2 md:w-4/5 flex flex-col items-center mx-auto justify-center">
                <div className="w-full mx-auto px-4 text-center mb-12 py-16">
                        <h1 className="text-2xl sm:text-6xl">True Omni-Channel Solution<br/>
                         to build<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 font-bold to-blue-600 ">Customer Loyalty</span></h1>
                  </div>

               <div className="w-full lg:w-4/5 mx-auto flex flex-wrap gap-4 gap-y-10 justify-center h-auto ">
                
                     <div className="relative w-[300px] sm:w-[250px] h-[175px] md:w-[450px] md:h-[300px]  rounded-xl ">
                        <div  className="before:absolute  w-full h-full bg-cover bg-no-repeat z-[-1] rounded-xl " style={{backgroundImage:`url(${homepic})`}}>
                              <div className={`w-3/5 sm:w-1/2 hover:w-3/5 transition duration-500  h-full flex flex-col justify-center items-start  z-10  drop-shadow-2xl text-white bg-[#7CB9E8] cursor-pointer rounded-xl`}>
                                  <h1 className="px-2 text-sm md:text-2xl text-black font-bold">1. Direct Order Website</h1>
                                  <p className="px-2 text-sm">Create your webstore and take Direct Orders from your customers.</p>
                              </div>
                        </div>
                     </div>

                     <div className="relative w-[300px] sm:w-[250px] h-[175px] md:w-[450px] md:h-[300px]  rounded-xl ">
                        <div  className="before:absolute  w-full h-full bg-cover bg-no-repeat z-[-1] rounded-xl " style={{backgroundImage:`url(${qr})`}}>
                              <div className={`w-3/5 sm:w-1/2 hover:w-3/5 transition duration-500  h-full flex flex-col justify-center  z-10 items-start text-white drop-shadow-2xl bg-[#7CB9E8] cursor-pointer rounded-xl`}>
                                  <h1 className="px-2 text-sm md:text-2xl text-black font-bold">2. QR Code Solution</h1>
                                  <p className="px-2 text-sm">Better way for customers to discover your catalogue in the store & at home.</p>
                              </div>
                        </div>
                     </div>

                     <div className="relative w-[300px] sm:w-[250px] h-[175px] md:w-[450px] md:h-[300px]  rounded-xl ">
                        <div  className="before:absolute  w-full h-full bg-cover bg-no-repeat z-[-1] rounded-xl " style={{backgroundImage:`url(${phoneOrder})`}}>
                              <div className={`w-3/5 sm:w-1/2 hover:w-3/5 transition duration-500  h-full flex flex-col justify-center  z-10 items-start text-white drop-shadow-2xl bg-[#7CB9E8] cursor-pointer rounded-xl`}>
                                  <h1 className="px-2 text-sm md:text-2xl text-black font-bold">3. Phone Ordering</h1> 
                                  <p className="px-2 text-sm">{"Dont't"} waste time manually noting orders and arranging delivery. Just punch it.</p>
                              </div>
                        </div>
                     </div>

                     <div className="relative w-[300px] sm:w-[250px] h-[175px] md:w-[450px] md:h-[300px]  rounded-xl ">
                        <div  className="before:absolute  w-full h-full bg-cover bg-no-repeat z-[-1] rounded-xl " style={{backgroundImage:`url(${mobileApp})`}}>
                              <div className={`w-3/5 sm:w-1/2 hover:w-3/5 transition duration-500  h-full flex flex-col justify-center  z-10 items-start text-white drop-shadow-2xl bg-[#7CB9E8] cursor-pointer rounded-xl`}>
                                  <h1 className="px-2 text-sm md:text-2xl text-black font-bold">4. Aggregator App</h1>
                                  <p className="px-2 text-sm">Offer additional ordering channel to your customers. Get more discoverable to new customers</p>
                              </div>
                        </div>
                     </div>

               </div>
           </div>
      </section>
  )
}

export default CustomerLoyalty