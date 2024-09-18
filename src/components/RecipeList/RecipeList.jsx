import './RecipeList.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useEffect, useState } from 'react';
import { getSearchRequest } from '../../utils/api';

export default function RecipeList({ searchInput }) {
	const [recipeOptions, setRecipeOptions] = useState([]);
	const name = 'Broccolini Quinoa Pilaf';
	const cuisines = ['Mediterranean', 'Italian', 'European'];
	const time = '30';
	const servings = '2';
	const img = 'https://img.spoonacular.com/recipes/715769-312x231.jpg';

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const results = await getSearchRequest(searchInput);
				console.log('Data results', results.data);
				setRecipeOptions(results.data.results);
			} catch (error) {
				console.error(error);
			}
		};
		fetchRecipes();
	}, [searchInput]);

	function formatCuisines(cuisinesArr) {
		console.log(cuisinesArr);
		return cuisinesArr.join(', ');
	}
	return (
		<section className='recipes-list'>
			{recipeOptions.map((recipe, index) => {
				return (
					<RecipeCard
						key={index}
						recipeName={recipe.title}
						recipeCuisines={formatCuisines(recipe.cuisines)}
						recipeImg={recipe.image}
						recipeServings={recipe.servings}
						recipeTime={recipe.readyInMinutes}
					/>
				);
			})}
		</section>
	);
}
