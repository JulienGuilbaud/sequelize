import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";
import Authorisation from "./authorisation.js";

class Groupe extends Model {}

Groupe.init({

  fonction: {
    type: DataTypes.STRING(40),
    unique: true
  },
  authorisation_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Authorisation,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Groupe',
  tableName: 'groupe'
})

export default Groupe;