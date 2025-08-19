import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/userApi';

const Data = () => {

    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state) => state.users)

    useEffect (() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if(loading) {
        <p>Loading...</p>
    }
    if(error) {
        <p>console.error(error);</p>
    }
  return (
    <div>
        <h1>Fetched Users</h1>
      <ul>
        {users.map((user) =>(
            <li key={user.id}>{user.name}</li>
        ) )}
      </ul>
    </div>
  )
}

export default Data
