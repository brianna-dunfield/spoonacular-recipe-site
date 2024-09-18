import './NavBar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar({ setSearchInput }) {
	const [currInput, setCurrInput] = useState('');

	const handleBtnClick = () => {
		setSearchInput(currInput);
		setCurrInput('');
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			setSearchInput(currInput);
			setCurrInput('');
		}
	};

	const handleInput = (event) => {
		setCurrInput(event.target.value);
	};

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
					type='text'
					value={currInput}
					onKeyDown={handleKeyDown}
					placeholder='Search'
					onChange={handleInput}
					className='nav__search-input'
				/>
				<div className='nav__buttons'>
					<button
						className='nav__buttons-search'
						onClick={handleBtnClick}
					>
						Search
					</button>
					<button className='nav__buttons-filter'>Filter</button>
				</div>
			</div>
		</nav>
	);
}
