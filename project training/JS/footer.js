class Footer {
    constructor() {}
    creatNav() {
      let footer = document.querySelector("#footerContainer");
      footer.innerHTML=/*html*/`  <div class="container">
      <div class="row py-4 ">
  
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="uuuuuuu-removebg-preview (3).png" alt="" width="180" class="mb-3">
          <p class="font-italic text-muted">builtDifferently Founded in 2022
            Its founder Benjamin laments</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class=" x fa-solid fa-envelope"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class=" x fa-brands fa-linkedin"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="x fa-brands fa-instagram-square"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="x fa-brands fa-facebook-square"></i></a></li>
          </ul>
        </div>
  
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Categories</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">For Women</a></li>
            <li class="mb-2"><a href="#" class="text-muted">For Men</a></li>
            <li class="mb-2"><a href="#" class="text-muted">tip</a></li>
            <li class="mb-2"><a href="#" class="text-muted">tip</a></li>
          </ul>
        </div>
  
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Contact us</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="mailto:bnymynmqwnn@gmail.com" class="text-muted">Send Email</a></li>
            <li class="mb-2"><a href="https://www.linkedin.com/in/binyamin-makonen/" class="text-muted">linkdin</a></li>
          </ul>
        </div>
  
        <div class="footer-img col-lg-4 col-md-6 mb-lg-0 bg-black">
          <div class="p-1  rounded border ">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  
    <!-- Copyrights -->
    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2022 benja All rights reserved.</p>
      </div>
    </div>`
    }
  }
  let footer = new Footer();
  footer.creatNav();