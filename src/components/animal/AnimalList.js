import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { Animal } from "./Animal";
// import "./Animals.css"

export const AnimalList = (props) => {
  const { animals, getAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    // console.log("AnimalList: Initial render before data");
    getLocations().then(getCustomers).then(getAnimals);
  }, []);

  return (
    <div className="animals">
      <button onClick={() => props.history.push("/animals/create")}>
        Add Animal
      </button>
      {animals.map((animal) => {
        const owner = customers.find(c => c.id === animal.customer_id);
        const clinic = locations.find(l => l.id === animal.location_id);
        return (
          <Animal
            key={animal.id}
            location={clinic}
            customer={owner}
            animal={animal}
          />
        );
      })}
    </div>
  );
};
