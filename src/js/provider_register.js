import firebase from "firebase/app";
import 'firebase/auth';

import firebaseui from "firebaseui";

window.onload = () => {

  // import firebase from "firebase";
    console.log('setting up provider form');
    let signUpButton = document.getElementById('sign_up_button');
    signUpButton.addEventListener('click', signupProvider);

    // require("firebase/database");
    // require("firebase/firestore");
    // require("firebase/messaging");
    // require("firebase/functions");

    var config = {
      apiKey: "AIzaSyDX6gLOCC5GdVoF1Q9Ni0SII-s8OjAWKTQ",
      authDomain: "chores-f5f4c.firebaseapp.com",
      databaseURL: "https://chores-f5f4c.firebaseio.com",
      projectId: "chores-f5f4c",
      storageBucket: "chores-f5f4c.appspot.com",
      messagingSenderId: "881509457100"
    };

    firebase.initializeApp(config);

    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: 'http://localhost:8080/providerHome.html',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      // tosUrl: '<your-tos-url>',
      // Privacy policy url.
      // privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    ui.start('#firebasui', uiConfig);
};




const signupProvider = (event) => {
    // event.preventDefault();
    let regProvForm = document.getElementById('provider-reg-form');
    console.log('get form\'s elements');
    const elems = regProvForm.elements;
    var user_name = elems.namedItem('provider_name').value;
    var phone_number = elems.namedItem('phone_number').value;
    var password = elems.namedItem('password').value;

    console.log('Variables to be sent are '+ user_name + ", " + phone_number + " and "+ password);
    let ajaxRequest = new XMLHttpRequest();
    var data = {
        username: user_name,
        number: phone_number,
        token: password,
    };
    ajaxRequest.onreadystatechange = () => {
        if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
            console.log(ajaxRequest.getAllResponseHeaders());
            console.log('Response text: '+ ajaxRequest.responseText);
            //redirect to login page
            var res = JSON.parse(ajaxRequest.responseText);
            if ( res.result === 'success'){
                console.log('start redirecting');
                window.location.replace('/providerLogin.html');
            }
        }
    };
    ajaxRequest.open('POST', 'http://127.0.0.1:5000/chores/api/v1.0/auth/provider/register', true);
    ajaxRequest.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    ajaxRequest.send(serialize(data));
};

var serialize = function(obj) {
    var str = [];
    for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
};
