import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { getUserPlacesHttp, putPlacesHttp } from './components/http.js';
import Error from './components/Error.jsx';
import { useFetch } from './hooks/useFetch.js';

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { error, isFetching, data: userPlaces, setData: setUserPlaces } = useFetch(getUserPlacesHttp, [])


  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function checkForDuplication(checkFromList, selectedId) {
    return checkFromList.some(
      (place) => place.id === selectedId
    );
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      const uniquePlacesList = checkForDuplication(prevPickedPlaces, selectedPlace.id)
      if (!uniquePlacesList) {
        return [selectedPlace, ...prevPickedPlaces]
      } else {

        return prevPickedPlaces
      }
    });

    const uniquePlacesList = checkForDuplication(userPlaces, selectedPlace.id)
    if (!uniquePlacesList) {
      try {
        await putPlacesHttp([selectedPlace, ...userPlaces])
      } catch (error) {

        setUserPlaces(userPlaces)
        setPutPlacesError({ name: "Error", message: "Unable to Save Data" })
      }
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {

    try {
      const filteredData = userPlaces.filter((place) => place.id !== selectedPlace.current.id)
      await putPlacesHttp(filteredData)

    } catch (error) {
      setPutPlacesError({ name: "Error", message: "Unable to Delete Data" })
    }

    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    setModalIsOpen(false);
  }, [userPlaces]);

  function handleClosePutErrorPopup() {
    setPutPlacesError({})
  }

  return (
    <>
      {Object.keys(error)?.length && <Modal open={Object.keys(error)} onClose={handleClosePutErrorPopup}>
        <Error title={error.name} message={error.message}>
        </Error>
      </Modal>}

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
          isLoading={isFetching}
          fallbackText="Select the places you would like to visit below."
          places={userPlaces || []}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
