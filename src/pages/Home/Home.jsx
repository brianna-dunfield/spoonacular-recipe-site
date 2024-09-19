import RecipeList from '../../components/RecipeList/RecipeList';
import './Home.scss';

export default function Home({ searchInput, cuisineSelected, setSelectedRecipeId }) {
	return (
		<main>
			<RecipeList searchInput={searchInput} cuisineSelected={cuisineSelected} setSelectedRecipeId={setSelectedRecipeId}/>
		</main>
	);
}
