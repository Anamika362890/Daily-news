
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

        <a onclick="displayNews('${category.category_id}')" class="h6  gray text-decoration-none" href="#"> ${category.category_name}</a>
        



  
    
        
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
const DetailsNews = newses => {
    //console.log(newses);
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        console.log(news);


        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `




    <div class="card mb-3 border p-3" >
    <div class="row g-3">
      <div class="col-md-4 main">
        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title h3 mb-4">${news.title}</h5>
          <p class="card-text gray">${news.details.slice(0, 600)}....</p>
          <div class="d-flex mt-4">
          <div class="author  me-3">
          <img src="${news.author.img ? news.author.img : 'No Images Found'}" class="  img-fluid rounded-circle " alt="...">
          </div>
          <div>
          <h6>${news.author.name ? news.author.name : 'No name Found'} </h6>
          <p class="gray">${news.author.published_date ? news.author.published_date : 'No Date Found'}</p>
          </div>
          <div class="d-flex align-items-center align-items-center mx-auto">
          <div class="icon ">
          <img src="view.png" class=" profile " alt="...">
          </div>
          <div class="ms-4 gray mt-1 ">
          <h5 class="fw-bold">${news.total_view ? news.total_view : 'No Viewers'}</h5>
          </div>
        </div >
        <div class="text-muted mx-auto mt-3">
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
 
        <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
        
        


    </div>
    <div>
    <button onclick="displayNewsDetails('${news._id}')" type="button" class="btn btn-info mx-auto mt-2 py-2 px-2 text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</button>


    <div>


    


      </div>
    </div>
  </div>

    
    `;

        newsContainer.appendChild(newsDiv);
    });
}


const displayNewsDetails = async news_id => {


    const url = ` https://openapi.programming-hero.com/api/news/${news_id}`;
    //console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    DetailsNewsButton(data.data[0])

}

const DetailsNewsButton = info => {
    console.log(info);
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = info.title;
    const Details = document.getElementById('modal-details');
    Details.innerHTML = `
    <p>Author Name:${info.author.name ? info.author.name : 'No author name found'}</p>

    <p>Rating Badge:${info.rating?.badge ? info.rating.badge : 'No Rating Found'}</p>

    <p>Viewers:${info.total_view ? info.total_view : 'No viewers Found'}</p >

        `;




}
loadNewsCategory();

