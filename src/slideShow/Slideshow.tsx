import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideShow.scss';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    caption: 'Slide 3'
  },
];

export const Slideshow = () => {
    return (
      <div className="slideContainer">
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div className="imageBox"key={index}>
              <div className="image" style={{  'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}