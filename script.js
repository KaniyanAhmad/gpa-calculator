document.addEventListener('DOMContentLoaded', function() {
    // Function to add a new course
    function addNewCourse() {
        console.log("IN addNewCourse Function");

        // Create a new div element
        var newCourseDiv = document.createElement('div');
        newCourseDiv.classList.add('new-course');

        // HTML content for the new course
        newCourseDiv.innerHTML = `
            <img src="./close.png" alt="del" class="rm-course">
            <input type="text">
            <select name="grade">
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input type="number" min="0" max="10">
        `;

        // Append the new course to the container
        document.getElementById('courses-container').appendChild(newCourseDiv);

        // Add event listener to the rm icon
        newCourseDiv.querySelector('.rm-course').addEventListener('click', function() {
            rmCourse(newCourseDiv); // Pass the course div to the removal function
        });
    }

    // Function to remove a course
    function rmCourse(courseDiv) {
        courseDiv.remove();
    }

    // Add event listener to the button
    document.getElementById('add-course-btn').addEventListener('click', addNewCourse);
});
