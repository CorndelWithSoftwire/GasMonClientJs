import QueueReceiver from './QueueReceiver';
import config from '../resources/config';

const queueReceiver = new QueueReceiver(config.queueUrl);
queueReceiver.receive().then((message) => console.log(message));