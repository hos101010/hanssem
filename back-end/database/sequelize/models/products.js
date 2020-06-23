module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    prod_name: DataTypes.STRING,
    size_x: DataTypes.DOUBLE,
    size_y: DataTypes.DOUBLE,
    price: DataTypes.BIGINT,
    img: DataTypes.STRING,
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  });
  return products;
};
