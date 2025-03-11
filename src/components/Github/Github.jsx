//import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data ,Setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Dhruv4018')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         Setdata(data)
    //     })

    // },[])
  return (
    <div className='m-4 text-gray-700 bg-yellow-400 p-5 text-3xl'> Github:{data.following }
    <img src={data.avatar_url} alt="github picture "width={200}></img>
    
    </div>
  )
}

export default Github


export const Githubinfo = async () =>{
    const response = await fetch('https://api.github.com/users/Dhruv4018')
    return response.json()
}