const { connect, getQueue } = require('./amqp');

// connects to rabbitmq
connect(publisher);

// Publisher
function publisher(conn) {
    const q = getQueue();
    conn.createChannel(on_open); // creates a channel and call `on_open` when done
    function on_open(err, ch) {
        console.log("Publisher connected");
        // this function will be called when the channel is created
        // `err` will contain the error object, if any errors occurred
        // `ch` will contain the channel object

        if (err != null) bail(err); // calls `bail` function if an error occurred when creating the channel
        ch.assertQueue(q); // asserts the queue exists
        ch.sendToQueue(q, new Buffer.from('Hello World!')); // sends a message to the queue
        console.log("[x] Sent 'Hello World!'"); // writes a message to the console
    }
}