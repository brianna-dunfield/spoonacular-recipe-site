import './RecipeDetails.scss';
import { useParams } from 'react-router-dom';

export default function RecipeDetails() {
	// const recipeId = useParams();
	const recipe = {
		vegetarian: false,
		vegan: false,
		glutenFree: true,
		dairyFree: false,
		veryHealthy: false,
		cheap: false,
		veryPopular: false,
		sustainable: false,
		lowFodmap: false,
		weightWatcherSmartPoints: 12,
		gaps: 'no',
		preparationMinutes: null,
		cookingMinutes: null,
		aggregateLikes: 92,
		healthScore: 27,
		creditsText: 'foodista.com',
		sourceName: 'foodista.com',
		pricePerServing: 340.22,
		extendedIngredients: [
			{
				id: 1045062,
				aisle: 'Meat',
				image: 'chicken-breasts.png',
				consistency: 'SOLID',
				name: 'chicken breast halves',
				nameClean: 'chicken breast halves',
				original: '8 boneless, skinless chicken breast halves',
				originalName: 'boneless, skinless chicken breast halves',
				amount: 8.0,
				unit: '',
				meta: ['boneless', 'skinless'],
				measures: {
					us: {
						amount: 8.0,
						unitShort: '',
						unitLong: '',
					},
					metric: {
						amount: 8.0,
						unitShort: '',
						unitLong: '',
					},
				},
			},
			{
				id: 1123,
				aisle: 'Milk, Eggs, Other Dairy',
				image: 'egg.png',
				consistency: 'SOLID',
				name: 'egg',
				nameClean: 'egg',
				original: '2 egg, slightly beaten',
				originalName: 'egg, slightly beaten',
				amount: 2.0,
				unit: '',
				meta: ['slightly beaten'],
				measures: {
					us: {
						amount: 2.0,
						unitShort: '',
						unitLong: '',
					},
					metric: {
						amount: 2.0,
						unitShort: '',
						unitLong: '',
					},
				},
			},
			{
				id: 10028033,
				aisle: 'Bakery/Bread',
				image: 'italian-bread.jpg',
				consistency: 'SOLID',
				name: 'bread crumbs',
				nameClean: 'italian bread',
				original: '1 1/2 cups Italian bread crumbs',
				originalName: 'Italian bread crumbs',
				amount: 1.5,
				unit: 'cups',
				meta: ['italian'],
				measures: {
					us: {
						amount: 1.5,
						unitShort: 'cups',
						unitLong: 'cups',
					},
					metric: {
						amount: 42.0,
						unitShort: 'g',
						unitLong: 'grams',
					},
				},
			},
			{
				id: 10011549,
				aisle: 'Pasta and Rice',
				image: 'tomato-sauce-or-pasta-sauce.jpg',
				consistency: 'SOLID',
				name: 'pasta sauce',
				nameClean: 'pasta sauce',
				original: '1 jar pasta sauce',
				originalName: 'pasta sauce',
				amount: 1.0,
				unit: 'jar',
				meta: [],
				measures: {
					us: {
						amount: 1.0,
						unitShort: 'jar',
						unitLong: 'jar',
					},
					metric: {
						amount: 1.0,
						unitShort: 'jar',
						unitLong: 'jar',
					},
				},
			},
			{
				id: 1001026,
				aisle: 'Cheese',
				image: 'shredded-cheese-white.jpg',
				consistency: 'SOLID',
				name: 'mozzarella cheese',
				nameClean: 'shredded mozzarella',
				original: '1 cup mozzarella cheese, shredded',
				originalName: 'mozzarella cheese, shredded',
				amount: 1.0,
				unit: 'cup',
				meta: ['shredded'],
				measures: {
					us: {
						amount: 1.0,
						unitShort: 'cup',
						unitLong: 'cup',
					},
					metric: {
						amount: 112.0,
						unitShort: 'g',
						unitLong: 'grams',
					},
				},
			},
			{
				id: 1033,
				aisle: 'Cheese',
				image: 'parmesan.jpg',
				consistency: 'SOLID',
				name: 'parmesan cheese',
				nameClean: 'parmesan',
				original: '1/4 cup Parmesan cheese, grated',
				originalName: 'Parmesan cheese, grated',
				amount: 0.25,
				unit: 'cup',
				meta: ['grated'],
				measures: {
					us: {
						amount: 0.25,
						unitShort: 'cups',
						unitLong: 'cups',
					},
					metric: {
						amount: 25.0,
						unitShort: 'g',
						unitLong: 'grams',
					},
				},
			},
		],
		id: 641836,
		title: 'Easy Baked Parmesan Chicken',
		readyInMinutes: 45,
		servings: 4,
		sourceUrl:
			'https://www.foodista.com/recipe/KVKJYVHX/easy-parmesan-chicken',
		image: 'https://img.spoonacular.com/recipes/641836-556x370.jpg',
		imageType: 'jpg',
		summary:
			'Easy Baked Parmesan Chicken might be a good recipe to expand your main course recipe box. This recipe serves 4 and costs $3.4 per serving. One portion of this dish contains roughly <b>62g of protein</b>, <b>20g of fat</b>, and a total of <b>497 calories</b>. This recipe is liked by 92 foodies and cooks. This recipe from Foodista requires chicken breast halves, egg, parmesan cheese, and mozzarella cheese. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 93%</b>, this dish is amazing. <a href="https://spoonacular.com/recipes/easy-baked-chicken-parmesan-1450493">Easy Baked Chicken Parmesan</a>, <a href="https://spoonacular.com/recipes/easy-parmesan-baked-chicken-137192">Easy Parmesan Baked Chicken</a>, and <a href="https://spoonacular.com/recipes/weight-watchers-easy-healthy-baked-chicken-parmesan-1293595">Weight Watchers Easy Healthy Baked Chicken Parmesan</a> are very similar to this recipe.',
		cuisines: [],
		dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
		diets: [],
		occasions: [],
		instructions:
			'Preheat oven to 400 degrees. Dip chicken in egg, then bread crumbs.\nIn 13 X 9 inch baking dish, arrange chicken. bake uncovered 20 minutes.\nPour pasta sauce over chicken, then top with cheese. Bake 10 more minutes or until chicken reaches 170 degrees and is no longer pink.\nServe immediately with or over pasta.',
		analyzedInstructions: [
			{
				name: '',
				steps: [
					{
						number: 1,
						step: 'Preheat oven to 400 degrees. Dip chicken in egg, then bread crumbs.',
						ingredients: [
							{
								id: 18079,
								name: 'breadcrumbs',
								localizedName: 'breadcrumbs',
								image: 'breadcrumbs.jpg',
							},
							{
								id: 0,
								name: 'chicken',
								localizedName: 'chicken',
								image: 'whole-chicken.jpg',
							},
							{
								id: 0,
								name: 'dip',
								localizedName: 'dip',
								image: '',
							},
							{
								id: 1123,
								name: 'egg',
								localizedName: 'egg',
								image: 'egg.png',
							},
						],
						equipment: [
							{
								id: 404784,
								name: 'oven',
								localizedName: 'oven',
								image: 'https://spoonacular.com/cdn/equipment_100x100/oven.jpg',
							},
						],
					},
					{
						number: 2,
						step: 'In 13 X 9 inch baking dish, arrange chicken. bake uncovered 20 minutes.',
						ingredients: [
							{
								id: 0,
								name: 'chicken',
								localizedName: 'chicken',
								image: 'whole-chicken.jpg',
							},
						],
						equipment: [
							{
								id: 404646,
								name: 'baking pan',
								localizedName: 'baking pan',
								image: 'https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg',
							},
							{
								id: 404784,
								name: 'oven',
								localizedName: 'oven',
								image: 'https://spoonacular.com/cdn/equipment_100x100/oven.jpg',
							},
						],
						length: {
							number: 20,
							unit: 'minutes',
						},
					},
					{
						number: 3,
						step: 'Pour pasta sauce over chicken, then top with cheese.',
						ingredients: [
							{
								id: 10011549,
								name: 'pasta sauce',
								localizedName: 'pasta sauce',
								image: 'tomato-sauce-or-pasta-sauce.jpg',
							},
							{
								id: 0,
								name: 'chicken',
								localizedName: 'chicken',
								image: 'whole-chicken.jpg',
							},
							{
								id: 1041009,
								name: 'cheese',
								localizedName: 'cheese',
								image: 'https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png',
							},
						],
						equipment: [],
					},
					{
						number: 4,
						step: 'Bake 10 more minutes or until chicken reaches 170 degrees and is no longer pink.',
						ingredients: [
							{
								id: 0,
								name: 'chicken',
								localizedName: 'chicken',
								image: 'whole-chicken.jpg',
							},
						],
						equipment: [
							{
								id: 404784,
								name: 'oven',
								localizedName: 'oven',
								image: 'https://spoonacular.com/cdn/equipment_100x100/oven.jpg',
							},
						],
						length: {
							number: 10,
							unit: 'minutes',
						},
					},
					{
						number: 5,
						step: 'Serve immediately with or over pasta.',
						ingredients: [
							{
								id: 20420,
								name: 'pasta',
								localizedName: 'pasta',
								image: 'https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg',
							},
						],
						equipment: [],
					},
				],
			},
		],
		originalId: null,
		spoonacularScore: 89.94281005859375,
		spoonacularSourceUrl:
			'https://spoonacular.com/easy-baked-parmesan-chicken-641836',
	};
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

			<p>{checkHealthInfo()}</p>
			<article>
				<h3>Ingredients:</h3>
				<ul>
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
					{recipe.analyzedInstructions[0].steps.map((instruction) => {
						return (
							<div className='recipe__instruction'>
								<p className='recipe__instruction-number'>{instruction.number}</p>
								<p>{instruction.step}</p>
							</div>
						);
					})}
				</div>
			</article>
		</main>
	);
}
