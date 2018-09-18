import Link from 'next/link';
import Modal from './Modal';

const Header = () => (
  <div id="home-header">
    <div id="home-links">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Modal TriggerValue="Sign Up" />
      <Modal TriggerValue="Log In" />
      <Link href="/learn">
        <a>Learn</a>
      </Link>
      <Link href="/trial">
        <a>Try it!</a>
      </Link>
    </div>
    <style jsx>{`
          #home-header {
            background-color: #FF5F5F;
          }

          #home-links {
            margin-left: 10vw;
            padding: 15px 0px 15px 0px;
          }
   
        `}</style>
  </div>
)

export default Header
