const catchAsyncError = require("../middlewares/catchAsyncError");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

const ErrorHandler = require("../utils/errorHandler");

exports.getChats = catchAsyncError(async (req, res, next) => {
  const gang_chats = await Chat.find().populate("user", "name avatar");

  try {
    for (const chat of gang_chats) {
      if (!chat) {
        return next(new ErrorHandler("User not found", 404));
      }

      // let id = chat.user;
      // const user = await User.findById(id);
      // chat.name = user.name;
      // chat.avatar = user.avatar;
      // console.log(chat)
      
    }

    // Rest of your code here
  } catch (error) {
    // Handle the error
    next(error);
  }

  res.status(200).json({
    success: true,
    gang_chats,
  });
});

exports.getChat = catchAsyncError(async (req, res, next) => {
  const chat = await Chat.findById(req.params.id);

  if (!chat) {
    return next(new ErrorHandler("User not found", 404));
  }

  let id = chat.user;
  const user = await User.findById(id);
  chat.name = user.name;
  chat.avatar = user.avatar;

  res.status(200).json({
    success: true,
    chat,
  });
});

exports.createChat = catchAsyncError(async (req, res, next) => {
  //   const {text } = req.body ;

  let images = [];

  let BASE_URL = process.env.BACKEND_URL;

  if (process.env.NODE_ENV === "production") {
    BASE_URL = `${req.protocol}://${req.get("host")}`;
  }

  if (req.files && req.files.length > 0) {
    req.files.forEach((file) => {
      let url = `${BASE_URL}/uploads/chats/${file.originalname}`;
      images.push({ image: url });
    });
  }

  req.body.images = images;

  req.body.user = req.user.id;

  const chat = await Chat.create(req.body);

  const chats = await Chat.find();

  try {
    for (const chat of chats) {
      if (!chat) {
        return next(new ErrorHandler("User not found", 404));
      }

      let id = chat.user;
      const user = await User.findById(id);
      chat.name = user.name;
      chat.avatar = user.avatar;
    }

    // Rest of your code here
  } catch (error) {
    // Handle the error
    next(error);
  }

  res.status(201).json({
    success: true,
    chats,
  });
});
