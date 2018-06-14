firebase.initializeApp(config);

let googleProvider = new firebase.auth.GoogleAuthProvider();
let btnGoogle = document.getElementById('btn--google');
btnGoogle.addEventListener('click', signInWithGoogle);
let userLogin = document.getElementById('user-login').value;
let userPassword = document.getElementById('user-password').value;
let btnEmail = document.getElementById('btn--email');
btnEmail.addEventListener('click', signInWithEmail);
let btnSignOut = document.getElementById('btn--out');
btnSignOut.addEventListener('click', signOutOfApp);

function signInWithGoogle() {

    firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            console.log(result);

            let token = result.credential.accessToken;
            let user = result.user;
        })
        .catch((error) => {
            console.error('No se ha podido autentificar. ' + error);
        });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('login__container').classList.add('hide');
        document.getElementById('welcome__container').classList.remove('hide');
        let user = firebase.auth().currentUser;
        console.log(user);
    } else {
        document.getElementById('login__container').classList.remove('hide');
        document.getElementById('login__container').classList.add('show');
        document.getElementById('welcome__container').classList.add('hide');
    }
});

function signInWithEmail() {
    firebase.auth().signInWithEmailAndPassword(userLogin, userPassword)
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log('Ha ocurrido un error.' + errorCode, errorMessage);
        });
}

function signOutOfApp() {

    firebase.auth().signOut();

}
