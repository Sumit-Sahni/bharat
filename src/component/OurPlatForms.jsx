import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import bharat from "../assets/bharat.png"



const slide = [
    {
        image:`https://unsplash.com/photos/9eGMyzOSyYE/download?force=true&w=1920`,
        title:"Download"
    },
    {
        image:"https://unsplash.com/photos/9eGMyzOSyYE/download?force=true&w=1920",
        title:"Download"
    },
    {
        image:"https://unsplash.com/photos/9eGMyzOSyYE/download?force=true&w=1920",
        title:"Download"
    },
    {
        image:"https://unsplash.com/photos/9eGMyzOSyYE/download?force=true&w=1920",
        title:"Download"
    },
    {
        image:"https://unsplash.com/photos/9eGMyzOSyYE/download?force=true&w=1920",
        title:"Download"
    },
    {
        image:"https://unsplash.com/photos/9eGMyzOSyYE/download?force=true&w=1920",
        title:"Download"
    },
]

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const OurPlatForms = () => {
  return (

    <section className="sm:p-12">
          <div className="w-full flex flex-col items-center justify-center mx-auto">
                <div className="w-full sm:w-4/5 mx-auto p-8 my-4 flex  justify-center">
                     <h1 className="text-4xl sm:text-6xl ">One Platform, <span className="text-orange-500">Infinite Possibilities</span></h1>
                 </div>
                 <Carousel responsive={responsive} className="w-full lg:w-4/5  mx-auto px-12 py-4  cursor-pointer ">
                       {
                        slide.map((item, index)=>{
                            return(
                                <div key={index} className="w-[380px] h-[200px] mx-4">
                                    <img src={item.image} alt="" />
                                </div>
                            )
                        })
                       }
                 </Carousel>      
          </div>        
    </section>
  )
}

export default OurPlatForms