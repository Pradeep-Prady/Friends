const mongoose = require("mongoose");
const Pusher = require("pusher");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `Mongodb is connected to the host ${con.connection.host} this is Narikoootam`
      );
    })
    .catch((e) => {
      console.log("Failed to connect", e);
    });
};

const pusher = new Pusher({
  appId: "1649100",
  key: "063411480e1c559a7529",
  secret: "8640ab9c04d92c06f903",
  cluster: "ap2",
  useTLS: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db is connected");

  const chatCollection = db.collection("chats");
  const changeStream = chatCollection.watch();
  // console.log(changeStream)

  changeStream.on("change", (change) => {
    // console.log("change stream", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      console.log(messageDetails);
      pusher.trigger("messages", "inserted", {
        createdAt: messageDetails.createdAt,
        text: messageDetails.text,
        user: messageDetails.user,
        name: messageDetails.name,
        avatar: messageDetails.avatar

        // user_name: messageDetails.user
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

module.exports = connectDatabase;
