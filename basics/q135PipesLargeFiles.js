const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream");
const { createGzip } = require("zlib");

const gzip = createGzip();

const source = createReadStream("./basics/bigFile.txt", { encoding: "utf8" });
const destination = createWriteStream("./basics/bigFile.gz");

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("end");
  }
});
