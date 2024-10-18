"use strict";
document.addEventListener('DOMContentLoaded', function () {
    // Element-Referenzen abrufen
    var button = document.getElementById('clickMeButton');
    var msgList = document.getElementById('msgList');
    // Überprüfen, ob die Elemente vorhanden sind
    if (button && msgList) {
        // Klick-Ereignis für den Button hinzufügen
        button.addEventListener('click', function () {
            // Neues Nachrichten-Element erstellen
            var newMessage = document.createElement('li');
            newMessage.textContent = 'Neue Nachricht hinzugefügt!';
            newMessage.className = 'list-group-item';
            // Neue Nachricht zur Nachrichtenliste hinzufügen
            msgList.appendChild(newMessage);
        });
    }
});
