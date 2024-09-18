import './RecipeList.scss';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function RecipeList() {
	const name = 'Broccolini Quinoa Pilaf';
	const cuisines = ['Mediterranean', 'Italian', 'European'];
	const time = '30';
	const servings = '2';
	const img = 'https://img.spoonacular.com/recipes/715769-312x231.jpg';

    function formatCusines(cuisinesArr){
        return cuisinesArr.join(", ");
    }
	return (
		<section className='recipes-list'>
			<RecipeCard recipeName={name} recipeCuisines={formatCusines(cuisines)} recipeImg={img} recipeServings={servings} recipeTime={time}/>
		</section>
	);
}
