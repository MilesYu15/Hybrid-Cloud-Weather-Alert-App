#!/bin/bash

# Simply wait until original kafka container and zookeeper are started.
sleep 240.0s
# Parse string of kafka topics into an array
# https://stackoverflow.com/a/10586169/4587961
kafkatopicsArrayString="$KAFKA_TOPICS"
IFS=' ' read -r -a kafkaTopicsArray <<< "$kafkatopicsArrayString"

# A separate variable for zookeeper hosts.
zookeeperHostsValue=$ZOOKEEPER_HOSTS

# Create kafka topic for each topic item from split array of topics.
for newTopic in "${kafkaTopicsArray[@]}"; do
  # https://kafka.apache.org/quickstart
  kafka-topics --create --topic "$newTopic" --partitions 3 --replication-factor 2   --if-not-exists --zookeeper "$zookeeperHostsValue"
done