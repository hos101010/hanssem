module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    prod_id: {
      type: Sequelize.STRING,
    },
    prod_name: {
      type: Sequelize.STRING,
    },
    size_x: {
      type: Sequelize.DOUBLE,
    },
    size_y: {
      type: Sequelize.DOUBLE,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('products'),
};
