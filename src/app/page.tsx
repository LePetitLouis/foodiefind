'use client';

import React, { useState } from "react";

import AsiaComponent from "./components/AsiaComponent";
import AmericaComponent from "./components/AmericaComponent";
import ButtonComponent from "./components/ButtonComponent";
import RulesComponent from "./components/RulesComponent";
import Link from "next/link";

const HomePage: React.FC = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <AsiaComponent />
      <div className="flex flex-col items-center gap-5 justify-center h-full">
        <h1 className="text-6xl font-bold max-w-2xl text-center">Voyagez à travers la Gastronomie</h1>
        <p className="text-xl">Découvrez le monde en devinant les pays grâce à leurs plats emblématiques</p>
        <Link href="/game">
          <ButtonComponent
            className="mt-8 rounded bg-primary hover:bg-green-700 py-3 px-8 text-white text-lg"
          >
            Commencez à jouer maintenant !
          </ButtonComponent>
        </Link>
      </div>
      <ButtonComponent
        className="fixed bottom-8 right-8 py-3 px-8 text-white"
        onClickAction={() => setShowRules(true)}
      >
        Règles
      </ButtonComponent>
      <AmericaComponent />

      {showRules && <RulesComponent onClose={() => setShowRules(false)} />}
    </>
  );
}

export default HomePage;