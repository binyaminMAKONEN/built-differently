
// const options = {
//   method: 'GET',
//   url: 'https://musclejp.p.rapidapi.com/get-tous',
//   headers: {
//     'X-RapidAPI-Key': 'eea2323f1amshd73156367368367p1a2e17jsn4ff6e884e13f',
//     'X-RapidAPI-Host': 'musclejp.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	// console.log(response.data);
//     APICOPY = response.data;
//     console.log(APICOPY);
//     let manTraining = document.querySelector('#manTraining')
//     APICOPY.forEach((element,i) => {
//         manTraining.innerHTML+=/*html*/`<div class="bg-white mb-2 d-md-flex">
//         <div class="col-md-7"><img class="img-fluid" src="${element.img}" alt=""></div>
//         <div class="pt-4">
       
//         <h3 class='d-flex justify-content-between'>${element.equipement}<button class="btn-icon bg-white pe-4 fs-5"><i id="" class="icon-color   fa-solid fa-heart col-8"></i></button></h3>
//         <p class="fs-6">${element.description}</p>
//         <img src="uuuuuuu-removebg-preview (3).png" alt="" width="180" class="mb-3">
//         </div>
//         </div>`;
//     });
    
//     let btnIcon= document.querySelectorAll('.btn-icon')
//     btnIcon.forEach(btn => {
//         // console.log(btn);    
//         // let favorites = document.querySelector('#favorites')
//         btn.addEventListener('click',function (e) {
//             if (e.target.classList.contains('icon-color')) {
//                 e.target.classList.add('icon-red')
//                 // favorites.innerHTML='kjh'
//                 e.target.classList.remove('icon-color')
//             }else if(e.target.classList.contains('icon-red')){
//                 e.target.classList.add('icon-color')
//                 e.target.classList.remove('icon-red')
//                 }
//             })
            
//         });
        
        
//     }).catch(function (error) {
//         console.error(error);
//     });
  

// let q;
// if (window.innerWidth <= 414) {
//     q=1
// }else{
//     q=3
// }
let slidesPerView;
if (screen.width<=768) {
    slidesPerView=1
} else {
    slidesPerView=3
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   let password = document.querySelector('.password')
//   let logoIm = document.querySelector('.logo-im')
//  addEventListener('click',function (e) {
//       if (e.target.classList.contains('logo-im')) {
//           logoIm.classList.add('logo-img')
//           return window.location.href='http://127.0.0.1:5500/privateArea.html';
          
//       }else{
//           this.alert(';;')
//       }
//   })
