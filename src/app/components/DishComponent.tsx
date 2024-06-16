import React from "react";
import Image from "next/image";

import { GetDishImageUrl } from "../useCases/GetDishImageUrl";
import { ImageService } from "@/infrastructure/services/ImageService";
import { IDish } from "@/core/entities/Dish";

interface DishComponentProps {
  dish: IDish;
  showImage?: boolean;
  showName?: boolean;
}

const DishComponent: React.FC<DishComponentProps> = ({
  dish,
  showImage,
  showName,
}) => {
  const imageService = new GetDishImageUrl(new ImageService());
  const imageUrl = imageService.execute(dish.image);

  return (
    <div className="flex flex-col gap-2 item-center justify-center transition-all">
      {showImage ? (
        <Image
          className="rounded-lg border-grey border w-[200px] h-[200px] object-cover"
          src={imageUrl}
          alt={dish.name}
          width={200}
          height={200}
          priority
        />
      ) : (
        <div className="w-[200px] h-[200px] bg-black border-grey border rounded-lg"></div>
      )}
      {showName && <p className="text-center">{dish.name}</p>}
    </div>
  );
};

export default DishComponent;
