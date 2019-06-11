import AWS from 'aws-sdk';

AWS.config.update({region: 'eu-west-1'})
AWS.config.loadFromPath('resources/credentials.json');
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

sqs.receiveMessage({QueueUrl: 'https://sqs.eu-west-1.amazonaws.com/552908040772/ExampleQueue-Part1'}, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

console.log('new change');