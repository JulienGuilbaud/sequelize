import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";
import User from "./user.js";
import Contact from "./contact.js";

class Exchange extends Model {}

Exchange.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  contact_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Contact,
      key: 'id'
    }
  },

  content: {
    type: DataTypes.STRING(255)
  }
}, {
  sequelize,
  modelName: 'Exchange',
  tableName: 'exchange'
});

export default Exchange;
