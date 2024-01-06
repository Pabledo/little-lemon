import { useReducer, useState } from "react";
import { BookForm } from "./BookForm"
import fakeAPI from '../js/api'

export const BookingPage = () => {

  // const [availableTimes , setAvailableTimes ] = useState(
  //   ['17:00','18:00','19:00','20:00','21:00','22:00']
  // );

  
  const updateTimes = (state, action) => {
    return state;
  }
  
  const initializeTimes  = () => {
    return fakeAPI.fetchAPI(new Date());
  }

  const submitForm = (formData) => {
    return fakeAPI.submitAPI(formData);
  }
  
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  
  return (
    <>
      <div className="bg-primaryGreen p-3">
          <h1 className="text-6xl title text-center">Make a reservation!</h1>
          <h3 className="text-center text-white">Fill the form below to book a table</h3>
      </div>
      <BookForm availableTimes={availableTimes} handleChanges={dispatch} submitForm={submitForm}/>
    </>
  )
}
