import React from 'react'
import "./Testimonial.css";
import { Data } from './Data';

const Testimonial = () => {
  return (
    <>
      <section className='testimonial container section'>
        <h2 className='section_title'>My client say</h2>
        <span className='section_subtitle'>Testimonial</span>

        <div className='testimonial_container'>
          {Data.map(({ id, image, title, description }) => {
            return (
              <div className='testimonial_card' key={id}>
                <img src={image} alt='' className='testimonial_img' />

                <h3 className='testimonial_name'>{title}</h3>
                <p className='testimonial_description'>{description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Testimonial;
