import './App.scss'
import {Navbar} from '../src/navbar/Navbar';
// import {PhotoCarousel} from '../src/photoCarousel/PhotoCarousel';
import { About } from '../src/about/About';
import { ContactForm } from '../src/contactForm/ContactForm';
import { PhotoCarousel } from './photoCarousel/PhotoCarousel';
function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <PhotoCarousel/>
        <About/>
        <ContactForm/>
      </div>
    </>
  )
}

export default App
