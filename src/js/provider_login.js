window.onload = () => {
    let loginButton = document.getElementById('login_button');
    loginButton.addEventListener('click', loginProvider);
};
const loginProvider = (event) => {
    // event.preventDefault();
    let loginProvForm = document.getElementById('provider-reg-form');
    console.log('get form\'s elements');
    const elems = loginProvForm.elements;
    var phone_number = elems.namedItem('phone_number').value;
    var password = elems.namedItem('password').value;
    //create XMLHttpRequest
    let ajaxRequest = new XMLHttpRequest();
    var data = {
        number: phone_number,
        token: password,
    };
    ajaxRequest.onreadystatechange = () => {
        if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
            console.log(ajaxRequest.getAllResponseHeaders());
            console.log('Response text: '+ ajaxRequest.responseText);
            //redirect to provider home page
            var res = JSON.parse(ajaxRequest.responseText);
            if ( res.result === 'success'){
                console.log('start redirecting');
                window.location.replace('/providerHome.html');
            }
        }
    };
    ajaxRequest.open('POST', 'http://127.0.0.1:5000/chores/api/v1.0/auth/provider/login', true);
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
