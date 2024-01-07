import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const BookForm = ({ availableTimes, submitForm }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("select");

    const navigate = useNavigate();

    const clearForm = () => {
        setDate("");
        setTime(availableTimes);
        setGuests("");
        setOccasion("select");
    };

    const getIsFormValid = () => {
        return (
            date && !time.includes('Select') && guests >= 1 && guests <= 10 && !occasion.includes('select')
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(getIsFormValid()){
            const data = {date, time, guests, occasion};
            window.sessionStorage.setItem('data',JSON.stringify(data));
            submitForm(data) && navigate('/confirmation');
            clearForm();
        }
    };

    const times = availableTimes.map((time) => {
        return <option key={time} value={time}>{time}</option>
    })

    return (
        <div className="lg:px-96 px-4 py-4">
            <form onSubmit={handleSubmit}>
                <fieldset className="space-y-5">
                    <div>
                        <label htmlFor="res-date" className="block">Choose date:</label>
                        <input
                            className="block w-full h-8 outline outline-1 px-2 rounded-sm outline-slate-600"
                            value={date}
                            type="date"
                            id="res-date"
                            name="res-date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="res-time">Choose time:</label>
                        <select
                            className="block w-full h-8 outline outline-1 px-2 rounded-sm outline-slate-600"
                            id="res-time"
                            name="res-time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            {times}
                        </select>
                    </div>
                    <div>
                        <label className="block" htmlFor="guests">Number of guests:</label>
                        <input
                            className="block w-full h-8 outline outline-1 rounded-sm px-2 outline-slate-600"
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            name="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="occasion">Occasion:</label>
                        <select
                            className="block w-full h-8 outline outline-1 px-2 rounded-sm outline-slate-600"
                            id="occasion"
                            name="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        >
                            <option value="select">Select...</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        disabled={!getIsFormValid()}
                        className={
                            getIsFormValid() ?
                            "block w-full rounded-lg bg-amber-300 text-black px-4 py-2 font-bold hover:bg-amber-400 transition ease-in-out" :
                            "block w-full rounded-lg bg-gray-400 text-white px-4 py-2 font-bold"
                        }
                    >
                        Make your reservation
                    </button>
                </fieldset>
            </form>
        </div>
    )
}
