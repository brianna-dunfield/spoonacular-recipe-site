# Recipe Website using Spoonacular API

See deployed site here: https://main--recipe-rover-spoonacular.netlify.app/
**Requests per day for API are limited, if reload is not happening please return the next day as requests may have been maxed**

**Desgin**
<br/>Designed from a mobile first approach.
Responsive for mobile, tablet, and desktop.
Breakpoints:
<br/>Mobile - 375px
<br/>Tablet - 768px
<br/>Desktop - 1280px

Includes hover effects for interactive elements for a seamless user experience. 

**Features**
- Uses spoonacular API
- Allows for search in the navigation. Search can be done using 'Enter' or search button. When submitting search on the recipe details page user will be returned to the home page to see their results.
- Allows for filtering by cuisine when clicking the filter button in the navigation bar. Users have the option to select multiple cuisines. Returns user to home page with filtered recipes if searched while in the recipe details page.
- Displays 5 recipes per page and uses pagination to allow the user to access the other pages with recipes.
- Takes the user to a recipe details page when a recipe card is clicked. Includes ingredients (amount, unit, and name), instructions, title, image, ready time, servings, author and health info.
- Some images do not display due to the images not being available from the API. 
