const diseasesData = {
    "flu": {
        symptoms: ["fever", "cough", "sore throat", "runny nose", "body aches"],
        description: "The flu is a common viral infection that can be deadly, especially in high-risk groups.",
        treatment: "Rest, fluids, and over-the-counter medications to reduce fever and pain."
    },
    "common cold": {
        symptoms: ["sneezing", "stuffy nose", "sore throat", "cough"],
        description: "A viral infection of your nose and throat (upper respiratory tract).",
        treatment: "Rest, fluids, and over-the-counter medications."
    },
    "covid-19": {
        symptoms: ["fever", "dry cough", "tiredness", "loss of taste or smell"],
        description: "A contagious disease caused by the SARS-CoV-2 virus.",
        treatment: "Isolation, rest, fluids, and medical attention if symptoms worsen."
    },
    // Add more diseases with their symptoms, description, and treatment here
};

function getDiseaseInfo() {
    const symptomsInput = document.getElementById('symptomsInput').value.toLowerCase().split(',').map(s => s.trim());
    const diseaseInfoDiv = document.getElementById('diseaseInfo');
    let matchedDiseases = [];

    for (const disease in diseasesData) {
        const diseaseData = diseasesData[disease];
        const matchedSymptoms = diseaseData.symptoms.filter(symptom => symptomsInput.includes(symptom));
        if (matchedSymptoms.length > 0) {
            matchedDiseases.push({
                name: disease,
                matchedSymptoms: matchedSymptoms,
                ...diseaseData
            });
        }
    }

    if (matchedDiseases.length > 0) {
        diseaseInfoDiv.innerHTML = matchedDiseases.map(disease => `
            <div class="disease">
                <h2>${disease.name}</h2>
                <p><strong>Matched Symptoms:</strong> ${disease.matchedSymptoms.join(', ')}</p>
                <p><strong>Description:</strong> ${disease.description}</p>
                <p><strong>Treatment:</strong> ${disease.treatment}</p>
            </div>
        `).join('');
    } else {
        diseaseInfoDiv.innerHTML = "<p>No matching diseases found. Please check your symptoms and try again.</p>";
    }
}
