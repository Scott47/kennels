import React, { useContext, useRef, useEffect } from "react";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalForm = (props) => {
  const { addAnimal, getAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
  const name = useRef(null);
  const breed = useRef(null);
  const customer = useRef(null);
  const location = useRef(null);
  const status = useRef(null)

  /*
        Get animal state and location state on initialization.
    */
  useEffect(() => {
    getAnimals().then(getLocations).then(getCustomers);
  }, []);

  const constructNewAnimal = () => {
    /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
    const locationId = parseInt(location.current.value);
    const customerId = parseInt(customer.current.value);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addAnimal({
        name: name.current.value,
        species: breed.current.value,
        status: breed.current.value,
        location_id: locationId,
        customer_id: customerId,
      }).then(() => props.history.push("/animals"));
    }
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal breed: </label>
          <input
            type="text"
            id="animalBreed"
            ref={breed}
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="animalLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customer">Caretaker: </label>
          <select
            defaultValue=""
            name="customer"
            ref={customer}
            id="customerAnimal"
            className="form-control"
          >
            <option value="0">Select an customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalStatus">Animal status: </label>
          <input
            type="text"
            id="animalStatus"
            ref={status}
            required
            autoFocus
            className="form-control"
            placeholder="Animal status"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewAnimal();
        }}
        className="btn btn-primary"
      >
        Save Animal
      </button>
    </form>
  );
};
