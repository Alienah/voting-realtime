// Initialize Firebase
var config = {
apiKey: "AIzaSyAG1l2xXjiAAxOOxJ2WnSVx9nw5O17lvoM",
authDomain: "realtime-voting-29280.firebaseapp.com",
databaseURL: "https://realtime-voting-29280.firebaseio.com",
projectId: "realtime-voting-29280",
storageBucket: "realtime-voting-29280.appspot.com",
messagingSenderId: "145484062007"
};
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

function signOutOfApp () {

    firebase.auth().signOut();
    // .then(function () {
    //     // Sign-out successful.
    //     console.log('out');
        
    // }).catch(function (error) {
    //     // An error happened.
    // });
}
// document.addEventListener('DOMContentLoaded', function () {
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//     // // The Firebase SDK is initialized and available here!
//     //
//     // firebase.auth().onAuthStateChanged(user => { });
//     // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
//     // firebase.messaging().requestPermission().then(() => { });
//     // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//     //
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//     try {
//         let app = firebase.app();
//         let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
//         document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
//     } catch (e) {
//         console.error(e);
//         document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
//     }
// });