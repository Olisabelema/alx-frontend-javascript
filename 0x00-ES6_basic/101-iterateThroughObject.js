export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const department in reportWithIterator.allEmployees) {
      employeeNames += reportWithIterator.allEmployees[department].join(' | ') + ' | ';
  }

  // Remove the trailing ' | ' at the end
  employeeNames = employeeNames.slice(0, -3);

  return employeeNames;
}

