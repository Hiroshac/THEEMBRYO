import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../commn/Navbar'
import { Contact } from '../home/Contact'

export const Innovation = () => {

    const [item,setItem] = useState([]);

    useEffect(()=>{
        try{
            axios.get('innovation/get').then((res)=>{
                setItem(res.data);
            })
        }catch(err){
            console.log(err)
        }
    });

  return (
    <div>
        <Navbar className=''/>
        <div className='' style={{backgroundColor:'#708090'}}>
            <div className=''>
                <br></br>
                <div className='text-center my-5'>
                    <h1>Innovation</h1>
                </div>
                {item.map((items)=>{
                     return(
                        <section class=" py-2 mx-5 bg-light" id="scroll-target">
                            <div class="container px-5 my-3">
                                <div class="row gx-5 align-items-center">
                                    <div class="col-lg-5"><img class="img-fluid rounded mb-5 mb-lg-0" src = {'/upload/' + items.image} alt="..." /></div>
                                    <div class="col-lg-6">
                                        <h2 class="fw-bolder">{items.name}</h2>
                                        <h6 class="lead fw-normal text-muted mb-0">{items.desc}</h6>
                            
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </section>
                        )
                    })}
            </div>
        </div>
        <Contact/>
    </div>
  )
}
