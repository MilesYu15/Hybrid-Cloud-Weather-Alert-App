# It is recommened to use same version as kafka broker is used.
# So no additional images are pulled.
FROM confluentinc/cp-enterprise-kafka:5.5.0

WORKDIR usr/bin

# Once it is executed, this container is not needed.
COPY create-kafka-topics.sh create-kafka-topics.sh
ENTRYPOINT ["bash","./create-kafka-topics.sh"]