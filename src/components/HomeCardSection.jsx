import React from 'react';
import * as  C from "./index";
import { FaBagShopping } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";

const HomeCardSection = () => {

    const cardInfo = [
        {
            icon: FaBagShopping,
            title: "find health & drug plans",
            description: "find & compare plans in your area",
            url: "/",
            btn: "find plans now"
        },
        {
            icon: FaStethoscope,
            title: "find care providers",
            description: "compare hospitals, nursing homes, & more",
            url: "/",
            btn: "find provides near me"
        }
    ]

    return (
        <section className='compara-section'>

            <div>
                <h1>
                    <span>
                        Compara y ahorra{" "}
                    </span>
                    en tu plan medico ahora!
                </h1>

                <p>Selecciona tipo de cubierta</p>
            </div>

            <div className='flex'>
                {cardInfo.map(v => <C.HomeCard key={v.title}
                        title={v.title}
                        description={v.description}
                        Icon={v.icon}
                        url={v.url}
                        btn={v.btn}
                    />)}
            </div>
            
            <C.HomeForm/>

        </section>
    )
}

export default HomeCardSection