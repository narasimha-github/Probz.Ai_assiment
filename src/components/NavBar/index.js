import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
  <nav className="maninav">
    <div>
      <img
        src="https://cdn.logojoy.com/wp-content/uploads/20231221100740/Empira_Compressed-350x350-1.webp"
        alt="logo"
        className="empirelogo"
      />
    </div>
    <div className="linkscontainer">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
    </div>
  </nav>
)

export default NavBar
