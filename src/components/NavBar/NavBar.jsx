import './NavBar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaLessThanEqual } from 'react-icons/fa';

export default function NavBar({ setSearchInput, setFilterSideBar }) {
	const [currInput, setCurrInput] = useState('');

	const handleSearchBtnClick = () => {
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

	const handleFilterBtnClick = () => {
		setFilterSideBar(true);
	}
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
						onClick={handleSearchBtnClick}
					>
						Search
					</button>
					<button
						className='nav__buttons-filter'
						onClick={handleFilterBtnClick}
					>
						Filter
					</button>
				</div>
			</div>
		</nav>
	);
}
