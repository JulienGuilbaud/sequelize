import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";
import Groupe from "./groupe.js";

class User extends Model {}

User.init({

  lastname: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  groupe_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Groupe,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'user'
});

export default User;