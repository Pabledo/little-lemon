import './App.css'
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { HomePage } from './components/HomePage';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { BookingPage } from './components/BookingPage';
import { ConfirmedBooking } from './components/ConfirmedBooking';
function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
        <Route path="*" element={<h1 className='text-center text-6xl title !text-black py-36'>There's nothing here: 404!</h1>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
