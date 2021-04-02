// Your code here
function createEmployeeRecord(testEmployee) {
    let record = {
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: testEmployee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record
}

function createEmployeeRecords(records) {
    return records.map(createEmployeeRecord)
}

function createTimeInEvent(record, dateStamp) {
    const dateStamps = dateStamp.split(" ")
    record.timeInEvents.push({
        type: "TimeIn",
        date: dateStamps[0],
        hour: parseInt(dateStamps[1])
    })
    return record
}

function createTimeOutEvent(record, dateStamp) {
    const dateStamps = dateStamp.split(" ")
    record.timeOutEvents.push({
        type: "TimeOut",
        date: dateStamps[0],
        hour: parseInt(dateStamps[1])
    })
    return record
}