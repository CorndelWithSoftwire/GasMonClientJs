import QueueReceiver from '../QueueReceiver';
import config from '../../resources/config'

export default class Runner {
    constructor(callback){
        this.callback = callback;
        this.queueReceiver = new QueueReceiver(config.queueUrl)
    }

    start(){
        setInterval(() => this.queueReceiver.receive().then(event => this.callback(event)), 2000);
    }

}