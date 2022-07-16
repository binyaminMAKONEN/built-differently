let userName = document.querySelector('.userName')
  let password = document.querySelector('.password')
  let regester = document.querySelector('.regester')
  let login = document.querySelector('.login')
console.log(userName);
console.log(password);
regester.addEventListener('click',function () {
    let users = JSON.parse(localStorage.getItem('user')) || []
    let usersData={
        fname:userName.value,
        password:password.value
    }
    users.push(usersData)
    localStorage.setItem('user',JSON.stringify(users))
})

function logIn() {
    let dataUsers=JSON.parse(localStorage.getItem('user')) 
    let isUserExist = false;
    dataUsers.forEach((user,i) => {
        if (user.fname ==userName.value && user.password == password.value) {
            isUserExist = true;
            localStorage.setItem('coractUser',JSON.stringify(userName.value))
            return window.location.href='http://127.0.0.1:5501/privateArea.html';
        }
    }); 
    if (!isUserExist){
        alert ("user not found")
    }
}
login.addEventListener('click',logIn)