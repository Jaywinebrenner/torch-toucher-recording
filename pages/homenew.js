import React, {useState, useRef, useEffect} from 'react'

import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Faq from './components/Faq';

export default function homenewNew({props}) {
    console.log("props", props[0].acf);

  const [activePage, setActivePage] = useState("about");

  const myRef = useRef(null);

  const executeScroll = () => {
      const right = document.querySelector('.header');
      const bounds = right.getBoundingClientRect();
    window.scrollTo({top: bounds.top, left: bounds.top, behavior: 'smooth' });
  }
  const [loading, setLoading] = useState(false)

  const handleSetActivePage = (page) => {
    executeScroll();
    setActivePage(page)
  }

  useEffect(() => {
    let left = document.querySelector('.homenew__left');
    setTimeout(() => {left.classList.add("slide-in");}, 150);
  }, []);

  return (
    <div className="homenew">
      <div className='homenew__left section'>
        <div className='logo-wrapper'>
          <img className='logo' src="/torch-logo.png"/>
          <img className='logo fire-only blink-me' src="/torch-logo-fire-only.png"/>
        </div>
        <div className='link-wrapper'>
          <h3 className={`${activePage === 'about' ? "underline" : ""}`} onClick={() => handleSetActivePage('about')}>ABOUT</h3>
          <h3 className={`${activePage === 'contact' ? "underline" : ""}`} onClick={() => handleSetActivePage('contact')}>CONTACT</h3>
          <h3 className={`${activePage === 'clients' ? "underline" : ""}`} onClick={() => handleSetActivePage('clients')}>CLIENTS</h3>
          <h3 className={`${activePage === 'photos' ? "underline" : ""}`} onClick={() => handleSetActivePage('photos')}>PHOTOS</h3>
          <h3 className={`${activePage === 'faq' ? "underline" : ""}`} onClick={() => handleSetActivePage('faq')}>FAQ</h3>
        </div> 
      </div>

      <div className='homenew__middle section'>
				<div>HEADER HERE</div>
					<div>
						CONTENT HERE
					</div>
      </div>

      <div className='homenew__right section'>
        <div className='torch-wrapper'>
            <img src="/Torch_Gif.gif"/>
        </div>
			</div>

    </div>
  )
}

export async function getServerSideProps() {

    const res = await fetch(`https://torch-toucher-recording.000webhostapp.com/wp-json/wp/v2/pages`);
    
    let props = await res.json();

    return {
      props: {
        props
      },
    };
}
