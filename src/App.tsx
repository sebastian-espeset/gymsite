import './App.scss'
import {Navbar} from '../src/navbar/Navbar';
// import {PhotoCarousel} from '../src/photoCarousel/PhotoCarousel';
import { About } from '../src/about/About';
import { ContactForm } from '../src/contactForm/ContactForm';
import { Slideshow } from './slideShow/Slideshow';
function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <Slideshow/>
        <About/>
        <ContactForm/>
      </div>
    </>
  )
}

export default App
