import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-400 '>
        <div className='flex justify-between mx-auto max-w-6xl p-4'>
            <Link to="/">
            <h1 className='font-bold '>Auth-app</h1>
            </Link>
            <ul className='flex space-x-4'>
                <Link to="About">
                <li>About</li>
                </Link>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="Sign-in">
                <li>Sign in</li>
                </Link>
               
            </ul>

        </div>
    </div>
  )
}
