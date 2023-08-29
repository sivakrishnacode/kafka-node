import Kafka from "node-rdkafka";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  {
    topic: "quickstart-events",
  }
);

stream.on("error", (err) => {
  console.error("Error in our kafka stream");
  console.error(err);
});

function queueRandomMessage() {
  const success = stream.write("Helloo")
  if (success) {
    console.log(`Message Sended`);
  } else {
    console.log("Too many messages in the queue already..");
  }
}

setInterval(() => {
  queueRandomMessage();
}, 3000);
