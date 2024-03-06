import { Routes         ,Route } from 'react-router-dom';
import React from 'react'
import  '../Components/Page2.css'
const Page2 = () => {
    return(
       <>
        {/* <Routes>
        <Route path='/' element={<Page7/>}/>
        </Routes> */}
<h2>Products and Subsidiaries</h2>
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <img src="/ccim 1.png" alt="" className='img' style={{ width: "70px", height: "70px" }} />
                        <p>Concept and Carrers</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img src="/inn 1.png" alt="" className='img' style={{ width: "80px" }} />
                        <p>InnoNexus</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img src="/tregcom 1.png" alt="" className='img' style={{width:"70px"}} />
                        <p>TragCom</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img src="/aonexus 1.png" alt="" className='img' />
                        <p>AoneXus</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img src="/Screenshot1.png" alt="" className='img' />
                        <p>NexusTag</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img src="/Screenshot.png" alt="" className='img' />
                        <p>PayRental</p>
                    </div>

                    <p></p>
                </div>
            </div>
    
       </>
     );
}

export default Page2
