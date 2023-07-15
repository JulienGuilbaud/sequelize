import { Sequelize } from "sequelize";

const sequelize = new Sequelize('ufo', 'ufo', 'ufo', {
    host: 'localhost',
    dialect:'postgres',
    define: {
        underscored: true,
      }
  });

  export default sequelize;