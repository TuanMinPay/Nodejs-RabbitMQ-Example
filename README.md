# Nodejs-RabbitMQ-Example
Nodejs + RabbitMQ Example

##### Run the following command to start RabbitMQ using Docker:
```bash
docker run --name rabbitmq -p 5672:5672 rabbitmq
```
Docker will create a RabbitMQ server from the RabbitMQ image with default port 5672.


##### Run the following command to install the dependencies:
```bash
npm install
```

##### Run the following command to start the publisher:
```bash
node publisher.js
```

##### Run the following command to start the consumer:
```bash
node consumer.js
```

# Done!