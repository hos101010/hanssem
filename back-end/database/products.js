const connection = require('./connection');

const projects = {
  findAllProducts() {
    return connection.query('select * from products;');
  },
  findProductsByCondition(condition) {
    let colorStatement = '';
    if (condition.color) colorStatement = `and (color = '${condition.color}')`;

    return connection.query(`select * from products
        where (price >= ${condition.price[0]}) and (price <= ${condition.price[1]})
        and (size_x >= ${condition.xSize[0]}) and (size_x <= ${condition.xSize[1]})  
        and (size_y >= ${condition.ySize[0]}) and (size_y <= ${condition.ySize[1]})      
        ${colorStatement}
        ;`);
  },
};

module.exports = projects;
