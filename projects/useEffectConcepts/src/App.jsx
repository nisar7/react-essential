import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import { sortPlacesByDistance } from './loc.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';

const placesIds = JSON.parse(localStorage.getItem('pickedPlacesIdList')) || []
const placesFromLocalStorage = placesIds?.map((id) => AVAILABLE_PLACES.find((place) => place.id === id)) || []

function App() {
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(placesFromLocalStorage);
  const [sortedAvailablePlaces, setSortedAvailablePlaces] = useState([])

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
      setSortedAvailablePlaces(sortedPlaces)
    })


  }, [])

  function handleStartRemovePlace(id) {
    setOpenModal(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setOpenModal(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const placeIds = JSON.parse(localStorage.getItem('pickedPlacesIdList')) || []
      if (placeIds.indexOf(id) === -1) {
        localStorage.setItem('pickedPlacesIdList', JSON.stringify([id, ...placeIds]) || [])
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    const updatedLocalStorage = JSON.parse(localStorage.getItem('pickedPlacesIdList'))?.filter((id) => id !== selectedPlace.current)
    localStorage.setItem('pickedPlacesIdList', JSON.stringify(updatedLocalStorage))
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setOpenModal(false);
  }, [])

  return (
    <>
      <Modal openModal={openModal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}

        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          fallbackText="Loading Available Places..."
          title="Available Places"
          places={sortedAvailablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
