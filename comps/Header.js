import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/signup">
          <a style={linkStyle}>Sign Up</a>
        </Link>
        <Link href="/login">
          <a style={linkStyle}>Log In</a>
        </Link>
        <Link href="/learn">
          <a style={linkStyle}>Learn</a>
        </Link>
    </div>
)

export default Header
