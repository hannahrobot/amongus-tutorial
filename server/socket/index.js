const gameRooms = {
  // [roomKey]: {
  // users: [],
  // randomTasks: [],
  // scores: [],
  // gameScore: 0,
  // players: {},
  // numPlayers: 0
  // }
};

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );
    socket.on("joinRoom", (roomKey) => {
      socket.join(roomKey);
    });

    socket.on("isKeyValid", function (input) {
      const keyArray = Object.keys(gameRooms)
        ? socket.emit("keyIsValid", input)
        : socket.emit("keyNotValid");
    });
    // get a random code for the room
    socket.on("getRoomCode", async function () {
      let key = codeGenerator();
      Object.keys(gameRooms).includes(key) ? (key = codeGenerator()) : key;
      gameRooms[key] = {
        roomKey: key,
        randomTasks: [],
        gameScore: 0,
        scores: {},
        players: {},
        numPlayers: 0,
      };
      socket.emit("roomCreated", key);
    });
  });
};

function codeGenerator() {
  let code = "";
  let chars = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
