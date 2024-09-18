import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	const [searchInput, setSearchInput] = useState('');

	return (
		<>
			<BrowserRouter>
				<NavBar setSearchInput={setSearchInput} />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
