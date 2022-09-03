
const loadNewsCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;

    const res = await fetch(url);
    const data = await res.json();
    displayNewsCategory(data.data.news_category)


}

const displayNewsCategory = categories => {
    //console.log(categories);
    const categoriesContainer = document.getElementById('category-container');
    categories.forEach(category => {
        //console.log(category);
        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('col');
        catagoryDiv.innerHTML = `
        <h6 onclick="displayNews('${category.category_id}')" >
        ${category.category_name}
        </h6>



  
    
        
        `;
        categoriesContainer.appendChild(catagoryDiv);

    });

}


const displayNews = async category_id => {


    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    //console.log(url);

    const res = await fetch(url);
    const data = await res.json();
    DetailsNews(data.data)




}
const DetailsNews = news => {
    console.log(news);
    const newsContainer = document.getElementById('news-container');
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('col');
    newsDiv.innerHTML = `
    <div class="card h-100">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</p>
    </div>
</div>
    
    `;

    newsContainer.appendChild(newsDiv);
}


loadNewsCategory();


