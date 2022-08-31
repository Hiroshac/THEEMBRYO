import axios from 'axios';
import React, { useState } from 'react'

export const Product = () => {
    const [item,setItem] = useState([]);

    useState(() => {
        axios.get('innovation/getlast').then((res) =>{
            setItem(res.data);
        })
    });


  return (
       <div>
            <section class="py-5">
                <div class="container px- my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder">Innovation</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row gx-1 row-cols- row-cols-md-3'>
                    {item.map((datas) => {
                        return(
                    <div class="row gx-4">
                        <div class="col-lg- mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top " src={'/upload/' + datas.image} alt="..." />
                                <div class="card-body p-4">
                                    <a class="text-decoration-none link-dark stretched-link" href={`/innovationdetails/${datas._id}`}><h5 class="card-title mb-3">{datas.name}</h5></a>
                                    <p class="card-text mb-0">{datas.desc}</p>
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
  )
}
