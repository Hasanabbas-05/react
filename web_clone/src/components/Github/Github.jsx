import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hasanabbas-05')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className=' flex text-left m-4 bg-gray-600 text-white p-4 text-3xl rounded-3xl    '>

            <img className='flex rounded-3xl mx-5 border-4 border-black' src={data.avatar_url} alt="Git picture" width={300} height={500}/>
            <li className="mb-4">
                <span className='font-bold'>Hii...My github link is given Below.... click on GIT HUB</span><br/>
                <a
                    href="https://github.com/Hasanabbas-05"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                >
                   <br/><br/><br/>
                   <h1 className='font-bold italic'>&#9734; GIT HUB</h1>
                </a>
            </li>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hasanabbas-05')
    return response.json()
}

