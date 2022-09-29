import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/img.jpg"
const Common = (props) => {
  return (
    <>
      <section id='header' className='mntop' >
        <div className='container-fluid nav-bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mtop'>

                <h1 >{props.name} <strong className='brand-name'>Clustox</strong></h1>
                <h5 className='my-3'>
                  We are the team of talented developers making websites 
                </h5>
              
                  <NavLink to={props.visit} className='btn btn-primary btn-get-started'>{props.btnName}</NavLink>
              
              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.imgsrc} className='img-fluid animated'></img>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common