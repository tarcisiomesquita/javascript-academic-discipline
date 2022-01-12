let storage = window.localStorage

function showLoggedIn() {
    let loggedIn = document.getElementById("logged-in")
    loggedIn.style.display = "block"
}

function showLogin() {
    let login = document.getElementById("login")
    login.style.display = "block"
}

function showLoggedOut() {
    let loggedOut = document.getElementById("logged-out")
    loggedOut.style.display = "block"
}

function showSignUp() {
    hideLogin()
    let signUp = document.getElementById("sign-up")
    signUp.style.display = "block"
}

function hideLogin() {
    let login = document.getElementById("login")
    login.style.display = "none"
}

function hideSignUp() {
    let signUp = document.getElementById("sign-up")
    signUp.style.display = "none"   
}

function hideLoggedOut() {
    let loggedOut = document.getElementById("logged-out")
    loggedOut.style.display = "none"
}

function logOut() {
    let loggedIn = document.getElementById("logged-in")
    loggedIn.style.display = "none"
    showLoggedOut()
}

function signUpUser() {
    let signupEmail = document.getElementById("signup-email").value
    let signupPassword = document.getElementById("signup-password").value

    if (signupEmail && signupPassword) {
        storage.setItem(signupEmail, signupPassword) 
        window.alert("Congratulations, now you're signed up!")
        hideSignUp()
        showLogin()
    }
}

function validateLogin() {
    let loginEmail = document.getElementById("login-email").value
    let loginPassword = document.getElementById("login-password").value
    let loginInvalid = document.getElementById("login-invalid")
    
    let result = storage.getItem(loginEmail)
    if (result === null) {
        loginInvalid.innerHTML = `<p>Invalid e-mail</p>`
    }
    else {
        if (loginPassword == result) {
            hideLoggedOut()
            showLoggedIn()
        }
        else {
            loginInvalid.innerHTML = `<p>Invalid password</p>` 
        }
    }
}