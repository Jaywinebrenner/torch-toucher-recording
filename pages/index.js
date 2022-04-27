import Link from 'next/link';
import React, {useState, useRef, useEffect} from 'react'
import { useRouter } from 'next/router'


export default function Landing() {

  const router = useRouter();
  const [navTransitioning, setNavTransitioning] = useState(false)


  return (
    <div className="landing">
        <Link href={{ pathname: '/home', query: { hasTransitioned: true} }}>
          <div className='landing-logo-wrapper'>
            <img className='logo' src="/torch-logo.png"/>
            <img className='logo yellow-fire' src="/torch-logo-fire-yellow-only.png"/>
         </div>
        </Link>
    </div>
  )
}
