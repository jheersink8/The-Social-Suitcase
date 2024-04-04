const { User } = require('../models');

// Seed User Data
const userData = [
    { "first_name": "Leo", "last_name": "Smith", "email": "brave.panther@example.com", "password": "P@ssw0rd1" },
    { "first_name": "Eva", "last_name": "Johnson", "email": "crazy.dragon@example.com", "password": "SecurePass2" },
    { "first_name": "Max", "last_name": "Williams", "email": "fierce.tiger@example.com", "password": "StrongPwd3" },
    { "first_name": "Olivia", "last_name": "Brown", "email": "gentle.bear@example.com", "password": "Secret1234" },
    { "first_name": "Liam", "last_name": "Jones", "email": "happy.owl@example.com", "password": "Passw0rd!" },
    { "first_name": "Emma", "last_name": "Garcia", "email": "kind.wolf@example.com", "password": "Password123" },
    { "first_name": "Noah", "last_name": "Martinez", "email": "lucky.fox@example.com", "password": "SecurePwd7" },
    { "first_name": "Isabella", "last_name": "Hernandez", "email": "mystic.phoenix@example.com", "password": "P@ssw0rd8" },
    { "first_name": "James", "last_name": "Young", "email": "powerful.lion@example.com", "password": "SecretPwd9" },
    { "first_name": "Sophia", "last_name": "King", "email": "swift.hawk@example.com", "password": "StrongPass10" },
    { "first_name": "Mason", "last_name": "Perez", "email": "tiny.bunny@example.com", "password": "P@ssw0rd11" },
    { "first_name": "Ava", "last_name": "Gonzalez", "email": "wise.owl@example.com", "password": "Secure123" },
    { "first_name": "William", "last_name": "Wilson", "email": "zealous.wolf@example.com", "password": "Pwd1234!!" },
    { "first_name": "Benjamin", "last_name": "Moore", "email": "brave.lion@example.com", "password": "SecretPass!" },
    { "first_name": "Charlotte", "last_name": "Lee", "email": "daring.dragon@example.com", "password": "SecurePass15" },
    { "first_name": "Amelia", "last_name": "Anderson", "email": "fearless.panther@example.com", "password": "P@ssword16" },
    { "first_name": "Elijah", "last_name": "Thomas", "email": "graceful.unicorn@example.com", "password": "StrongPwd17" },
    { "first_name": "Evelyn", "last_name": "White", "email": "jolly.llama@example.com", "password": "Secret123" },
    { "first_name": "Michael", "last_name": "Taylor", "email": "magical.pixie@example.com", "password": "Passw0rd19" },
    { "first_name": "Harper", "last_name": "Green", "email": "noble.elephant@example.com", "password": "Password!" }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;