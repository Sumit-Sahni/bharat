import Pic from "../../assets/homepic.jpg"

const Promote = () => {
  return (
    <div className="basis-4/5  flex mx-auto h-full">
    <div className="flex flex-col sm:flex-row justify-between items-center ">
             <div className="w-60 flex justify-center">
                  <img src={Pic} alt="Pic" className="w-24 h-24 rounded-full"/>
            </div>
          
        <div className="p-4 text-center sm:text-left">
             <h1 className="text-2xl font-bold">PROMOTE YOUR CHANNELS</h1>
             <p>Promote your Ordering Channels on Social Media and to your Customers</p>
        </div>
    </div>
 </div>
  )
}

export default Promote