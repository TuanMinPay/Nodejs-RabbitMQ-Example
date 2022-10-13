const { connect, getQueue } = require('./amqp');

// connects to rabbitmq
connect(consumer);

// Consumer
function consumer(conn) {
    const q = getQueue();
    conn.createChannel(on_open); // creates a channel and call `on_open` when done
    function on_open(err, ch) {
        console.log("Consumer connected");
        // this function will be called when the channel is created
        // `err` will contain the error object, if any errors occurred
        // `ch` will contain the channel object

        if (err != null) bail(err); // calls `bail` function if an error occurred when creating the channel
        ch.assertQueue(q); // asserts the queue exists
        ch.consume(q, function(msg) { //consumes the queue
            if (msg !== null) {
                console.log(msg.content.toString()); // writes the received message to the console
                ch.ack(msg); // acknowledge that the message was received
            }
        });
    }
}