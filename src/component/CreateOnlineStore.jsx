import homepic from "../assets/ecom2.png" 

const CreateOnlineStore = () => {
  return (
     <section className=" py-8 sm:py-40">
            <div className="w-full h-[40vh] sm:h-[50vh] relative  cursor-pointer">
                <div className=" w-[90%] rounded-xl  flex flex-col items-center justify-center  mx-auto before:absolute   h-full bg-contain sm:bg-cover  bg-center bg-no-repeat object-contain" style={{backgroundImage:`url(${homepic})`}}>
                    <div className="w-3/5  ">
                       <h1 className="text-sm cursor-pointer hover:scale-125 duration-700 sm:text-3xl md:text-5xl lg:text-5xl text-center text-white ">Create your Online Store Now {"It's"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 font-bold to-blue-600">VERY EASY</span></h1>
                    </div>
                    <button className="rounded-md bg-secondary-500 px-2 py-2 sm:px-12 sm:py-4 my-2 sm:my-6 md:mx-3 border hover:border-0 hover:bg-gradient-to-r from-green-400 to-blue-500 text-white hover:border-dashed cursor-pointer">
                          Get Started
                  </button>
                </div>
                
            </div>
     </section>
  )
}

export default CreateOnlineStore