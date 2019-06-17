import Runner from './Runner';
import Location from './Location';
import locations from '../../resources/locations';

export default class City {
    constructor() {
        this.runner = this.makeRunner();
        this.locations = this.getLocations();
        this.events = [];
        this.startComparing();
    }

    makeRunner() {
        let runner = new Runner(event => this.events.push(event));
        runner.start();
        return runner;
    }

    getLocations() {
        return locations.map(location => new Location(location));
    }

    showEvents() {
        console.log(this.events);
    }


    compareLocations() {
        let locationSet = new Set(locations.map(l => l.id));
        let eventLocationsId = (this.locations.map(e => e.id));

        for (let location of eventLocationsId){
            if(locationSet.has(location)){
                Location.addEvent(location);
            }     
        }

        // const eventsToCheck = this.events.slice(0)
        // this.events = [];
        // eventsToCheck.forEach(event => {
        //     let matchedLocation = this.locations.find(location => location.id === event.locationId)
            
        //     if (matchedLocation) {
        //         console.log(matchedLocation)
        //         matchedLocation.addEvent(event)
        //     } else {
        //         console.log('Event was found that did not match a location');
        //     }
        // });

    }

    startComparing() {
        setInterval(() => this.compareLocations(), 5000);
    }
}