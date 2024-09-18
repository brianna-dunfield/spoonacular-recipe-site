import './RecipeList.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useEffect, useState } from 'react';
import { getSearchRequest } from '../../utils/api';
import ReactPaginate from 'react-paginate';

export default function RecipeList({ searchInput }) {
	const [recipeOptions, setRecipeOptions] = useState([]);
	const [page, setPage] = useState(0);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const numPerPage = 5;

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

	useEffect(() => {
		setFilteredRecipes(
			recipeOptions.filter((item, index) => {
				return (index >= page * numPerPage) & (index < (page + 1) * numPerPage);
			})
		);
	}, [page, recipeOptions]);

	function formatCuisines(cuisinesArr) {
		console.log(cuisinesArr);
		return cuisinesArr.join(', ');
	}
	return (
		<section className='recipes-list'>
			{filteredRecipes.map((recipe, index) => {
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
			<ReactPaginate
				onPageChange={(event) => setPage(event.selected)}
				pageCount={Math.ceil(recipeOptions.length / numPerPage)}
				breakLabel="..."
			/>
		</section>
	);
}
