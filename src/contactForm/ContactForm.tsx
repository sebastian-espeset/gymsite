import "./contactForm.scss";
import {useForm} from 'react-hook-form';

export function ContactForm() {
  useForm
  return (
    <div className="contactForm">
        <div className="contactTitle">
          <h1>Get in touch</h1>
        </div>
        <div className="contactCopy">
          <h3>Pass us some info and we'll be in touch within 24 hours</h3>
        </div>
      <div className="formboxWrapper">
        <div className="innerFormBox">
          <div className="leftForm">
            <div className="inputDiv">
              <div className="nameDiv">
                <input type="text" name="lastName" />
                <input type="text" name="firstName" />
              </div>
              <div className="contactInfoDiv">
                <input type="email" name="email" />
                <input type="phone" name="phoneNumber"/>
              </div>
            </div>
          </div>
          <div className="rightForm">
            <div className="contactInfoCopy">
              <div className="address">
                <div className="addressTitle">
                <h4>Address</h4>
                </div>
                <div className="addressCopy">
                  <p>123 real street, chicago IL, 123456</p>
                </div>
              </div>
              <div className="phoneNumber">
                <div className="phoneNumberTitle">
                  <h4>Phone</h4>
                </div>
                <div className="phoneNumberCopy">
                  <p>(123)-456-7891</p>
                </div>
              </div>
              <div className="hours">
                <div className="hoursTitle">
                  <h4>Hours</h4>
                </div>
                <div className="hoursCopy">
                  <p>Monday-Thursday, 9am-5pm</p>
                  <p>Saturday & Sunday, 11am-9pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
