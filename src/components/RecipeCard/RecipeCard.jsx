import './RecipeCard.scss';
import { Link } from 'react-router-dom';

export default function RecipeCard({
	id,
	recipeName,
	recipeImg,
	recipeCuisines,
	recipeTime,
	recipeServings
}) {

	return (
		<Link to={`/recipe/${id}`}>
			<article
				className='recipe-card'
			>
				<img
					src={recipeImg}
					alt={`Image of ${recipeName}`}
					className='recipe-card__img'
				/>
				<h2 className='recipe-card__title'>{recipeName}</h2>
				<div className='recipe-card__details'>
					<label>Cuisines</label>
					<p>{recipeCuisines}</p>
				</div>
				<div className='recipe-card__details'>
					<label>Time</label>
					<p>{`${recipeTime} mins`}</p>
				</div>
				<div className='recipe-card__details'>
					<label>Servings</label>
					<p>{recipeServings}</p>
				</div>
			</article>
		</Link>
	);
}
