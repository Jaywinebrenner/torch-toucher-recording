import Link from 'next/link';
import React from 'react'



export default function Landing() {

  return (
    <div className="landing">
        <Link href='/home'>
          <div className='landing-logo-wrapper'>
            <img className='logo' src="/torch-logo.png"/>
            <img className='logo yellow-fire' src="/torch-logo-fire-yellow-only.png"/>
         </div>
        </Link>
    </div>
  )
}
