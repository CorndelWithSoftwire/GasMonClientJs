export default class Location {
    constructor(location) {
        this.x = location.x;
        this.y = location.y;
        this.id = location.id;
        this.average = 0;
        this.valueArray = [];
    }




    addEvent(eventToAdd) {

        this.valueArray.push(eventToAdd.id)
        this.average = averageCal(valueArray);
    }

    averageCal(arr) {
        let sum,
         avg;
     for (let i = 0; i <=arr.length; i++) {
          sum+=i
 
     }
     avg = sum/arr.length;
     console.log('this is the average', average);
     console.log('this is the sum', sum);
     return avg;
    }
     
};

    





