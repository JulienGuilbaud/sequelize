import sequelize from "./DATABASE/database.js";

try {
    await sequelize.authenticate();
    console.log('Connection avec la database réussie');
  } catch (error) {
    console.error('impossible de ce connecter a la database:', error);
  }