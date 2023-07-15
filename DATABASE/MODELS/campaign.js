import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";
import User from "./user.js";
import Tier from "./tier.js";

class Campaign extends Model {}

Campaign.init({

  name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255)
  },
  type: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  message: {
    type: DataTypes.STRING(255)
  },
  tier_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tier,
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Campaign',
  tableName: 'campaign'
});

export default Campaign ;
