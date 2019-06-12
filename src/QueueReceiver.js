import AWS from 'aws-sdk';

export default class QueueReceiver {
    constructor(queueUrl) {
      AWS.config.update({ region: 'eu-west-1' })
      AWS.config.loadFromPath('resources/credentials.json');
      this.sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
      this.queueUrl = queueUrl
      this.messages = [];
    }
  
    // Return a promise containing the top message and delete that from the queue.
    receive() {
  
      const receiveParams = {
        QueueUrl: this.queueUrl
      }

      const prom = new Promise((resolve, reject) => {
        this.sqs.receiveMessage(receiveParams, (err, response) => {
            if (err) {
              console.log("Error receiving message", err);
              reject(err);
            } else {
              
              const data = response.Messages[0]
              const message = JSON.parse(JSON.parse(data.Body).Message);
    
              const deleteParams = {
                ...receiveParams,
                ReceiptHandle: data.ReceiptHandle
              }
              this.sqs.deleteMessage(deleteParams, (err) => {
                if (err) {
                  console.log("Error deleting message", err)
                  reject(err);
                } else {
                  resolve(message);
                }
              })
      
            }
          });
      });

      return prom;
    }
  }