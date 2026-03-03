var Users = [];
function createUser(_a) {
    var name = _a.name, email = _a.email, isPaid = _a.isPaid;
    Users.push({ name: name, email: email, isPaid: isPaid });
}
var newUser = { name: 'Natan', email: 'natanbraslavsky1@gmail.com', isPaid: false };
createUser(newUser);
console.log(Users);
