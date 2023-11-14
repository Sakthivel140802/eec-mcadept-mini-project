document.addEventListener("DOMContentLoaded", function() {
    // Sample subject data - Replace with actual data or fetch from a backend
    const subjects = [
        { id: 1, name: "Mathematics" },
        { id: 2, name: "Physics" },
        { id: 3, name: "Chemistry" },
        // Add more subjects here
    ];

    // Sample notes data - Replace with actual data or fetch from a backend
    const notes = [
        { subjectId: 1, title: "Math Notes 1", url: "math_notes_1.pdf" },
        { subjectId: 1, title: "Math Notes 2", url: "math_notes_2.pdf" },
        { subjectId: 2, title: "Physics Notes 1", url: "physics_notes_1.pdf" },
        // Add more notes here
    ];

    // Populate the subject list
    const subjectList = document.getElementById("subject-list");
    subjects.forEach(function(subject) {
        const subjectLink = document.createElement("a");
        subjectLink.href = "#";
        subjectLink.classList.add("list-group-item", "list-group-item-action");
        subjectLink.textContent = subject.name;
        subjectLink.dataset.subjectId = subject.id;
        subjectList.appendChild(subjectLink);
    });

    // Populate the notes list when a subject is selected
    subjectList.addEventListener("click", function(event) {
        const subjectId = event.target.dataset.subjectId;
        if (subjectId) {
            const notesList = document.getElementById("notes-list");
            notesList.innerHTML = "";

            const subjectNotes = notes.filter(note => note.subjectId == subjectId);
            subjectNotes.forEach(function(note) {
                const listItem = document.createElement("li");
                const noteLink = document.createElement("a");
                noteLink.href = note.url;
                noteLink.textContent = note.title;
                listItem.appendChild(noteLink);
                notesList.appendChild(listItem);
            });
        }
    });
});
