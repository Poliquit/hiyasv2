

function saveData() {
    const user = document.getElementById('register_username').value
    const pwd = document.getElementById('register_password').value
    try {
        
        localStorage.setItem('username', user)
        localStorage.setItem('password', pwd)
        window.alert('insert successfuly')
        window.location.href = "Home/home.html";
        
    }
    catch (err) {
        window.alert('error failed')
    }
}


document.getElementById('user').innerHTML = localStorage.getItem('username')
document.getElementById('pass').innerHTML = localStorage.getItem('password')
