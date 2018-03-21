window.onload = () => {
    console.log('setting up client');
    const signUpButton = document.querySelector('input#sign_up_button');
    signUpButton.addEventListener('click', signupClient);
}
const signupClient = () => {
    let loginForm = document.getElementById('client_signup');
    if (loginForm == null){
        console.log('why you have null??');
    }
    console.log(loginForm);
};
