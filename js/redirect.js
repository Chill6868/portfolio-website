// Funkcja przekierowująca użytkownika na polską wersję strony
const redirectIfPolish = () => {
	// Pobranie informacji o preferowanym języku użytkownika
	const userLang = navigator.language || navigator.userLanguage;

	// Sprawdzenie, czy pierwsze dwa znaki kodu języka to 'pl'
	if (userLang.substring(0, 2) === "pl") {
		// Przekierowanie na polską wersję strony
		window.location.href = "https://wiktorignasiak.com/pl";
	}
};

// Wywołanie funkcji po załadowaniu strony
window.onload = redirectIfPolish;
