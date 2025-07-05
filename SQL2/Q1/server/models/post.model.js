import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../db/connection.js";

const Post = sequelize.define("post", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  content: {
    type: DataTypes.STRING,
  },
});

export default Post;
