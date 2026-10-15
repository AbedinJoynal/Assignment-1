// question 1

function describeValue(value) {
    return `"${typeof value} | ${value ? 'truthy' : 'falsy'}"`;
}
// console.log(describeValue(''));

// question 2

function getDayType(day) {
    const findDays = String(day). toLowerCase()
    switch (true){
        case findDays === "friday" || findDays === "saturday" :
            return "Weekend"
        case ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(findDays):
            return "Working Day"
        default :
            return "Invalid Day"
    }
}
 // console.log(getDayType('tuesday'));

// question 3

function validateUsername (username) {
    const name = username.toLowerCase()
    if (name.includes("admin")){
        return "Reserved Word"
    }
switch (true){
    case name.length < 4 :
        return "Too Short"
    case name.includes(" "):
        return "No Space allowed"
    default :
        return "Available"

}
}

// console.log(validateUsername('suu'))

// question 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let totalfare = 50
     if (distance > 2){
         let extrakim = distance - 2
         totalfare = totalfare + (extrakim * 15)
     }
     totalfare = totalfare + waitingMinutes * 2
    if (isNight) {
        totalfare = totalfare * 1.2
    }
    return totalfare
}

// console.log(getCngFare(5, true, 10))

// question 5

 const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
     if (runsNeeded <= 0){
         return "Won"
     }
     if (ballsLeft <= 0){
         return "Lost"
     }
     let requiredRate = (runsNeeded / ballsLeft) * 6
     let verdict = "";
     if (requiredRate <= 6) {
         verdict = "Comfortable"
     }
     else if (requiredRate <= 12) {
        verdict = "Tough"
     }
     else {
         verdict = "Almost Impossible"
     }
     return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
 }

 console.log(getChaseVerdict(150, 149, 1))