import './NavBar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className='nav'>
			<Link
				to='/'
				className='nav__logo'
			>
				RECIPE ROVER
			</Link>
			<div className='nav__search'>
				<input
					placeholder='Search'
					className='nav__search-input'
				/>
				<div className='nav__buttons'>
					<button className='nav__buttons-search'>Search</button>
					<button className='nav__buttons-filter'>Filter</button>
				</div>
			</div>
		</nav>
	);
}
