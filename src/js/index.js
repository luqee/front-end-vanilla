import '../scss/default.scss';
import '../menu.html';
// import {includeHTML} from './includeHtml';

const clientLoginDiv = document.querySelector('#client-form');
const providerLoginDiv = document.querySelector('#provider-form');

const clientButton = document.querySelector('#client-login');
const providerButton = document.querySelector('#provider-login');

var toggleClient = () =>{
    if (clientLoginDiv.style['display'] === 'none'){
        clientLoginDiv.style['display'] = 'block';
        providerLoginDiv.style['display'] = 'none';

    }else {
        clientLoginDiv.style['display'] = 'none';
    }
};
var toggleProvider = () =>{
    console.log('providerButton clicked');
    if (providerLoginDiv.style['display'] === 'none'){
        providerLoginDiv.style['display'] = 'block';
        clientLoginDiv.style['display'] = 'none';
    }else {
        providerLoginDiv.style['display'] = 'none';
    }
};

clientButton.addEventListener('click',toggleClient);
providerButton.addEventListener('click',toggleProvider);

const clientLoginButton = document.querySelector('#cli_login_button');
const providerLoginButton = document.querySelector('#pro_login_button');
// includeHTML();
