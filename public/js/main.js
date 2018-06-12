firebase.initializeApp();
let googleProvider = new firebase.auth.GoogleAuthProvider();
let btnGoogle = document.getElementById('btn--google');
btnGoogle.addEventListener('click', signInWithGoogle);

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