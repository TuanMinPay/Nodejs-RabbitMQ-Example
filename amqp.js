var amqp = require('amqplib/callback_api');

module.exports = {
    // connects to rabbitmq
    connect: (callback) => {
        amqp.connect('amqp://localhost', function (err, conn) {
            // this function will be called when the connection is created
            // `err` will contain the error object, if any errors occurred
            // `conn` will contain the connection object

            if (err != null) bail(err); // calls `bail` function if an error occurred when connecting
            callback(conn); // callback
        });
    },
    bail: (err) => {
        console.error(err);
        process.exit(1);
    },
    getQueue: () => "tasks"
}