import FrontImage  from '@/assets/gal1.jpg'
import secondImage  from '@/assets/gal2.jpg'
import ThirdImage  from '@/assets/ga3.jpg'
import FourImage  from '@/assets/gal4.jpg'


import Image from 'next/image'


export default function Decoration() {
  return (
    <div>
     
      <div className="images">
        <Image src={FrontImage} alt="Decoration 1"  />
        <Image src={secondImage} alt="Decoration 1"  />
        <Image src={ThirdImage} alt="Decoration 1"  />
        <Image src={FourImage} alt="Decoration 1"  />
      </div>

     
      {/* <div className="images">
        <Image src="/gal7.jpg" alt="Decoration 8" width={400} height={300} />
        <Image src="/gal8.jpg" alt="Decoration 9" width={400} height={300} />
        <Image src="/gal10.jpg" alt="Decoration 10" width={400} height={300} />
        <Image src="/gal11.jpg" alt="Decoration 11" width={400} height={300} />
        <Image src="/gal12.jpg" alt="Decoration 12" width={400} height={300} />
      </div> */}
    </div>
  )
}
