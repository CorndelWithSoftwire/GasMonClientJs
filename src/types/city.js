import Runner from './Runner';
import Location from './Location';
import locations from '../../resources/locations';

export default class City {
    constructor() {
        this.runner = this.makeRunner();
        this.locations = this.makeLocations();
        this.events = [];
        this.startComparing();
    }
    

    makeRunner() {
        let runner = new Runner(event => this.events.push(event));
        runner.start();
        return runner;
    }


    makeLocations() {
        this.locationsArray = locations.map(location => {
            return new Location(location);
        })
    }


    eventCompare() {
        for (let i = 0; i < this.events.length; i++) {
            for (let j = 0; j < this.locationsArray.length; j++) {
                if (this.events[i].locationId === this.locationsArray[j].id) {
                    this.locationsArray[j].addEvent(this.events[i]);
                }
            }
        }
    }


    showEvents() {
        console.log(this.events);
    }


    startComparing() {
        setInterval(() => this.eventCompare(), 5000);
    }
}