import AWS from 'aws-sdk';

export default class QueueReceiver {
    constructor() {
      AWS.config.update({ region: 'eu-west-1' })
      AWS.config.loadFromPath('resources/credentials.json');
      this.sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
      this.queueUrl = '<Your-Queue-URL>'
    }
  
  
    receive() {
  
      const receiveParams = {
        QueueUrl: this.queueUrl
      }
  
  
      this.sqs.receiveMessage(receiveParams, (err, response) => {
        if (err) {
          console.log("Error", err);
        } else {
          
          const data = response.Messages[0]
          const message = JSON.parse(JSON.parse(data.Body).Message);
          const keys = Object.keys(message);
          for (let i = 0; i <= keys.length; i++) {
            console.log(`Key: ${keys[i]} Value: ${message[keys[i]]}\n`);
          }
          const deleteParams = {
            ...receiveParams,
            ReceiptHandle: data.ReceiptHandle
          }
          this.sqs.deleteMessage(deleteParams, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              console.log('deleted successfully!');
            }
          })
  
        }
      });
  
      console.log('new change');
    }
  }