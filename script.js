axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
        const email = response.data.response;
        const emailList = document.querySelector("ul.list-group");
        const newEmailItem = document.createElement("li");

        newEmailItem.classList.add("list-group-item");
        newEmailItem.textContent = email;
        emailList.appendChild(newEmailItem);
    })
    .catch((error) => {
        console.error("Si è verificato un errore:", error);
        // Opzionale: mostra un messaggio di errore all'utente nella pagina
    });