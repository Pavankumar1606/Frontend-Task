import React from 'react'
import './Page7.css'
const Page7 = () => {
  return (
    <>
      <h2>BLOGS</h2>
  <div className='container'>

    <div className='card'>
    <h3>CARD HOVER EFFECT</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  autem architecto illum obcaecati</p>
      <br></br>
      <a href='#'style={{color:"white"}}>Read More</a>
    </div>
    <div className='card'>
      <h3>CARD HOVER EFFECT</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ficia autem architecto illum obcaecati</p>
        <br></br>
      <a href='#' style={{color:"white"}}>Read More</a>
  
    
    </div>
    <div className='card'>
    <h3>CARD HOVER EFFECT</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. officia autem architecto illum obcaecati
      </p>
      <br></br>
      <a href='#' style={{color:"white"}}>Read More</a>
    </div>
    <div className='subscribe'>
      <h4 style={{color:"blue"}}>Subscribe to our weekly news-letter</h4>
      <input type='text' placeholder='Enter your mail' className='input' />

      <label class="container11 ">Accepts the terms and conditions
      <input type="checkbox" checked="checked"/>
      <span class="checkmark"></span>
      </label>

      <button class="button">Subscribe</button>
    </div>
    
  </div>
 

    
    </>
  )
}

export default Page7
