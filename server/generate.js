var faker = require('faker');

var database = { userlist: []};

for (var i = 1; i<= 30; i++) {
  database.userlist.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
  });
}

console.log(JSON.stringify(database));