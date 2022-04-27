


export default function Navbar() {

  return (
    <div className='home__left'>
    <div className='logo-wrapper'>
      <img className='logo' src="/torch-logo.png"/>
    </div>
    <div className='link-wrapper'>
      <h3 className={`${activePage === 'about' ? "underline" : ""}`} onClick={() => handleSetActivePage('about')}>ABOUT</h3>
      <h3 className={`${activePage === 'contact' ? "underline" : ""}`} onClick={() => handleSetActivePage('contact')}>CONTACT</h3>
      <h3 className={`${activePage === 'clients' ? "underline" : ""}`} onClick={() => handleSetActivePage('clients')}>CLIENTS</h3>
      <h3 className={`${activePage === 'photos' ? "underline" : ""}`} onClick={() => handleSetActivePage('photos')}>PHOTOS</h3>
      <h3 className={`${activePage === 'faq' ? "underline" : ""}`} onClick={() => handleSetActivePage('faq')}>FAQ</h3>

      {/* <div onClick={() => handleSetActivePage('about')} >
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
      </div>  */}

    </div>
  </div>
  )
}
