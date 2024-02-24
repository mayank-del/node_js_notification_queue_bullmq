const { Worker } = require("bullmq");

// Provide the connection options here
const connectionOptions = {
  connection: {
    host: 'localhost', // Change this to your Redis host
    port: 6379, // Change this to your Redis port
  },
};

const worker = new Worker("mailing-q", async (job) => {
  console.log("Recv id:", job.id);
  console.log("Processing msgs.");
  console.log(job.data);
  await send();
  console.log("Messages sent.");
}, connectionOptions);
