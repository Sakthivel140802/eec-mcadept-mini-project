document.addEventListener("DOMContentLoaded", function() {
    // Simulated student data - replace this with actual data
    const studentData = {
        name: "John Doe",
        regno: "123456",
        email: "johndoe@example.com",
        location: "Campus City"
    };

    // Simulated notifications data - replace this with actual notifications data
    const notifications = [
        { title: "Class Cancellation", content: "The Biology class on Monday is canceled." },
        { title: "Exam Schedule", content: "The final exam schedule is now available. Check the notice board for details." },
        // Add more notifications here
    ];

    // Populate the profile information
    document.getElementById("username").textContent = studentData.name;
    document.getElementById("name").textContent = studentData.name;
    document.getElementById("regno").textContent = studentData.regno;
    document.getElementById("email").textContent = studentData.email;
    document.getElementById("location").textContent = studentData.location;

    // Populate the notifications
    const notificationList = document.getElementById("notification-list");
    notifications.forEach(function(notification) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${notification.title}:</strong> ${notification.content}`;
        notificationList.appendChild(listItem);
    });

    // Add a click event listener for the "Logout" button
    document.getElementById("logout").addEventListener("click", function() {
        // Perform logout actions here (e.g., redirect to a login page)
    });
});
