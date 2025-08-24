// models/Message.js
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

const Message = sequelize.define(
  "Message",
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sender: {
      type: DataTypes.ENUM("user", "ai"), // user or ai
      allowNull: false,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

sequelize.sync({ alter: true });

module.exports = Message;
