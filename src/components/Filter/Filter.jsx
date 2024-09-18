import './Filter.scss';

export default function Filter({ setFilterSideBar, setSelectedCuisine }) {
	const cuisineOptions = [
		'African',
		'Asian',
		'American',
		'British',
		'Cajun',
		'Caribbean',
		'Chinese',
		'Eastern European',
		'European',
		'French',
		'German',
		'Greek',
		'Indian',
		'Irish',
		'Italian',
		'Japanese',
		'Jewish',
		'Korean',
		'Latin American',
		'Mediterranean',
		'Mexican',
		'Middle Eastern',
		'Nordic',
		'Southern',
		'Spanish',
		'Thai',
		'Vietnamese',
	];

	const handleBtnClick = () => {
		setFilterSideBar(false);
	};

	const handleFilterBtnClick = (event) => {
		event.preventDefault();
		setFilterSideBar(false);
		const selectedCuisines = [];
		const checkboxes = document.querySelectorAll(
			'.filter__form input[type="checkbox"]'
		);
		checkboxes.forEach((checkbox) => {
			if (checkbox.checked) {
				selectedCuisines.push(checkbox.value);
			}
		});
		setSelectedCuisine(selectedCuisines);
	};

	return (
		<aside className='filter'>
			<button
				onClick={handleBtnClick}
				className='filter__close'
			>
				X
			</button>
			<h2 className='filter__title'> Filter </h2>
			<p>Select a cuisine:</p>
			<form className='filter__form'>
				{cuisineOptions.map((cuisine, index) => {
					return (
						<div key={index}>
							<input
								type='checkbox'
								id={cuisine}
								name={cuisine}
								value={cuisine}
							/>
							<label htmlFor={cuisine}>{cuisine}</label>
						</div>
					);
				})}
				<button
					type='submit'
					onClick={handleFilterBtnClick}
                    className='filter__form-submit'
				>
					FILTER
				</button>
			</form>
		</aside>
	);
}
