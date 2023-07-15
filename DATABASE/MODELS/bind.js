import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";
import Tier from "./tier.js";
import Contact from "./contact.js";

class Bind extends Model {}

Bind.init({
  tier_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tier,
      key: 'id'
    }
  },
  contact_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Contact,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Bind',
  tableName: 'bind'
});

export default Bind;