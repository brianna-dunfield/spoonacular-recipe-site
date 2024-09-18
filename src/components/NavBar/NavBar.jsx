import './NavBar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className='nav'>
			<Link to='/'>RECIPE ROVER</Link>
			<input placeholder='Search' />
			<div>
				<button>Search</button>
				<button>Filter</button>
			</div>
		</nav>
	);
}
