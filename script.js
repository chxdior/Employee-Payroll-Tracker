// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];

  let addEmployee = true;
  while (addEmployee) {
    const firstName = prompt('Enter the first name of the employee:');
    const lastName = prompt('Enter the last name of the employee:');
    const salary = parseFloat(prompt('Enter the salary of the employee:'));

    // Validate input
    if (!firstName || !lastName || isNaN(salary) || salary <= 0) {
      alert('Please enter valid employee data.');
      continue;
    }

    employeesArray.push({ firstName, lastName, salary });

    const continueAdding = confirm('Do you want to add another employee?');
    if (!continueAdding) {
      addEmployee = false;
    }
  }

  return employeesArray;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  // Check if the array is empty
  if (employeesArray.length === 0) {
    alert('No employees found.');
    return;
  }

  // Calculate total salary
  let totalSalary = 0;
  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });

  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display the average salary
  alert(`Average Salary: $${averageSalary.toLocaleString()}`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Check if the array is empty
  if (employeesArray.length === 0) {
    alert('No employees found.');
    return;
  }
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Retrieve the random employee object
  const randomEmployee = employeesArray[randomIndex];

  // Display the random employee details
  alert(`Random Employee:\n\nFirst Name: ${randomEmployee.firstName}\nLast Name: ${randomEmployee.lastName}\nSalary: $${randomEmployee.salary.toLocaleString()}`);
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
