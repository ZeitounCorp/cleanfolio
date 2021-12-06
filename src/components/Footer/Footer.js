import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a href='https://github.com/ZeitounCorp' className='link footer__link'>
      © <span style={{ fontWeight: 'bold' }}>Lenny Zeitoun</span> {new Date().getFullYear()}
    </a>
    <p>Software Engineer</p>
  </footer>
)

export default Footer
