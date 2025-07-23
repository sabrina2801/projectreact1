import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserDetail = () => {
  const { id } = useParams()
  const api = `https://68500bdbe7c42cfd17972297.mockapi.io/num1/${id}`
  const [user, setUser] = useState({})

  async function GetData() {
    try {
      const res = await axios.get(api)
      setUser(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetData()
  }, [])


  return (
    <div className="flex flex-col items-center p-10">
      <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-600">ID: {user.id}</p>
    </div>
  )
}

export default UserDetail
