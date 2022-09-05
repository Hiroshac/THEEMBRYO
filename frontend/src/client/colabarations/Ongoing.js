import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../commn/Navbar';
import { Contact } from '../home/Contact';

export const Ongoing = () => {

    const [item, setItem] = useState([]);

    useEffect(()=>{
        axios.get('/ongoing/get').then((res)=>{
            setItem(res.data);
        })
    });

  return (
    <div>
        <Navbar/>
        <div>
            <section className="pt-5 mt-5  bggray">
                <div className="container mb-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h1>Ongoing Partnership</h1>
                            </div>
                        </div>
                    </div>

                    <div className='row gx-4 mb-5 mt-5 row-cols-1  row-cols-md-4 bg-light shadow border-1 rounded-2'>
                        {item.map((datas) => {
                            return(
                        <div className="row gx-4 gy-4 mb-5 ml-2">
                            <div className="col-lg- mb-2">
                                <div className="card h-30 shadow border-0 text-center ">
                                    <img className="card-img-top smallimage" src={'/ongoing/' + datas.image} alt="..."  />
                                    <div className="card-body p-2">
                                        <a className="text-decoration-none link-dark stretched-link" href=''><h5 class="card-title mb-3">{datas.name}</h5></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                        })}
                    </div>
                </div>
            </section>
        </div>
        <Contact/>

    </div>
  )
}
