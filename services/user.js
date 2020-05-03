const bcrypt = require('bcrypt');
const users = [
    { id: 1, email: 'thh.it99@gmail.com', displayName: 'Huy Hoang', password: '$2b$10$ypm2JRdLaXspvUGJbhIW1OwHAkp4ABxQnHWo9KSAbGtYv/dDButsW' },
    { id: 2, email: 'thh.it00@gmail.com', displayName: 'Hoang Huy', password: '$2b$10$4JJ0QatMDNVIZq.1Aa8CX.9FphH8E36DM.kgU.fEUzGea3PsB8isa' },
];


function findUserById(id) {
    return users.find(u => u.id === id);
}

function findUserByEmail(email) {
    return users.find(u => u.email === email);

}

function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

function verifyPassword(password, passwordHash) {
    return bcrypt.compareSync(password, passwordHash);
}
module.exports = {
    findUserById,
    findUserByEmail,
    hashPassword,
    verifyPassword,
}