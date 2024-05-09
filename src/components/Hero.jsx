import React from 'react';
import { FiSun } from "react-icons/fi";

const Hero = () => {
    return (
        <div className='hero flex'>
            <div className=" flex">
                jBuenos dias! <FiSun size={30} />
            </div>

            <div>
                <h1>Una nueva maners <br />
                    de comprar 
                    tu Plan <span className='text-lightBlue'>Medico</span>.
                </h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis at voluptatum voluptas <br /> magni tenetur voluptatibus ea repellat, esse dolore. Fugiat!</p>
            </div>

        </div>
    )
}

export default Hero