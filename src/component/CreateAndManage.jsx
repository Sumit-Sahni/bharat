import { useState } from "react"
import Create from "./create/Create"
import Promote from "./promote/Promote"
import Sell from "./sell/sell"
import Earn from "./earn/Earn"

const CreateAndManage = () => {

    const [activeButton, setActiveButton] = useState(1);

    function handleButtonClick(buttonId) {
        setActiveButton(buttonId);
      }
   
  return (
    <section className="h-screen">
          <div className="w-full sm:w-3/4 mx-auto  p-8 my-6 flex  justify-center">
               <h1 className="text-4xl sm:text-6xl text-center">{"It's"} <span className="text-orange-500">Super Easy</span> to Create & Manage <br/> your Own Online Store</h1>
          </div>

          <div>
              <div className="w-full lg:w-3/5 p-4 md:p-12 mx-auto">
                    <div className=" sm:w-full flex flex-col sm:flex-row  justify-between  text-2xl ">
                        <div onClick={()=>handleButtonClick(1)} className={`${activeButton === 1 ? 'bg-orange-500' : 'red'} cursor-pointer px-8 p-2 rounded-md`}>
                            <h1>CREATE</h1>
                        </div>
                        <div onClick={()=>handleButtonClick(2)} className={`${activeButton === 2 ? 'bg-orange-500' : 'red'} cursor-pointer px-8 p-2 rounded-md`}>
                            <h1>PROMOTE</h1>
                        </div>
                        <div  onClick={()=>handleButtonClick(3)} className={`${activeButton === 3 ? 'bg-orange-500' : 'red'} cursor-pointer px-8 p-2 rounded-md`} >
                            <h1>SELL</h1>
                        </div>
                        <div  onClick={()=>handleButtonClick(4)} className={`${activeButton === 4 ? 'bg-orange-500' : 'red'} cursor-pointer px-8 p-2 rounded-md`}>
                            <h1>EARN</h1>
                        </div>
                    </div>

                    <div className="w-full h-auto sm:h-60 flex justify-center items-center border my-4">
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