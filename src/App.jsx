import './App.css'
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { HomePage } from './components/HomePage';
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<HomePage />}></Route>
        {/* <Route path="/booking" element={<BookingPage />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
