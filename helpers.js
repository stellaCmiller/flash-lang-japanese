//Calculates the number of hours between two date objects
export function hoursBetween(date1, date2){
    let result = (date1.getTime() - date2.getTime())/1000/60/60
    return result;
}

//Returns the number of hours until the card is due for study
//Return of 0 means the card is due for study immediately
export function dueForStudy(SRS, lastStudied){
    let now = new Date();
    let lastStudy = new Date(lastStudied);
    let hoursElapsed = hoursBetween(now, lastStudy);
    switch(SRS){
        case 1: return 0;
        case 2: return (hoursElapsed > 3 ? 0 : (3 - hoursElapsed)); 
        case 3: return (hoursElapsed > 12 ? 0 : (12 - hoursElapsed));
        case 4: return (hoursElapsed > 72 ? 0 : (72 - hoursElapsed)); // 3 days
        case 5: return (hoursElapsed > 168 ? 0 : (168 - hoursElapsed)); // 1 week
        case 6: return (hoursElapsed > 504 ? 0 : (504 - hoursElapsed)); // 3 weeks
        case 7: return (hoursElapsed > 1008 ? 0 : (1008 - hoursElapsed)); // 1.5 months
        case 8: return (hoursElapsed > 2016 ? 0 : (2016 - hoursElapsed)); // 3 months
    }
}

// Returns a random permutation of a given array in O(n) time
export function fisherYatesShuffle(arr){
    let currentIndex = arr.length, randIndex, temp;
        while (currentIndex !==0){
            randIndex = Math.floor(Math.random()*currentIndex);
            currentIndex--; //must occur before shift
            temp = arr[currentIndex];
            arr[currentIndex] = arr[randIndex];
            arr[randIndex] = temp;
        }
    return arr;
}
