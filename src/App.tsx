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
        <About/>
        </div>
        <div id="contact-form">
        <ContactForm/>
        </div>
      </div>
    </>
  )
}

export default App
