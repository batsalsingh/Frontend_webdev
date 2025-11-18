// ES6 Class for Form Builder
class FormBuilder {
    constructor(fields) {
        this.fields = fields;                   // Array of field objects
        this.formContainer = document.getElementById("formContainer");
    }

    // Method to create form dynamically
    generateForm() {
        let html = `<form id="dynamicForm">`;

        this.fields.forEach(field => {
            html += `
                <label>${field.label}</label>
                <input type="${field.type}" id="${field.label.toLowerCase()}" />
            `;
        });

        html += `
            <button type="button" id="submitBtn">Submit</button>
        </form>
        `;

        this.formContainer.innerHTML = html;

        document.getElementById("submitBtn").addEventListener("click", () => {
            const data = this.getFormData();
            document.getElementById("result").innerText =
                "Form Data: " + JSON.stringify(data);
        });
    }

    // Method to collect all form data
    getFormData() {
        const data = {};
        this.fields.forEach(field => {
            const id = field.label.toLowerCase();
            data[id] = document.getElementById(id).value;
        });
        return data;
    }
}

// Field objects array
const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

// Create form builder object
const formBuilder = new FormBuilder(fields);

// Generate the form on page load
formBuilder.generateForm();
