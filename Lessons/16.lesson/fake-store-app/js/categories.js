const listElement = document.getElementById("category-list");

async function fetchCategories() {
    
    const res = await fetch ("https://api.escuelajs.co/api/v1/categories");
    const categories = await res.json();
    console.log(categories)

    categories.forEach((category) => {
        const li = document.createElement("li");
        li.textContent =category.name;
        listElement.appendChild(li);

       



    });
}
fetchCategories();