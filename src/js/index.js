import '../scss/default.scss';

const clientLoginDiv = document.querySelector('#client-form');
const providerLoginDiv = document.querySelector('#provider-form');

const clientButton = document.querySelector('#client-login');
const providerButton = document.querySelector('#provider-login');

const toggleClient = () =>{
    console.log('clientButton clicked')
};
const toggleProvider = () =>{
    console.log('providerButton clicked')
};

clientButton.addEventListener('click',toggleClient);
providerButton.addEventListener('click',toggleProvider);

const clientLoginButton = document.querySelector('#cli_login_button');
const providerLoginButton = document.querySelector('#pro_login_button');
