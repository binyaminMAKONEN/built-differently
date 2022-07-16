class  Nav {
    constructor() {}
    creatNav() {
      let nav = document.querySelector("#navContainer");
      nav.innerHTML=/*html*/`<nav class="navbar navbar-expand-lg container bg-light">
      <div class="container-fluid">
        <a class="navbar-brand  " href="#">builtDifferently</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div class="fs-4 userIcon"><i class="fa-solid fa-circle-user ps-2"></i></div>
          <div class="log-in btn-none shadow p-3 d-none  bg-body rounded img-fluid d-flex flex-column gap-2">
   
    <div><img src="uuuuuuu-removebg-preview (3).png" alt=""></div>
   <h5 class='text-center'>welcome</h5>
    <input class="userName"type="text" placeholder="user-name">
<input type="number" class="password" placeholder="password">
<button class="login">login</button>
<button class="regester">regester</button>
    <div>
          </div>
      </div>
    </nav>`
    let logIn =document.querySelector('.log-in')
    // console.log('kk');
    // let btnX =document.querySelector('.btnX')
   let userIcon = document.querySelector('.userIcon')
    console.log(userIcon);
    userIcon.addEventListener('click',function () {
      if (logIn.classList.contains('d-none')) {
        logIn.classList.remove('d-none')
      } else {
        logIn.classList.add('d-none')
      }
    })

    }
  }
  let nav = new Nav();
  nav.creatNav();