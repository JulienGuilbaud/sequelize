import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";

class Authorisation extends Model {}

Authorisation.init({

  make: {
    type: DataTypes.BOOLEAN
  },
  edit: {
    type: DataTypes.BOOLEAN
  },
  suppress: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: 'Authorisation',
  tableName: 'authorisation'
})

export default Authorisation;