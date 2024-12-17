fetch("./data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        Object.keys(data).forEach(department => {
            const departmentData = data[department];
            displayEmployees(department, departmentData);
        });
        console.log(data); // To verify the data is being loaded correctly
    });


function displayEmployees(department, employees) {

    const departmentId = department.toLowerCase().replace(/\s+/g, '-');  // Convert spaces to hyphens

    const employeeSection = document.getElementById(`employees-${departmentId}`);

    if (employeeSection) {

        const employeesList = document.createElement("div");
        employeesList.className = "employees-list";
        employeeSection.appendChild(employeesList);


        employees.forEach((employee) => {
            const employeeCard = document.createElement("div");
            employeeCard.className = "employee-card";
            employeesList.appendChild(employeeCard);

            const employeeFigure = document.createElement("figure");
            employeeFigure.className = "employee-figure";
            employeeCard.appendChild(employeeFigure);

            const employeeImage = document.createElement("img");
            employeeImage.className = "employee-image";
            employeeFigure.appendChild(employeeImage);

            employeeImage.src = employee.image || "https://via.placeholder.com/150";

            const employeeInfo = document.createElement("div");
            employeeInfo.className = "employee-info";
            employeeCard.appendChild(employeeInfo);

            const employeeName = document.createElement("h3");
            employeeName.className = "employee-name";
            employeeInfo.appendChild(employeeName);
            employeeName.textContent = employee.name;

            const employeeTitle = document.createElement("p");
            employeeTitle.className = "employee-title";
            employeeInfo.appendChild(employeeTitle);
            employeeTitle.textContent = employee.title;

            const employeeEmail = document.createElement("p");
            employeeEmail.className = "employee-email";
            employeeInfo.appendChild(employeeEmail);
            employeeEmail.textContent = employee.email;
        });
        
    } else {
        console.warn(`Section for department '${department}' not found.`);
    }
}


// Updates price range value when slider is dragged 
const slider = document.getElementById("gift-price")
const output = document.getElementById("price-value")

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}