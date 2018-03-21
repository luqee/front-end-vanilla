window.onload = () => {
    console.log('setting up client');
    const signUpButton = document.querySelector('input#sign_up_button');
    signUpButton.addEventListener('click', signupClient);
};
const signupClient = () => {
    let regCliForm = document.getElementById('client_signup');
    const elems = regProvForm.elements;
    var user_name = elems.namedItem('user_name').value;
    var phone_number = elems.namedItem('phone_number').value;
    var password = elems.namedItem('password').value;

    let ajaxRequest = new XMLHttpRequest();
    var data = {
        username: user_name,
        number: phone_number,
        token: password,
    };
    ajaxRequest.onreadystatechange = () => {
        if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
            //redirect to login page
            var res = JSON.parse(ajaxRequest.responseText);
            if ( res.result === 'success'){
                console.log('start redirecting');
                window.location.replace('/clientLogin.html');
            }
        }
    };
    ajaxRequest.open('POST', 'http://127.0.0.1:5000/chores/api/v1.0/auth/user/register', true);
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
