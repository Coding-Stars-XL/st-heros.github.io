import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ST-Heros</div>

      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}