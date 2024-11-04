function createIntroPageContent() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const image = document.getElementById("image");
    const imageFile = image.files[0];
    const imageURL = URL.createObjectURL(imageFile);
    const imageCaption = document.getElementById("caption").value;
    const personalBackground = document.getElementById("personal-bg").value;
    const professionalBackground = document.getElementById("professional-bg").value;
    const academicBackground = document.getElementById("academic-bg").value;
    const webDevBackground = document.getElementById("webdev-bg").value;
    const computerPlatform = document.getElementById("computer-platform").value;
    const courses = [...document.querySelectorAll(".course")].map((input, i) => ({
        title: input.value,
        explanation: document.querySelectorAll(".course-explanation")[i].value
    }));
    const funnyThing = document.getElementById("funny-thing").value;
    const anythingElse = document.getElementById("anything-else").value;

    let content = `
            <h2>Introduction</h2>
            <h3>${name} 🝔 ${mascot}</h3>
            <figure>
            <img src="${imageURL}" alt="${imageCaption}" id="uploaded-img">
            <figcaption>${imageCaption}</figcaption>
            </figure
            <ul>
                <li><strong>Personal Background:</strong> ${personalBackground}</li>
                <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                <li><strong>Academic Background:</strong> ${academicBackground}</li>
                <li><strong>Background in Web Development:</strong> ${webDevBackground}</li>
                <li><strong>Primary Computer Platform:</strong> ${computerPlatform}</li>
                <li><strong>Courses I'm Taking and Why:</strong>
                    <ul>${courses.map((course) => `
                        <li><strong>${course.title}:</strong> ${course.explanation}</li>
                    `).join('')}</ul>
                </li>
                <li><strong>Funny Thing:</strong> ${funnyThing}</li>
                <li><strong>Anything Else:</strong> ${anythingElse}</li>
            </ul>
    `;
    return content;
}

document.getElementById("intro-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const requiredFields = ["name", "mascot", "image", "caption", "personal-bg", 
                            "professional-bg", "academic-bg", "webdev-bg", 
                            "computer-platform"];
    for (let id of requiredFields) {
        if (!document.getElementById(id).value) {
            alert("Please fill out all required fields.");
            return;
        }
    }
    const resultDiv = document.getElementById("result");
    const content = createIntroPageContent();
    document.getElementById("intro-form").style.display = "none";
    resultDiv.innerHTML = content + `<button type="reset" id="reset-btn">Reset</button>`;
    document.getElementById("reset-btn").addEventListener("click", function() {
        resultDiv.innerHTML = "";
        document.getElementById("intro-form").reset();
        document.getElementById("intro-form").style.display = "block";
    });
});

document.getElementById("add-course").addEventListener("click", function() {
    const container = document.getElementById("courses");
    
    const courseContainer = document.createElement("div");
    courseContainer.className = "course-container";
    
    const input = document.createElement("input");
    input.type = "text";
    input.className = "course";
    input.placeholder = "Enter course name";
    courseContainer.appendChild(input);

    const explanation = document.createElement("textarea");
    explanation.className = "course-explanation";
    explanation.placeholder = "Explain why you're taking this course";
    courseContainer.appendChild(explanation);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
        container.removeChild(courseContainer);
    });
    courseContainer.appendChild(deleteButton);

    container.appendChild(courseContainer);
});

document.getElementById("button-reset").addEventListener("click", function(event) {
    event.preventDefault();
    
    document.getElementById("intro-form").reset();
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
});
