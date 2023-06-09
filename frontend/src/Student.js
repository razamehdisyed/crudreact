import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Student = () => {
    const [student, setStudent] = useState([])
    useEffect(()=>{
        axios.get('//localhost:8081/')
        .then(res =>setStudent(res.data))
        .catch(err =>console.log(err))
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete('//localhost:8081/student/'+id)
            window.location.reload()
        }
        catch(err){
            console.log(err)
        }
    }
    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-2'>
            <Link to ="/create" className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data, i)=> (
                           <tr key={i}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                <button to="/" className='btn btn-danger ms-2'
                                onClick={e=>handleDelete(data.id)}>Delete</button>

                            </td>
                           </tr>     
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student