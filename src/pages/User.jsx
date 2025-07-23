import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const User = () => {
  const api = "https://68500bdbe7c42cfd17972297.mockapi.io/num1"
  const [data, setData] = useState([])

  async function GetData() {
    try {
      const res = await axios.get(api)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-[20px]">
      {data.map(user => (
        <Link key={user.id} to={`/user/${user.id}`} className="border border-gray-300 rounded-lg shadow p-4 flex flex-col bg-[white] items-center hover:bg-gray-50">
          <img src={user.avatar} alt="" className="w-24 h-24 rounded-full mb-2 object-cover" />
          <h2 className="text-lg font-semibold">{user.name}</h2>
        </Link>
      ))}

     
    </div>
  )
}

export default User
