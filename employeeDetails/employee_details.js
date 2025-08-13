const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "Javascript"},
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "Python" },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Java"},
      //... D'autres enregistrements d'employés peuvent être ajoutés ici
    ];

// Fonction pour afficher tous les employés
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join("");
        document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
alert(`Total des salaires : $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'aucun employé trouvé avec cet ID';
     }
 }

function findSpecialistJavascript(){
const foundJSEmployee = employees.find((employee) => employee.specialization === "Javascript")
if (foundJSEmployee) {
document.getElementById("employeesDetails").innerHTML = `<p>${foundJSEmployee.name} est spécialiste en ${foundJSEmployee.specialization}</p>`;
}
else {
document.getElementById("employeesDetails").innerHTML = "Aucun employé trouvé";

}

 }