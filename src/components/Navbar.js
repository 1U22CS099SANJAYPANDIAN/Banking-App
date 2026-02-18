import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand">OPERATIONS</span>

        <div className="navbar-nav">
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/create">Create user</Link>
          <Link className="nav-link text-white" to="/deposit">Deposit</Link>
          <Link className="nav-link text-white" to="/withdraw">Withdraw</Link>
          <Link className="nav-link text-white" to="/data">All users</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
