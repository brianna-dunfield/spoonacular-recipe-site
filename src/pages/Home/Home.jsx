import RecipeList from '../../components/RecipeList/RecipeList';
import './Home.scss';

export default function Home({ searchInput }) {
	return (
		<main>
			<RecipeList searchInput={searchInput} />
		</main>
	);
}
