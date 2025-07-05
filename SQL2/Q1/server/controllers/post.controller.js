import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPost = async (request, response) => {
  try {
    const { body } = request;
    if (!body.userId)
      response.status(400).json({ error: "userId is required!" });
    const createdPost = await Post.create(body);
    response.status(201).send(createdPost);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const getAllPosts = async (request, response) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id","title","content"],
      include: User,
    });
    response.status(200).send(posts);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const updatePost = async (request, response) => {
  try {
    const {
      params: { id },
      body,
    } = request;
    const isExistPost = await Post.findByPk(id);
    if (!isExistPost) response.status(404).json({ error: "there is no post" });
    const updatedPost = await isExistPost.update(body);
    response.status(200).send(updatedPost);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

export const deletePost = async (request, response) => {
  try {
    const {
      params: { id },
    } = request;
    const isExistPost = await Post.findByPk(id);
    if (!isExistPost) response.status(404).json({ error: "there is no post" });
    await isExistPost.destroy();
    response.sendStatus(204);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};
