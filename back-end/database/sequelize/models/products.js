module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    prod_name: DataTypes.STRING,
    size_x: DataTypes.DOUBLE,
    size_y: DataTypes.DOUBLE,
    price: DataTypes.BIGINT,
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  });
  return products;
};
