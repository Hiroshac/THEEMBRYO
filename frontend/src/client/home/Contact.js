import React from 'react'

export const Contact = () => {
    const year = () => {
        return 
    }
  return (
    <div>
        <div className='pt-3 pb-3 mx-5 bggray2' >
            <h1 className='ml-5 text-white'>Contact US</h1>
            <div>
                <></>
                <h6 className='ml-5 text-white'>P O Box 503, Lotus Rd,Colombo 01,Sri Lanka</h6>
            </div>
            <div>
                <></>
                <h6 className='ml-5 text-white'>pr@slt.lk</h6>
            </div>
            <div>
                <></>
                <h6 className='ml-5 text-white'>+941212<br/>+94112121212</h6>
            </div>
            <hr></hr>
        </div>
        <div className='container text-center'>
            <p>Copyright © <>{(new Date().getFullYear())}</> Research & Development | Powered by Research & Development</p>
        </div>
        <hr/>
    </div>
  )
}
