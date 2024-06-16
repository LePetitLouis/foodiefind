import Image from "next/image";
import React from "react";

const AsiaComponent: React.FC = () => {
  return (
    <>
      <Image
        className="absolute top-4 right-24"
        src="/icons/ramen.png" 
        alt="Ramen" 
        width={150} 
        height={150} 
      />
      <Image
        className="absolute top-44 right-48"
        src="/icons/sushi.png" 
        alt="Ramen" 
        width={150} 
        height={150} 
      />
      <Image
        className="absolute top-40 right-8"
        src="/icons/chili.png" 
        alt="Ramen" 
        width={150} 
        height={150} 
      />
    </>
  );
}

export default AsiaComponent;