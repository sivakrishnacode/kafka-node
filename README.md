# kafka-node for local setup

- dependency
java - only for local
node-rdkafka - for establishing connection to kafka server
avsc - for serialize & deserialize

- setup & zookeeper init
tar -xzf kafka_2.13-3.5.0.tgz
cd kafka_2.13-3.5.0/
bin/zookeeper-server-start.sh config/zookeeper.properties


-kafka server init
bin/kafka-server-start.sh config/server.properties

- init producer
bin/kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092

- topic create
bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092


- init consumer
bin/kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092
