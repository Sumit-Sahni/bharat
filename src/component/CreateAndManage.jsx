import { useState } from "react"
import Create from "./create/Create"
import Promote from "./promote/Promote"
import Sell from "./sell/Sell"
import Earn from "./earn/Earn"

const CreateAndManage = () => {

    const [activeButton, setActiveButton] = useState(4);

    function handleButtonClick(buttonId) {
        setActiveButton(buttonId);
      }
   
  return (
    <section className="mx-auto min-h-auto">
         
         <div className="md:w-4/6 mx-auto  px-4 text-center mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl ">{"It's"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 font-bold to-blue-600 ">Super Easy</span> to Create & Manage  your Own Online Store 
             with </h1>
        </div>

          <div>
              <div className=" lg:w-3/5 p-4 md:p-12 bg mx-auto">
                    <div className="w-1/2 md:w-full flex flex-col sm:flex-row  justify-between  text-2xl ">
                        <div onClick={()=>handleButtonClick(1)} className={`${activeButton === 1 ? 'bg-gradient-to-r from-green-400 to-blue-500 ' : 'red'} cursor-pointer px-2 md:px-8 md:p-2 rounded-md`}>
                            <h1 className={`${activeButton === 1 ? 'text-white' : 'red'}`}>CREATE</h1>
                        </div>
                        <div onClick={()=>handleButtonClick(2)} className={`${activeButton === 2 ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'red'} cursor-pointer px-2 md:px-8 md:p-2 rounded-md`}>
                            <h1 className={`${activeButton === 2 ? 'text-white' : 'red'}`}>PROMOTE</h1>
                        </div>
                        <div  onClick={()=>handleButtonClick(3)} className={`${activeButton === 3 ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'red'} cursor-pointer px-2 md:px-8 md:p-2 rounded-md`} >
                            <h1 className={`${activeButton === 3 ? 'text-white' : 'red'}`}>SELL</h1>
                        </div>
                        <div  onClick={()=>handleButtonClick(4)} className={`${activeButton === 4 ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'red'} cursor-pointer  px-2 md:px-8 md:p-2 rounded-md`}>
                            <h1 className={`${activeButton === 4 ? 'text-white' : 'red'}`}>EARN</h1>
                        </div>
                    </div>

                    <div className={` bg-gradient-to-r from-cyan-100 to-blue-500  w-full h-auto sm:h-60 flex justify-center items-center my-12 py-16 sm:py-0 rounded-2xl `}>
                       {activeButton === 1  && <Create/>}
                       {activeButton === 2  && <Promote />}
                       {activeButton === 3  && <Sell/>}
                       {activeButton === 4  && <Earn/>}
                    </div>   
              </div>
          </div>
    </section>
  )
}

export default CreateAndManage