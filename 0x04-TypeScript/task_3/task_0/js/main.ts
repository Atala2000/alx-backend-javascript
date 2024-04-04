interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: "John",
    lastName: "Mark",
    age: 34,
    location: "New York",
};

let student2:Student = {
    firstName: "Jesse",
    lastName: "Max",
    age: 43,
    location: "Nairobi",
};

const studentsList: Student[] = [student1, student2];

const renderTable = () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
  
    studentsList.forEach(student => {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = student.firstName;
      row.insertCell(1).textContent = student.location;
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  };

renderTable();

