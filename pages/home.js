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

  const { query } = useRouter();
  // console.log("Q", query.hasTransitioned);
  const [activePage, setActivePage] = useState("about");
  const myRef = useRef(null);
//   const router = useRouter();
  const executeScroll = () => myRef.current.scrollIntoView();

  const handleSetActivePage = (page) => {
    executeScroll();
    setActivePage(page)
  }

  useEffect(() => {
    let left = document.querySelector('.home__left');
    setTimeout(() => {left.classList.add("slide-in");}, 150);
    // if(query.hasTransitioned){
    //   let left = document.querySelector('.home__left');
    //   // let aboutWrapper = document.querySelector('.about-wrapper');
    //   setTimeout(() => {left.classList.add("slide-in");}, 150);
    //   // setTimeout(() => {aboutWrapper.classList.add("fade-in");}, 150);
    // }
    // router.replace('/home', undefined, { shallow: true });
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
            {/* <h1>ABOUT TORCH TOUCHER RECORDING</h1> */}
            <img src="/about.png"/>
            <p>Recording, mixing, and mastering services. Eric Crespo at the controls–working out of my home studio.</p>
          </div>
        </div>}

        {activePage === 'contact' && <div className='contact'>
        <div className='contact-wrapper'>
            {/* <h1>CONTACT</h1> */}
            <img src="/contact.png"/>
            <p>torchtoucherrecording@gmail.com</p>
            </div>
        </div>}

        {activePage === 'clients' && <div className='clients'>
          <div className='clients-wrapper' >
            {/* <h1>CLIENTS</h1> */}
            <img src="/clients.png"/>
            <p>Kate Bush</p>
            <p>Danny Aiello</p>
            <p>Silver Chair</p>
            <p>Heino</p>
          </div>
        </div>}

        {activePage === 'photos' && <div className='photos'>
            {/* <h1>PHOTOS</h1> */}
            <img src="/photos.png"/>
          <div className='photos-wrapper' >
            {/* <PhotoSlider/> */}

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
          <div className='faq-wrapper' >
            {/* <h1>FAQ</h1> */}
            <img src="/faq.png"/>
            <p>FAQ ONE</p>
            <p>FAQ TWO</p>
            <p>FAQ THREE</p>
          </div>
        </div>}

      </div>       
    </div>
  )
}
