import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";
import User from "./user.js";

class Tier extends Model {}

Tier.init({

  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  country: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  website: {
    type: DataTypes.STRING(255)
  },
  category: {
    type: DataTypes.STRING(30)
  },
  social_reason: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  networks: {
    type: DataTypes.STRING(255)
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  siren: {
    type: DataTypes.STRING(10),
    unique: true
  },
  siret: {
    type: DataTypes.STRING(20),
    unique: true
  },
  naf: {
    type: DataTypes.STRING(40)
  },
  vat: {
    type: DataTypes.STRING(40)
  },
  commercial_register: {
    type: DataTypes.STRING(255)
  },
  staff: {
    type: DataTypes.INTEGER
  },
  judicial_status: {
    type: DataTypes.STRING(40)
  },
  actif: {
    type: DataTypes.BOOLEAN
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
  modelName: 'Tier',
  tableName: 'tier'
});

export default Tier;
