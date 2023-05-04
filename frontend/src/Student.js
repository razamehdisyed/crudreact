import React from 'react'

const Student = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-50 bg-white rounded'>
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