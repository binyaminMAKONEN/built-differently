const inputUploadImg = document.querySelector('#inputUploadImg')
let uploadedImg = '';

inputUploadImg.addEventListener('change',function(){
    const reader = new FileReader();
    reader.addEventListener('load',()=>{
        uploadedImg=reader.result;
        document.querySelector('#userBgImg').style.backgroundImage=`url(${uploadedImg})`;
    })
    reader.readAsDataURL(this.files[0])
})

let favoritesUsers=JSON.parse(localStorage.getItem('favoritesTraining'))
console.log(favoritesUsers);
let favorites = document.querySelector('.favorites');
function faevorit() {
favoritesUsers.forEach(element => {
      favorites.innerHTML += /*html*/ `
    <div class="bg-white mb-2 d-md-flex ">
          <div class="col-md-7"><img class="img-fluid" src="${element.img}" alt=""></div>
          <div class="pt-4">
         
            <div class='d-flex justify-content-between'><h3 >${element.title}</h3><button class="btn btn-light">X</button></div>
          <p class="fs-6">${element.para}</p>
          <img src="uuuuuuu-removebg-preview (3).png" alt="" width="180" class="mb-3">
          </div>
          </div>`;
});
  
}
faevorit()
function nameOfUser() {
    
    let nameOfUser = document.querySelector('#nameOfUser')
    let userName = JSON.parse(localStorage.getItem('coractUser'))
    console.log(userName);
    nameOfUser.innerHTML=userName
}
nameOfUser()