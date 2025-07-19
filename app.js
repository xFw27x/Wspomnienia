// Czekamy, aż cała strona HTML się załaduje
document.addEventListener('DOMContentLoaded', () => {

    // Znajdujemy w HTML nasze główne "widoki" i przyciski
    const loginView = document.getElementById('login-view');
    const timelineView = document.getElementById('timeline-view');
    
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');

    // Funkcja, która pokazuje oś czasu i ukrywa logowanie
    function showTimeline() {
        loginView.style.display = 'none';
        timelineView.style.display = 'block';
    }

    // Funkcja, która pokazuje logowanie i ukrywa oś czasu
    function showLogin() {
        timelineView.style.display = 'none';
        loginView.style.display = 'block';
    }

    // Dodajemy "nasłuchiwacze" zdarzeń do przycisków
    // Gdy ktoś kliknie przycisk "Zaloguj", uruchom funkcję showTimeline
    loginButton.addEventListener('click', () => {
        // Na razie nie sprawdzamy hasła, po prostu przełączamy widok
        console.log('Kliknięto "Zaloguj"');
        showTimeline();
    });
    
    // Gdy ktoś kliknie przycisk "Wyloguj", uruchom funkcję showLogin
    logoutButton.addEventListener('click', () => {
        console.log('Kliknięto "Wyloguj"');
        showLogin();
    });

});