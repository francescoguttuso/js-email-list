const emailList = document.querySelector("ul.list-group");
const button = document.querySelector("button");

const generateTenEmail = () => {
    emailList.innerHTML = "";
    // Genera 10 email casuali
    for (let i = 0; i < 10; i++) {
        // Effettua una richiesta GET all'API per ottenere un'email casuale
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                const email = response.data.response;

                const newEmailItem = document.createElement("li");

                newEmailItem.classList.add("list-group-item");
                newEmailItem.classList.add("list-group-item-primary");
                newEmailItem.textContent = email;
                emailList.appendChild(newEmailItem);
            })
            .catch((error) => {
                console.error("Si è verificato un errore:", error);
                // Opzionale: mostra un messaggio di errore all'utente nella pagina
            });
    }
};
// Genera le email iniziali al caricamento della pagina
generateTenEmail();
// Aggiungi un listener al pulsante per generare nuove email quando viene cliccato
button.addEventListener("click", generateTenEmail);
