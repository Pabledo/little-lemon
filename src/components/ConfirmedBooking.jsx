import React from 'react'
import {PrimaryButton} from './PrimaryButton'

export const ConfirmedBooking = () => {

    let data = JSON.parse(window.sessionStorage.getItem('data'));

    const dateObject = new Date(data.date);
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(dateObject.getUTCDate()).padStart(2, '0');
    const year = dateObject.getUTCFullYear();
    const mmddyyyyFormat = `${month}-${day}-${year}`;
    
    return (
        <>
            <div className="bg-primaryGreen p-3">
                <h1 className="text-6xl title text-center">Your reservation has been confirmed!</h1>
                <h3 className="text-center text-white">Here is the detail of your booking:</h3>
            </div>
            <section className="lg:px-52 px-4 py-24 bg-white flex flex-wrap flex-col items-start place-content-center space-y-7">
                <p className='text-2xl'>Reservation's date: <span className='font-bold'>{mmddyyyyFormat}</span></p>
                <p className='text-2xl'>Reservation's time: <span className='font-bold'>{data.time}</span></p>
                <p className='text-2xl'>Number of guests: <span className='font-bold'>{data.guests}</span></p>
                <p className='text-2xl'>Occasion: <span className='font-bold capitalize'>{data.occasion}</span></p>
                <PrimaryButton name="Return home" nav={'/'}/>
            </section>
        </>
    )
}
