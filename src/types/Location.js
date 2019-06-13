export default class Location {
    constructor(location){
        this.x = location.x;
        this.y = location.y;
        this.id = location.id;
        this.events = [];
    }

    addEvent(eventToAdd){
        if (this.events.every(event => event.id !== eventToAdd.id)){
            this.events.push(eventToAdd);
        }
        //console.log(this.events);
    }
}