import React, {useState, useRef, useEffect} from 'react'

import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Faq from './components/Faq';

export default function Home({props}) {
    console.log("props", props[0].acf);

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
//   const executeScroll = () => myRef.current.scrollIntoView();
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

      
      <div className='header' ref={myRef}>

        {activePage === 'about' && 
        <>
          <div className='about'>
            <div className='about-wrapper' >
              <img src="/about.png"/>
              {/* <p>Recording, mixing, and mastering services. Eric Crespo at the controls–working out of my home studio.</p> */}
              {props && <div dangerouslySetInnerHTML={{ __html: props[0].acf.text}}/>}
            </div>
          </div>
          <div className='about-body'>
            <h2>Recording, mixing, and mastering services. Eric Crespo at the controls–working out of my home studio.</h2>
          </div>

       
        </>
        }

        {activePage === 'contact' && 

        <>
        <div className='contact'>
        <div className='contact-wrapper'>
            <img src="/contact.png"/>

            </div>
        </div>
        <div className='about-body'>
            <h2>eric@crespo.com</h2>
            <h2>503.666.6666</h2>
          </div>
        </>
        }

        {activePage === 'clients' && <div className='clients'>
            <img src="/clients.png"/>
          <div className='clients-wrapper' >
              {props && props[0].acf.clients.map((c, i) => {
                  return (
                    <a key={`client-key=${i}`} href={c.url} target="_blank" rel="noreferrer">{c.name}</a>
                  )
              })}
              {/* <a>George Thorogood</a>
              <a>Benny Hill</a>
              <a>Overkill</a> */}
          </div>
        </div>}

        {activePage === 'photos' && <div className='photos'>
            <img src="/photos.png"/>
          <div className='photos-wrapper' >

              {props && props[0].acf.photos.map((p,i) => {
                  if(!loading){
                      return (
                        <div key={`photo-key=${i}`} className="photo-wrapper">
                            <img src={p.photo.url}/>
                            <p>{p.caption}</p>
                        </div>
                      )
                  } else {
                      <img src='/spinner.gif'/>
                  }

              })}

          </div>
        </div>}

        {activePage === 'faq' && 
            <div className='faq'>
                <img src="/faq.png"/>
                {props && <div className='faq-wrapper'>
                  {props[0].acf.faqs.map((f)=> {
                    return (
                      <p>{f.faq}</p>
                    )
                  })}
                  
                  </div>}

            </div>
        }

      </div>       
      <div className='torch-wrapper'>
        <img src="/Torch_Gif.gif"/>
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
