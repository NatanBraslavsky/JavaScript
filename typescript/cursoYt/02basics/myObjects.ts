type User = {
    name: string
    email?: string
    isActive?: boolean
    isPaid?: boolean
}

const Users: User[] = []

function createUser({name, email, isPaid}: {name: string, email: string, isPaid: boolean}) {
    Users.push({name, email, isPaid})
}

let newUser1 = {name: 'Natan', email: 'natanbraslavsky1@gmail.com', isPaid: false}
let newUser2 = {name: 'Davi', email: 'davibraslavsky@gmail.com', isPaid: true}
createUser(newUser1)
createUser(newUser2)

console.log(Users)