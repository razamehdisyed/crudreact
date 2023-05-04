import React, { useEffect } from 'react'
import axios from "axios"

const Student = () => {

    useEffect(()=>{
        axios.get('localhost:8081/')
        .then(res =>console.log(res))
        .catch(err =>console.log(err))
    },[])
    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='h-auto d-inline-block'>
            <button className='btn btn-success'>Add +</button>
            <table className='table'>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default Student