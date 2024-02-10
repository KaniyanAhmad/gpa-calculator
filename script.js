document.addEventListener('DOMContentLoaded', function() {
    // Function to add a new course
    function addNewCourse() {
        // Create a new div element
        var newCourseDiv = document.createElement('div');
        newCourseDiv.classList.add('new-course');

        // HTML content for the new course
        newCourseDiv.innerHTML = `
            <img src="./close.png" alt="del" class="rm-course">
            <input type="text" class="input-txt">
            <select name="grade" class="grade">
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
            <input type="number" min="0" max="10" class="input-cr credit">
        `;

        // Append the new course to the container
        document.getElementById('new-courses-wrap').appendChild(newCourseDiv);

        // Add event listener to the rm icon
        newCourseDiv.querySelector('.rm-course').addEventListener('click', function() {
            rmCourse(newCourseDiv); // Pass the course div to the removal function
        });
    }

    // Function to remove a course
    function rmCourse(courseDiv) {
        courseDiv.remove();
    }


    function calculate() {
        let credits = document.getElementsByClassName('credit');
        let grades = document.getElementsByClassName('grade');
    
        let totalCredits = 0;
        let totalGradePoints = 0;
    
        for (let i = 0; i < credits.length; i++) {
            let credit = parseFloat(credits[i].value);
            let grade = grades[i].value;
    
            // Convert grade to grade points
            let gradePoints;
            switch (grade) {
                case 'A': gradePoints = 4.0; break;
                case 'A-': gradePoints = 3.75; break;
                case 'B+': gradePoints = 3.5; break;
                case 'B': gradePoints = 3; break;
                case 'C+': gradePoints = 2.5; break;
                case 'C': gradePoints = 2; break;
                case 'D+': gradePoints = 1.5; break;
                case 'D': gradePoints = 1; break;
                case 'F': gradePoints = 0; break;
                default: gradePoints = 0.0;
            }
    
            totalCredits += credit;
            totalGradePoints += credit * gradePoints;
        }
    
        let cgpa = totalGradePoints / totalCredits;
        // Update the CGPA display
        document.getElementById('cgpa').textContent = cgpa.toFixed(2);
    }
    
    

    // Add event listener to the add more btn
    document.getElementById('add-course-btn').addEventListener('click', addNewCourse);

    // event listener to the calculate btn
    document.getElementById('calculate-btn').addEventListener('click', calculate);
});
