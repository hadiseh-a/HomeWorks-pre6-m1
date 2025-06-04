import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  exp: Number,
  type: String,
  qualification: String,
});

const Member = mongoose.model("Member", MemberSchema);

export default Member;
