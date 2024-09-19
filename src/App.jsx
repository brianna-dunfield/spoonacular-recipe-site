import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Filter from './components/Filter/Filter.jsx';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails.jsx';

function App() {
	const [searchInput, setSearchInput] = useState('chicken');
	const [filterSideBar, setFilterSideBar] = useState(false);
	const [cuisineSelected, setCuisineSelected] = useState([]);

	return (
		<>
			<BrowserRouter>
				<NavBar setSearchInput={setSearchInput} setFilterSideBar={setFilterSideBar}/>
				{filterSideBar ? <Filter setFilterSideBar={setFilterSideBar} setSelectedCuisine={setCuisineSelected}/> : null}
				<Routes>
					<Route
						path='/'
						element={<Home searchInput={searchInput} cuisineSelected={cuisineSelected}/>}
					/>
					<Route
						path='/recipe'
						element={<RecipeDetails/>}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
