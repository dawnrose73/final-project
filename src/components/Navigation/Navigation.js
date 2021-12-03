import { Link } from "react-router-dom";
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="header__navigation">
      <Link to="/">Pokemon list</Link> 
      <Link to="/caught">Caught pokemons</Link>  
    </nav>
  );
}

export default Navigation;