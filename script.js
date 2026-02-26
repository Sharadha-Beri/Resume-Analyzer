document.getElementById("resumeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let resumeText = document.getElementById("resumeText").value.toLowerCase();
    let score = 0;
    let suggestions = [];

    if (resumeText.includes("education")) {
        score += 20;
    } else {
        suggestions.push("Add Education details.");
    }

    if (resumeText.includes("project")) {
        score += 20;
    } else {
        suggestions.push("Mention at least one project.");
    }

    if (resumeText.includes("skill")) {
        score += 20;
    } else {
        suggestions.push("Add technical skills section.");
    }

    if (resumeText.includes("experience")) {
        score += 20;
    } else {
        suggestions.push("Add internship or experience details.");
    }

    if (resumeText.includes("@")) {
        score += 20;
    } else {
        suggestions.push("Include contact email.");
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Resume Score: " + score + "/100 <br><br> Suggestions:<br>" + suggestions.join("<br>");
});
