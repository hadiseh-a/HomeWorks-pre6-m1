import Member from "../model/member.model.js";

export const getAllFacultyMembers = async (req, res) => {
  try {
    const members = await Member.find({});
    res.status(200).json(members);
    Member.fi
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const addFacultyMember = async (req, res) => {
  try {
    const createdUser = await Member.create({ ...req.body });

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const deleteFacultyMember = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMember = await Member.findByIdAndDelete(id);
    res.status(200).json(deletedMember);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateFacultyMember = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedMember = await Member.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getOneMember = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const findedMember = await Member.findById(id);
    res.status(200).json(findedMember);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
