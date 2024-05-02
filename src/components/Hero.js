import pic from '../assets/pic2_colour.png'

export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-gray-300 text-3xl font-bold font-mono">
                Hii I'm 
            </h4><br></br>
            <h4 className="text-center font-cursive text-pink-500 text-8xl font-bold">
                Jyoti Khot
            </h4><br></br>
            <h2 className="text-center text-gray-100 text-4xl font-bold">
              Software Developer
            </h2>
          </div>
          <p className="text-center text-gray-300">
            Learn and grow personally & professionally...
          </p>
        </div>
        <div className="flex-1">
          <img src={pic}
               alt="Pic"
               className="w-full h-full bg-cover"/>
        </div>
      </section>
    );
  }