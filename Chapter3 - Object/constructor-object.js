var user = {
    username: 'minhnguyen',
    gender: 'male',
    age: 21,
    viewInfo: function () {
        console.log(this.username + ' ' + this.gender + ' ' + this.age);
    },
    location: {
        latitude: 0.002,
        longitude: 0.49
    }
}

function viewInfo(params) {
    console.log(params.username + ' ' + params.gender + ' ' + params.age);
}

// viewInfo(user);

user.viewInfo();

viewInfo({ username: 'nguyen', gender: 'male', age: 22 });

//truy cập thành phần của object
var a = 'username';

console.log(user[a]);


//first-class function
var viewFunc = function (u) {
    console.log(u.username + ' ' + u.gender + ' ' + u.age);
    return true;
}

console.log(typeof viewFunc);

viewFunc.version = {
    versionname: 'version',
    number: 0.2
}

console.log(function () {
    console.log('I\'m a function');
});
