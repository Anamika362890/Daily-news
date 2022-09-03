
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
const DetailsNews = categories => {
    //console.log(categories);
    const newsContainer = document.getElementById('news-container');
    categories.forEach(catagory => {
        console.log(catagory);


        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `




    <div class="card mb-3 border p-3" >
    <div class="row g-0">
      <div class="col-md-4 main">
        <img src="${catagory.image_url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${catagory.title}</h5>
          <p class="card-text">${catagory.details.slice(0, 600)}....</p>
          <div class="d-flex">
          <div class="author me-3">
          <img src="${catagory.author.img}" class="  img-fluid rounded-circle " alt="...">
          </div>
          <div>
          <h6>${catagory.author.name} </h6>
          <p>${catagory.author.published_date}</p>
          </div>
          <div class="d-flex align-items-center align-items-center mx-auto">
          <div class="icon ">
          <img src="view.png" class=" profile " alt="...">
          </div>
          <div class="ms-4">
          <h5>${catagory.total_view}</h5>
          </div>
        </div>
        <div class="text-muted mx-auto mt-3">
        <i class="fa-solid fa-star empty"></i>
        <i class="fa-solid fa-star filled"></i>
        <i class="fa-solid fa-star filled"></i>
        <i class="fa-solid fa-star filled"></i>
        <i class="fa-solid fa-star filled"></i>
        
        


    </div>
    <div>
    <button  type="button" class="btn btn-info mx-auto mt-3 py-2 px-2">See Details</button>
    <div>


      </div>
    </div>
  </div>

    
    `;

        newsContainer.appendChild(newsDiv);
    });
}


loadNewsCategory();


