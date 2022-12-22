import React from 'react'
import { useNavigate } from 'react-router-dom'
const userProfile = JSON.parse(localStorage.getItem('user'));
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('signedIn')
    navigate('/SignIn');
  }
  return (
    <div className='container'>
      <h1>Wecome {userProfile.username}</h1>
      <p>Slide Puzzle Solver Page</p>
      <button className='logout' onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Home;