import Image from "next/image";
import React from "react";

const AmericaComponent: React.FC = () => {
  return (
    <>
      <Image
        className="absolute bottom-4 left-28"
        src="/icons/hotdog.png" 
        alt="Ramen" 
        width={150} 
        height={150} 
      />
      <Image
        className="absolute bottom-40 left-48"
        src="/icons/burger.png" 
        alt="Ramen" 
        width={150} 
        height={150} 
      />
      <Image
        className="absolute bottom-28 left-8"
        src="/icons/donuts.png" 
        alt="Ramen" 
        width={150} 
        height={150} 
      />
    </>
  );
}

export default AmericaComponent;