import React, {useState, useRef, useEffect} from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  const photos = [
    {
      url: "/1.png"
    },
    {
      url: "/2.jpg"
  },
  {
      url: "/3.jpg"
  },
  {
      url: "/4.jpg"
  },
  {
      url: "/5.jpg"
  },
]

  const [activePage, setActivePage] = useState("about");
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  const handleSetActivePage = (page) => {
    executeScroll();
    setActivePage(page)
  }

  useEffect(() => {
    let left = document.querySelector('.home__left');
    setTimeout(() => {left.classList.add("slide-in");}, 150);
  }, []);



  return (
    <div className="home">
      <div className='home__left'>
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

      
      <div className='home__right' ref={myRef}>

        {activePage === 'about' && <div className='about'>
          <div className='about-wrapper' >
            <img src="/about.png"/>
            <p>Recording, mixing, and mastering services. Eric Crespo at the controls–working out of my home studio.</p>
          </div>
        </div>}

        {activePage === 'contact' && <div className='contact'>
        <div className='contact-wrapper'>
            <img src="/contact.png"/>
            <p>torchtoucherrecording@gmail.com</p>
            </div>
        </div>}

        {activePage === 'clients' && <div className='clients'>
            <img src="/clients.png"/>
          <div className='clients-wrapper' >
            <a href='https://www.google.com' target="_blank">Kate Bush</a>
            <p>Danny Aiello</p>
            <p>Silver Chair</p>
            <p>Heino</p>
          </div>
        </div>}

        {activePage === 'photos' && <div className='photos'>
            <img src="/photos.png"/>
          <div className='photos-wrapper' >

            {photos.map((p, i) => {
              return (
                <div key={`photo-key=${i}`} className="photo-wrapper">
                  <img src={p.url}/>
                  <p>Optional Caption</p>
                </div>
              )
            })}
          </div>
        </div>}

        {activePage === 'faq' && <div className='faq'>
            <img src="/faq.png"/>
          <div className='faq-wrapper' >
            <p>FAQ ONE</p>
            <p>FAQ TWO</p>
            <p>FAQ THREE</p>
          </div>
        </div>}

      </div>       
    </div>
  )
}