import styled, {keyframes, css} from 'styled-components';





// const Marquee = styled.div`
//    display:flex;
//    width:1200px;
//    overflow:hidden;
//    user-select: none;

// `
const scrollX = keyframes`
   from{ 
    left:translateX(0);
  }
  to{
    transform:translateX(-100%)
   }
` 

const common = css`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: space-between;
white-space: nowrap;
width: 100%;

animation:${scrollX} 12s linear infinite;
`
const MarqueeGroup = styled.div`
    ${common}
`
const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction:reverse;
    animation-delay:-3s; 
`
const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width:clamp(10rem, 1rem + 40vmin, 30rem);
    padding: clac(clamp(10rem, 1rem +30vmin, 30rem)/10);
    

`
const Image = styled.img`
   object-fit:contain;
   width:100%;
   height:100%;
   aspect-ratio:16/9;
   padding:5px 20px;
   border-radius:0.5rem
   
  
   @media (max-width: 780px) {
    padding: 0px 0px 0px 0px;
  }
`

const row1 = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
];

const row2 = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
];

const KeyPartnerForSuccess = () => {
  const maskImageStyle = {
    maskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))'
  };
  return (
    <>
      <section className="">
          <div className="w-[90%] mx-auto py-16">
          <div className="px-2  flex flex-col items-center  mx-auto justify-center">
                <div className="w-full mx-auto px-4 text-center mb-12 ">
                        <h1 className="text-2xl sm:text-4xl md:text-6xl">Key Partner for<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 font-bold to-blue-600 ">Success</span></h1>
                  </div>

                    <div className=''>

                      <div className={`${maskImageStyle} relative w-[360px] md:w-[800px] lg:[1200px] overflow-hidden flex  `}>
                          <MarqueeGroup  className=''>
                            {
                              row1.map((item, index)=>{
                                return(
                                   <ImageGroup key={index}>
                                       <Image  src={item}/>
                                   </ImageGroup>
                                )
                              })
                            }
                          </MarqueeGroup>
                          <MarqueeGroup>
                            {
                              row1.map((item, index)=>{
                                return(
                                   <ImageGroup key={index}>
                                       <Image  src={item}/>
                                   </ImageGroup>
                                )
                              })
                            }
                          </MarqueeGroup>
                      </div>
                    </div>

                    <div className=' w-[360px] md:w-[800px] lg:[1200px] overflow-hidden flex'>
                      <MarqueeGroup2>
                        {
                          row2.map((item, index)=>{
                            return(
                               <ImageGroup key={index}>
                                   <Image  src={item}/>
                               </ImageGroup>
                            )
                          })
                        }
                      </MarqueeGroup2>
                      <MarqueeGroup2>
                        {
                          row2.map((item, index)=>{
                            return(
                               <ImageGroup key={index}>
                                   <Image  src={item}/>
                               </ImageGroup>
                            )
                          })
                        }
                      </MarqueeGroup2>
                    </div>
              </div>
           </div>
      </section>
    </>
  )
}

export default KeyPartnerForSuccess