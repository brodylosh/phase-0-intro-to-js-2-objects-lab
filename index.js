// Write your solution in this file!
const employee = {
    name: "Brody",
    streetAddress: "123 Main St.",
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let newObj = {...employee}
    newObj[key] = value;
    return newObj;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    let newObj = {...employee};
    delete newObj[key];
    return newObj;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}