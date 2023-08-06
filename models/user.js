//This model creates a schema for our users that register themselves into the app.

const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
//pulling in the actual instance itself over sequelize so we can modify it
//in example creating a new class with the model type

class User extends Model {}

//set up the modification in JSON format for SQL db to use taking in objects
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    //these next two are added code to take in timestamps on users both created/updated
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  //original second object code
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    // timestamps: true,
    //commenting out timestamps here because it is redundant. I have already included timestamp fields in the first object
    freezeTableName: true,
    defaultScope: {
      attributes: { exclude: ["password"] }, //this will cause queries to exclude passwords. meaning searching won't show personal info
    },
    scopes: { //this expands the scope to work only with objects that have a password
      withPassword: {
        attributes: {},
      },
    },
  }
);

module.exports = User;
