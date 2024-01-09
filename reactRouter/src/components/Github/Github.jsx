import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=> {
    //     fetch("https://api.github.com/users/nikx12")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <>
    <div>Github followers: {data.followers}</div>
    <img src={data.avatar_url} alt="Github pic" width={250}/>
    </>
  )
}

export default Github


// better to make it in separate file
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nikx12')
    return response.json()
}