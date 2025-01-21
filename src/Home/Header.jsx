import React from 'react'
import './Header.css'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <div className='header container-fluid'>
       <div className="row">
        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <h1>Savor the Joy of Cooking: Delicious Recipes at Your Fingertips!</h1> 
          <Link href="" to="/recipe"  className='button mt-5 text-center fs-3 shadow-lg' style={{width:'35vmin'}} > See recipes 👉</Link>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Header
