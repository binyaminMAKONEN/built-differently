const options = {
  method: "GET",
  url: "https://musclejp.p.rapidapi.com/get-tous",
  headers: {
    "X-RapidAPI-Key": "eea2323f1amshd73156367368367p1a2e17jsn4ff6e884e13f",
    "X-RapidAPI-Host": "musclejp.p.rapidapi.com",
  },
};
console.log(document.querySelector('div').childNodes.length)

axios
  .request(options)
  .then(function (response) {
    // console.log(response.data);
    APICOPY = response.data;
    // console.log(APICOPY);
    let manTraining = document.querySelector("#manTraining");
    APICOPY.forEach((element, i) => {
      manTraining.innerHTML += /*html*/ `<div class="bg-white mb-2 d-md-flex">
          <div class="col-md-7"><img class="img-fluid" src="${element.img}" alt=""></div>
          <div class="pt-4">
         
          <h3 class='d-flex justify-content-between'>${element.equipement}<button class="btn-icon bg-white pe-4 fs-5"><i id="" class="icon-color   fa-solid fa-heart col-8"></i></button></h3>
          <p class="fs-6">${element.description}</p>
          <img src="uuuuuuu-removebg-preview (3).png" alt="" width="180" class="mb-3">
          </div>
          </div>`;
    });

    let btnIcon = document.querySelectorAll(".btn-icon");
    btnIcon.forEach((btn) => {
      // console.log(btn);
      // let favorites = document.querySelector('#favorites')
      btn.addEventListener("click", function (e) {
        let target = e.target;
        let parent =
          target.parentElement.parentElement.parentElement.parentElement;
        console.log(parent);
        if (e.target.classList.contains("icon-color")) {
            e.target.classList.add("icon-red");
            e.target.classList.remove("icon-color");
          let favorites =
            JSON.parse(localStorage.getItem("favoritesTraining")) || [];
          let imgSrc = parent.firstElementChild.firstElementChild.src;
          let titleTarget=parent.childNodes[3].childNodes[1].innerText ;
          let paraTarget=parent.childNodes[3].childNodes[3].innerText ;
          let favoritesData = {
            img: imgSrc,
            title: titleTarget,
            para: paraTarget,
          };
          // console.log(favoritesData.training);
          favorites.push(favoritesData)
          console.log(favoritesData);
          localStorage.setItem("favoritesTraining", JSON.stringify(favorites));
          // let favoritesUsers=JSON.parse(localStorage.getItem('favoritesTraining'))
          // console.log(favoritesUsers);
        } else if (e.target.classList.contains("icon-red")) {
          e.target.classList.add("icon-color");
          e.target.classList.remove("icon-red");
          localStorage.removeItem('favoritesTraining')
        }
      });
    });
  })
  .catch(function (error) {
    console.error(error);
  });
