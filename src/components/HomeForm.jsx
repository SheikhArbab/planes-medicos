import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const HomeForm = () => {



    return (
        <div className='home-form-wrapper' style={{ marginTop: "20px" }}>

            <h1 className='text-darkBlue' style={{ fontWeight: "bold" }}>?Necesitas ayuda?</h1>
            <p className='form-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis necessitatibus adipisci dolore facilis, ipsam est  </p>

            <form>

             { [{p:"Name",type:"text"},{p:"Email",type:"email"},{p:"Number",type:"number"}].map(v => <input key={v.p}
              type={v.type} placeholder={v.p} />)}


                <select>
                    <option value="">Please select </option>
                    <option value="">value a </option>
                    <option value="">value b </option>
                </select>

                <button className='flex'> <span></span> ORinenrne <span><IoIosArrowForward/></span> </button>

            </form>

        </div>
    )
}

export default HomeForm