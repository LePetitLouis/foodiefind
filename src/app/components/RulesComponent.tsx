import React from "react";

import ModalComponent from "./ModalComponent";

interface RulesComponentProps {
  onClose: () => void;
}

const RulesComponent: React.FC<RulesComponentProps> = ({ onClose }) => {
  return (
    <ModalComponent title="Règles du jeu" onClose={onClose}>
      <p className="text-black mb-2">Le but de jeu est de trouver le bon pays en fonction des differents plats qui vous est presenté.</p>
      <p className="text-black mb-2">Vous aurez quatre manches par partie</p>
      <p className="text-black mb-2">Chaque manches est constitué de quatres images qui s&apos;affiche au fur et a mesure (toutes les 10s)</p>
      <p className="text-black mb-2">A la fin de chaque manche quatres propositions vous seront proposés</p>
    </ModalComponent>
  );
}

export default RulesComponent;