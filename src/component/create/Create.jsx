import Pic from "../../assets/homepic.jpg"

const Create = () => {
  return (
     <div className="basis-4/5  flex mx-auto h-full py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center ">
            <div className="w-60 flex justify-center">
                  <img src={Pic} alt="Pic" className="w-24 h-24 rounded-full"/>
            </div>
              
            <div className="p-4  text-center sm:text-left">
                 <h1 className="text-2xl font-bold">CREATE YOUR STORE</h1>
                 <p>We have made it incredibly easy to Create & Manage your Online Business yourself.</p>
            </div>
        </div>
     </div>
  )
}

export default Create