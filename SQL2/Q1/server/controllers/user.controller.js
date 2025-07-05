import { where } from "sequelize";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createUser = async (request, response) => {
  try {
    const { body } = request;
    const user = await User.create(body);
    response.status(201).send(user);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const createPostForUser = async (request, response) => {
  try {
    const {
      params: { userId },
      body,
    } = request;
    const user = await User.findByPk(userId);
    if (user) {
      // way 1: with userId in body
      // if (body.userId) {
      //   const newPost = await Post.create(body);
      //   response.status(201).send(newPost);
      // }
      // response.status(400).json({ error: "userId is required" });
      //way 2: without userId in body
      const newPost = await Post.create({ userId: userId, ...body });
      response.status(201).send(newPost);
    }
    response.status(404).json({ error: "user not found" });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    response.status(200).send(users);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const getAllPostsForUser = async (request, response) => {
  try {
    const {
      params: { userId },
    } = request;
    const user = await User.findByPk(userId);
    console.log(request.params);

    if (!user) response.status(404).json({ error: "user not found" });
    const userPosts = await Post.findAll({
      attributes: ["id", "title", "content"],
      include: User,
      where: { userId: userId },
    });
    response.status(200).send(userPosts);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const updateUser = async (request, response) => {
  try {
    const {
      params: { id },
      body,
    } = request;
    const isExistUser = await User.findByPk(id);
    if (isExistUser) {
      const updatedUser = await isExistUser.update(body);
      response.status(200).send(updatedUser);
    }
    response.status(404).json({ error: "there is no user with this id" });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    const {
      params: { id },
    } = request;
    const isExistUser = await User.findByPk(id);
    if (isExistUser) {
      await isExistUser.destroy();
      response.sendStatus(204);
    }
    response.status(500).json({ error: "user not found" });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};
