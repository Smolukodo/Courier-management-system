// scripts.js

// Function to handle user login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder logic for login
    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

// Function to handle package tracking
function trackPackage() {
    const trackingNumber = document.getElementById('tracking-number').value;

    // Placeholder logic for tracking a package
    const trackingResult = [
        { status: 'In Transit', location: 'New York, NY', date: '2024-07-12' },
        { status: 'Out for Delivery', location: 'Brooklyn, NY', date: '2024-07-13' }
    ];

    const tableBody = document.querySelector('#tracking-result tbody');
    tableBody.innerHTML = ''; // Clear previous results

    trackingResult.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.status}</td>
            <td>${entry.location}</td>
            <td>${entry.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle adding a courier
function addCourier() {
    // Placeholder logic for adding a courier
    alert('Add Courier function called');
}

// Function to handle managing deliveries
function manageDeliveries() {
    // Placeholder logic for managing deliveries
    alert('Manage Deliveries function called');
}
