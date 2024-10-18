document.addEventListener('DOMContentLoaded', () => {

    // Element-Referenzen abrufen
    const button = document.getElementById('clickMeButton');
    const msgList = document.getElementById('msgList');

    // Überprüfen, ob die Elemente vorhanden sind
    if (button && msgList) {

        // Klick-Ereignis für den Button hinzufügen
        button.addEventListener('click', () => {

            // Neues Nachrichten-Element erstellen
            const newMessage = document.createElement('li');
            newMessage.textContent = 'Neue Nachricht hinzugefügt!';
            newMessage.className = 'list-group-item';

            // Neue Nachricht zur Nachrichtenliste hinzufügen
            msgList.appendChild(newMessage);
            
        });
    }
});