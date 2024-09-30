// Get references to DOM elements
const studentNameInput = document.getElementById('studentName');
const studentIdInput = document.getElementById('studentId');
const   
 emailIdInput = document.getElementById('emailId');
const contactNoInput = document.getElementById('contactNo');
const registrationForm = document.getElementById('registrationForm');
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

// Load student data from local storage (if any)
let studentData = JSON.parse(localStorage.getItem('studentData')) || [];
renderStudentTable();

// Handle form submission
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const studentName = studentNameInput.value;
    const studentId = studentIdInput.value;
    const emailId = emailIdInput.value;
    const contactNo = contactNoInput.value;

    // Basic validation (you'll likely want to add more robust validation)
    if (!studentName || !studentId || !emailId || !contactNo) {
        alert('Please fill in all fields.');
        return;
    }

    // Add new student record
    const newStudent = {
        name: studentName,
        id: studentId,
        email: emailId,
        contact: contactNo
    };
    studentData.push(newStudent);

    // Save to local storage
    localStorage.setItem('studentData', JSON.stringify(studentData));

    // Clear input fields
    registrationForm.reset();

    // Re-render the table
    renderStudentTable();
});

// Function to render the student table
function renderStudentTable() {
    studentTable.innerHTML = ''; // Clear existing rows

    studentData.forEach((student, index) => {
        const row = studentTable.insertRow();
        const nameCell = row.insertCell();
        const idCell = row.insertCell();
        const emailCell = row.insertCell();
        const contactCell = row.insertCell();
        const actionsCell = row.insertCell();

        nameCell.textContent = student.name;
        idCell.textContent = student.id;
        emailCell.textContent = student.email;
        contactCell.textContent = student.contact;

        // Add edit and delete buttons
        actionsCell.innerHTML = `
            <button class="edit-button" onclick="editStudent(${index})">Edit</button>
            <button class="delete-button" onclick="deleteStudent(${index})">Delete</button>
        `;
    });
}

// Function to edit a student record (implementation needed)
function editStudent(index) {
    // ... (Get student data, populate form, update record, re-render table)
}

// Function to delete a student record
function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        studentData.splice(index, 1);
        localStorage.setItem('studentData', JSON.stringify(studentData));
        renderStudentTable();
    }
}