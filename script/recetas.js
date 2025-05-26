console.log("holasssss");
async function mostrarmealss() {
    console.log("holaaaaaa")
    let meal= document.getElementById("comidas")
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
    console.log(response.data.meals)
    const data = response.data;
    for (let i = 0; i < data.meals.length; i++) {
        let meals = data.meals[i];
        let nombre = meals.strMeal;
        let img = meals.strMealThumb;
        let category= meals.strCategory;

        meal.innerHTML += `
        <div class="cosita" idmeals="${meals.id}">
            <img class="images" src="${img}"/>
            <h1 class="circuitNames">${nombre}</h1>
            <h1 class="circuitNames">${category}</h1>
        </div>
`
    }
}
mostrarmealss()