import './App.scss'
import {Navbar} from '../src/navbar/Navbar';
import {PhotoCarousel} from '../src/photoCarousel/PhotoCarousel';
import { About } from '../src/about/About';
import { ContactForm } from '../src/contactForm/ContactForm';
function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <PhotoCarousel/>
        <About/>
        <ContactForm/>
        <h1>Hello Bubblegum</h1>
      </div>
    </>
  )
}

export default App
