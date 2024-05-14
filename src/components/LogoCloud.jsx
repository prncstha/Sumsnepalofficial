import sagarmatha from "../assets/sagarmathalogo.png";
import Cogknit from "../assets/cogknitlogo.png";
import nepbigyapan from "../assets/neplogo.png";
import uzizu from "../assets/uzizulogo.png";



export default function LogoCloud() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Accompained by the most innovative teams
      </h2>
           
          
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={sagarmatha}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={nepbigyapan}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Cogknit}
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={uzizu}
              width={158}
              height={48}
            />
           
            


            
          </div>
        </div>

      


      </div>
    )
  }
  