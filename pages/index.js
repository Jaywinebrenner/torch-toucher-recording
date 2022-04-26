import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react'
import PhotoSlider from './components/slider'


export default function Landing() {

  const [activePage, setActivePage] = useState("about")

  const handleSetActivePage = (page) => {
    setActivePage(page)
  }

  return (
    <div className="landing">

      <div className='landing__left'>
        <div className='logo-wrapper'>
          <img className='logo' src="/torch-logo.png"/>
        </div>
        <div className='link-wrapper'>
          {/* <h3 className={`${activePage === 'about' ? "underline" : ""}`} onClick={() => handleSetActivePage('about')}>ABOUT</h3>
          <h3 className={`${activePage === 'contact' ? "underline" : ""}`} onClick={() => handleSetActivePage('contact')}>CONTACT</h3>
          <h3 className={`${activePage === 'clients' ? "underline" : ""}`} onClick={() => handleSetActivePage('clients')}>CLIENTS</h3>
          <h3 className={`${activePage === 'photos' ? "underline" : ""}`} onClick={() => handleSetActivePage('photos')}>PHOTOS</h3>
          <h3 className={`${activePage === 'faq' ? "underline" : ""}`} onClick={() => handleSetActivePage('faq')}>FAQ</h3> */}
          <div onClick={() => handleSetActivePage('about')} >
            <img className={`${activePage === 'about' ? "active-nav" : ""}`} src='/about.png'/>
          </div>
          <div onClick={() => handleSetActivePage('contact')} >
            <img className={`${activePage === 'contact' ? "active-nav" : ""}`} src='/contact.png'/>
          </div>
          <div onClick={() => handleSetActivePage('clients')} >
            <img className={`${activePage === 'clients' ? "active-nav" : ""}`} src='/clients.png'/>
          </div>
          <div onClick={() => handleSetActivePage('photos')}>
            <img className={`${activePage === 'photos' ? "active-nav" : ""}`} src='/photos.png'/>
          </div>
          <div onClick={() => handleSetActivePage('faq')} >
            <img className={`${activePage === 'faq' ? "active-nav" : ""}`} src='/faq.png'/>
          </div>
        </div>
      </div>

      <div className='landing__right'>

        {activePage === 'about' && <div className='about'>
          <div className='about__wrapper' >
            <h1>ABOUT TORCH TOUCHER RECORDING</h1>
            <p>Recording, mixing, and mastering services. Eric Crespo at the controls–working out of my home studio.</p>
          </div>
        </div>}

        {activePage === 'contact' && <div className='contact'>
        <div className='about__wrapper'>
            <h1>CONTACT</h1>
            <p>torchtoucherrecording@gmail.com</p>
            </div>
        </div>}

        {activePage === 'clients' && <div className='clients'>
          <div className='clients__wrapper' >
            <h1>CLIENTS</h1>
            <p>Client list</p>
          </div>
        </div>}

        {activePage === 'photos' && <div className='photos'>
          <div className='photos__wrapper' >
            <h1>PHOTOS</h1>
            <PhotoSlider/>
          </div>
        </div>}

        {activePage === 'faq' && <div className='faq'>
          <div className='faq__wrapper' >
            <h1>FAQ</h1>
            <p>FAQ ONE</p>
            <p>FAQ TWO</p>
            <p>FAQ THREE</p>
          </div>
        </div>}

      </div>
          
    </div>
  )
}
