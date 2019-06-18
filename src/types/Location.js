export default class Location {
    constructor(location) {
        this.x = location.x;
        this.y = location.y;
        this.id = location.id;
        this.name = location.name;
        this.average = 0;
        this.valueArray = [];
    }


    addEvent(eventToAdd) {
        if (!this.valueArray.includes(eventToAdd.value)) {
            this.valueArray.push(eventToAdd.value)
            this.average = this.averageCal(this.valueArray);
        }
    }


    averageCal(arr) {
        let sum = 0;
        let avg = 0;

        for (let i = 0; i <= arr.length; i++) {
            if (arr[i]) {
                sum += arr[i];
            }
        }

        avg = sum / arr.length;
        avg = avg * 1000
        avg = Math.floor(avg) / 1000;

        console.log(`\nLocation: ${this.name} [${this.id}]`);
        console.log('Average: ', avg);
        console.log(`There ha${this.valueArray.length > 1 ? 've': 's'} been ${this.valueArray.length} reading${this.valueArray.length > 1 ? 's': ''} from this location.`);

        return avg;
    }

};







