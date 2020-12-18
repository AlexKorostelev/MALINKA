import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">Malinka +</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/cabinet">Cabinet</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
