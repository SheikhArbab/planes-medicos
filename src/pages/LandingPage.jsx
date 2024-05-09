import React from 'react';
import * as C from "../components/index";
import { FaPhoneAlt } from "react-icons/fa";

const LandingPage = () => {
  const img = "https://europedebtcollection.com/wp-content/uploads/2016/08/europe-debt-collection-3.jpg";
  return (
    <React.Fragment>
      <C.Hero />
      <figure className='landing-img'><img src={img} /> </figure>
      <C.HomeCardSection />

      <div className='home-footer'>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quo doloremque aut vero nam inventore magni ?
        </h1>

        <ul >
          <li>
            Lorem, ipsum dolor.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit maiores veritatis.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi assumenda perspiciatis nulla architecto, quod sed?
          </li>
        </ul>

        <div className='bottom'>
          <h1>
            Lorem, ipsum.
          </h1>
          <span> <FaPhoneAlt /> </span>
          <p>1.955.33.2323</p>
          <div>8:00am . 6:00pm ET</div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default LandingPage