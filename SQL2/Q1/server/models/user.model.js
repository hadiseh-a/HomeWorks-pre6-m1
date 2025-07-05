import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../db/connection.js";
import Post from "./post.model.js";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
});

export default User;

User.hasMany(Post, { foreignKey: { allowNull: false } });
Post.belongsTo(User);
