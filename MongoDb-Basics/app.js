import mongoose, { Schema } from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ramsaloke117:ramsaloke1172024@cluster0.i8syc.mongodb.net/"
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create user model

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //create a new_document

    const newUser = await User.create({
      name: " User",
      email: "updated_user@gmail.com",
      age: 25,
      isActive: true,
      tags: ["developer"],
    });

    // or
    // const newUser = new User({
    //     name: " raj saloke",
    //     email: "rajsaloke44@gmail.com",
    //     age: 27,
    //     isActive: true,
    //     tags: ['developer , designer, manager'],
    // })
    // await newUser.save();

    console.log("created a new user", newUser);

    // const allUsers = await User.find({});
    // console.log(allUsers);

    // const gerUserOfActiveFasle = await User.find({isActive: true});
    // console.log(gerUserOfActiveFasle)

    // const maheshbabu = await User.findOne({name: "Mahesh babu"});
    // console.log(maheshbabu)

    // const getLastCreatedUserByUserId  = await User.findById()
    // console.log(getLastCreatedUserByUserId, 'getLastCreatedUserByUserId')

    //    const getSelectedFields = await User.find().select("name email -_id");
    //    console.log(getSelectedFields)

    // const sorted = await User.find().sort({age: -1})
    // console.log(sorted)
    //  const countDocuments = await User.countDocuments({isActive: true});
    //  console.log(countDocuments)

    // const deletedUser = await User.findByIdAndDelete(newUser._id)
    // console.log("deleted User" , deletedUser);

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }

    );

    console.log(updatedUser);
  } catch (e) {
    console.log("Error => ", e);
  } finally {
    await mongoose.connection.close(); // this code will always executes
  }
}

runQueryExamples(); // envoke compulsory
