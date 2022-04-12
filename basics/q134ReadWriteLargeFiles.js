const { createReadStream, createWriteStream } = require("fs");

const source = createReadStream("./basics/bigFile.txt", {
  encoding: "utf8",
  highWaterMark: 256,
});
const destination = createWriteStream("./basics/bigFileCopy.txt");

source.on("data", (chunk) => {
  console.log(chunk);
  console.log("-".repeat(50));
  destination.write(chunk);
});

source.on("end", () => {
  console.log("end");
  destination.end();
});

source.on("error", (err) => {
  console.log(err);
});

destination.on("finish", () => {
  console.log("finish");
});
