window.onload = () => {
    console.log('setting up provider form');
    let signUpButton = document.getElementById('sign_up_button');
    signUpButton.addEventListener('click', signupProvider);
};
const signupProvider = (event) => {
    // event.preventDefault();
    let regProvForm = document.getElementById('provider-reg-form');
    console.log('get form\'s elements');
    const elems = regProvForm.elements;
    var user_name = elems.namedItem('first_name').value;
    var phone_number = elems.namedItem('email_address').value;
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
