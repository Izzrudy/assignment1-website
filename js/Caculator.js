function openCity(work, elmnt, color) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

	
		tablinks = document.getElementsByClassName("tablink");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].style.backgroundColor = "";
		}

 
		document.getElementById(work).style.display = "block";

  
		elmnt.style.backgroundColor = color;
	}


	document.getElementById("defaultOpen").click();
	
	
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
			this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} 
			else {
			panel.style.display = "block";
			}
		});
	}
	
	function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addSubject() {
        const container = document.getElementById('subjectsContainer');
        const subjectCount = container.children.length + 1;
        const div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `
            <label>Grade for Subject ${subjectCount}:</label>
            <input type="text" name="grade[]" required>
            <label>Credit Hours for Subject ${subjectCount}:</label>
            <input type="number" name="credit[]" required>
        `;
        container.appendChild(div);
    }

    document.getElementById('cgpaForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const grades = document.getElementsByName('grade[]');
        const credits = document.getElementsByName('credit[]');
        
        let totalPoints = 0;
        let totalCredits = 0;

        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i].value.toUpperCase();
            const credit = parseFloat(credits[i].value);
            let point;

            switch (grade) {
                case 'A': point = 4.0; break;
                case 'A-': point = 3.7; break;
                case 'B+': point = 3.3; break;
                case 'B': point = 3.0; break;
                case 'B-': point = 2.7; break;
                case 'C+': point = 2.3; break;
                case 'C': point = 2.0; break;
                case 'C-': point = 1.7; break;
                case 'D+': point = 1.3; break;
                case 'D': point = 1.0; break;
                case 'F': point = 0.0; break;
                default: alert('Invalid grade: ' + grade); return;
            }

            totalPoints += point * credit;
            totalCredits += credit;
        }

        const cgpa = totalPoints / totalCredits;
        document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
    });