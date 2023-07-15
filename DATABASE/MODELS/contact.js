import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";

class Contact extends Model {}

Contact.init({

  title: {
    type: DataTypes.STRING(10)
  },
  firstname: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  work_phone: {
    type: DataTypes.STRING(20)
  },
  cellphone: {
    type: DataTypes.STRING(20)
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  networks: {
    type: DataTypes.STRING(255)
  },
  poste_fonction: {
    type: DataTypes.STRING(40)
  },
  address: {
    type: DataTypes.STRING(255)
  },
  personal_data: {
    type: DataTypes.STRING(255)
  },
  actif: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: 'Contact',
  tableName: 'contact'
});

export default Contact;