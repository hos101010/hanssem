const connection = require('./connection');

const projects = {
    findAllProducts(){
        return connection.query(`select * from products;`);
    }
}

module.exports = projects;