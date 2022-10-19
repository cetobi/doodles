function sectionDisplay(){
    let login = document.getElementById('login');
    let signup = document.getElementById('signup');

    login.style.display = 'none';
    signup.style.display = 'block';
}

let btnSign = document.getElementById('btnSign');

btnSign.addEventListener('click', function() {sectionDisplay()});