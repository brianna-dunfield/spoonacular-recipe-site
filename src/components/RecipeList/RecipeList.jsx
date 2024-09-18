import './RecipeList.scss';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useEffect, useState } from 'react';
import { getSearchRequest } from '../../utils/api';
import ReactPaginate from 'react-paginate';

export default function RecipeList({ searchInput, cuisineSelected }) {
	const [recipeOptions, setRecipeOptions] = useState([]);
	const [page, setPage] = useState(0);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const numPerPage = 5;

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const results = await getSearchRequest(searchInput, cuisineSelected);
				setRecipeOptions(results.data.results);
			} catch (error) {
				console.error(error);
			}
		};
		fetchRecipes();
	}, [searchInput, cuisineSelected]);

	useEffect(() => {
		window.scrollTo(0, 0);
		setFilteredRecipes(
			recipeOptions.filter((item, index) => {
				return (
					(index >= page * numPerPage) &
					(index < (page + 1) * numPerPage)
				);
			})
		);
	}, [page, recipeOptions]);

	function formatCuisines(cuisinesArr) {
		return cuisinesArr.join(', ');
	}
	return (
		<section>
			<div className='recipes-list'>
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
			</div>

			<ReactPaginate
				containerClassName='pagination'
				pageClassName='pagination__number'
				activeClassName='pagination__number--active'
				onPageChange={(event) => setPage(event.selected)}
				pageCount={Math.ceil(recipeOptions.length / numPerPage)}
				breakLabel='...'
			/>
		</section>
	);
}
