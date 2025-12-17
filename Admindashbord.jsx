import React from 'react'
import Admminnavbar from './Adminnavbar'


export default function Admindashbord() {
  return (
    <div>
        <h1 className='w-100 bg-success text-light fs-1' style={{"height":"50px"}}> Wellcome to Admindashbord</h1>
        <Admminnavbar></Admminnavbar>
    </div>
  )
}
