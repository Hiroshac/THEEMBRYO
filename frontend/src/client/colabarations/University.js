import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../commn/Navbar';
import { Contact } from '../home/Contact';

export const University = () => {

    const [item, setItem] = useState([]);

    useEffect(()=>{
        axios.get('/university/get').then((res)=>{
            setItem(res.data);
        })
    });

  return (
    <div>
        <Navbar/>
        <div>
            <section class="pt-5 bggray">
                <div class="container px- my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder">University Partnership</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row gx-4 row-cols-1 row-cols-md-3'>
                        {item.map((datas) => {
                            return(
                        <div class="row gx-4 gy-4">
                            <div class="col-lg- mb-2">
                                <div class="card h-30 shadow border-0 text-center ">
                                    <img class="card-img-top" src={'/university/' + datas.image} alt="..." style={{height : '300px' }} />
                                    <div class="card-body p-2">
                                        <a class="text-decoration-none link-dark stretched-link" href=''><h5 class="card-title mb-3">{datas.name}</h5></a>
                                        
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
