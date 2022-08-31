import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../../commn/Navbar';
import { Contact } from '../home/Contact';

export const InnovationDetails = () => {

    const[name,setName] = useState();
    const[desc,setDesc] = useState();
    const [longdesc, setLongdesc] = useState();
    const[image,setImage] = useState();

    const params = useParams();

    const id = params.id

    useEffect(()=>{
        axios.get(`/innovation/get/${id}`).then((res)=>{
            setName(res.data.name);
            setDesc(res.data.desc);
            setLongdesc(res.data.longdesc);
            setImage(res.data.image);
        })
    },[]);

  return (
    <div className='bggray'>
        <Navbar className=''/>
        <div className='mt-5 my-5'> 
            <div className='text-center mt-5 pt-5'>
            <h1 className="fw-bolder">{name}</h1>   
            </div>  
            <section className=" py-3 mx-5 mt-5 bg-light shadow rounded-2" id="scroll-target">
                <div class="container my-3">
                    <div class="row  align-items-center">
                            <div class="col-lg-5"><img class="img-fluid rounded mb-5 mb-lg-0" src = {'/upload/' + image} alt="..." /></div>
                            <div class="col-lg-6">
                                <h6 class="lead fw-normal text-muted mb-0">{desc}</h6>
                            </div>  
                    </div>
                    <div className='mt-5'>
                        <h5>
                        <h6 class="lead fw-normal text-muted mb-0">{longdesc}</h6>
                        </h5>
                    </div>
            </div>
        </section>   
        </div>
        <Contact/>
    </div>
  )
}
