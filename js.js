const fields = ['nom', 'prenom', 'telephone', 'email', 'objet'];

function updateAsterisk(inputId) {
    const input = document.getElementById(inputId);
    const label = document.querySelector(`label[for="${inputId}"]`);

    if (input.value.trim() !== '') {
        label.textContent = label.textContent.replace(' *', ''); // Retirer le *
    } else {
        if (!label.textContent.includes('*')) {
            label.textContent = label.textContent + ' *'; // Ajouter le *
        }
    }
}

function handleField(inputId) {
    const input = document.getElementById(inputId);
    input.addEventListener('input', () => updateAsterisk(inputId));
    input.addEventListener('blur', () => updateAsterisk(inputId));
}

function init() {
    fields.forEach(field => handleField(field));
}

document.addEventListener('DOMContentLoaded', init);



