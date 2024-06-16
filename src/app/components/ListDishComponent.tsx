import React, { useEffect } from "react";

import DishComponent from "./DishComponent";

import { IDish } from "@/core/entities/Dish";

interface DishComponentProps {
  dishes: IDish[] | undefined;
  round: number;
  showInfo: boolean | null;
}

const ListDishComponent: React.FC<DishComponentProps> = ({ dishes, round, showInfo }) => {
  return (
    <div className="flex item-center justify-center gap-5">
      {dishes && dishes.map((dish, index) => (
        <DishComponent
          key={index}
          dish={dish}
          showImage={index + 1 <= round || !!showInfo}
          showName={!!showInfo}
        />
      ))}
    </div>
  );
};

export default ListDishComponent;
