import './RecipeDetails.scss';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getRecipeInfo } from '../../utils/api';

export default function RecipeDetails() {
	const recipeId = useParams();
    const [recipe, setRecipe] = useState();
	
    useEffect(()=>{
        const fetchRecipe = async ()=>{
            try{
                const response = await getRecipeInfo(recipeId.id);
                console.log(response.data);
                setRecipe(response.data);
            }catch(error){
                console.error(error);
            }
        }
        fetchRecipe();
    }, [])

    if (!recipe) {
        return <p>Loading...</p>;
    }

	const checkHealthInfo = () => {
		let healthInfo = [];
		if (recipe.vegetarian) {
			healthInfo.push('Vegetarian');
		} else if (recipe.vegan) {
			healthInfo.push('Vegan');
		} else if (recipe.glutenFree) {
			healthInfo.push('Gluten Free');
		} else if (recipe.dairyFree) {
			healthInfo.push('Dairy Free');
		}
		return healthInfo.join(', ');
	};
	return (
		<main>
			<h1>{recipe.title}</h1>
			<p>Author: {recipe.creditsText}</p>
			<p>{checkHealthInfo()}</p>
			<div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
			<img
				src={recipe.image}
				alt={`Image of ${recipe.title}`}
				className='recipe__img'
			/>
			<div className='recipe__time-servings'>
				<div>
					<p>Time</p>
					<p>{recipe.readyInMinutes} mins</p>
				</div>
				<div>
					<p>Servings</p>
					<p>{recipe.servings} servings</p>
				</div>
			</div>
			<article className='recipe__info'>
				<ul className='recipe__ingredients'>
					<h3>Ingredients:</h3>
					{recipe.extendedIngredients.map((ingredient, index) => {
						return (
							<li key={index}>
								{ingredient.amount} {ingredient.unit}{' '}
								{ingredient.name}
							</li>
						);
					})}
				</ul>
				<div>
                <h3>Instructions:</h3>
					{recipe.analyzedInstructions[0].steps.map(
						(instruction, index) => {
							return (
								<div
									key={index}
									className='recipe__instruction'
								>
									<p className='recipe__instruction-number'>
										{instruction.number}
									</p>
									<p>{instruction.step}</p>
								</div>
							);
						}
					)}
				</div>
			</article>
		</main>
	);
}
