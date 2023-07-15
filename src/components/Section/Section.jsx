import React, { useState } from "react";
import Filtres from "../Filtres/Filtres";
import Modal from "../Modal/Modal";
// import AddCar from "../AddCar/AddCar";

const Section = () => {
  const [filtresVis, setFiltresVis] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(filtresVis);
  console.log(isModalOpen);
  return (
    <div>
      {/* <AddCar /> */}
      <div>
        {/* <strong onClick={() => setFiltresVis(true)}>Filtres</strong> */}
        <strong
          onClick={() =>
            !filtresVis ? setFiltresVis(true) : setFiltresVis(false)
          }>
          Filtres
        </strong>
        {filtresVis ? <Filtres /> : null}
      </div>
      <div>
        {isModalOpen ? (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        ) : null}

        <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      </div>
    </div>
  );
};

export default Section;
