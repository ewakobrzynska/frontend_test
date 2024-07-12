https://cerulean-mandazi-823e24.netlify.app/


# Zadanie rekrutacyjne

Witaj,

Prosimy Cię o wykonanie poniższego zadania najlepiej jak tylko umiesz. Pozwoli to nam lepiej ocenić Twoje umiejętności :)

## OPIS
W katalogu znajdziesz projekt graficzny. Prosimy Cię o jego pocięcie oraz napisanie funkcjonalności dla poszczególnych elementów. Swoje prace rób jako fork tego repozytorium.


### CEL

- Pocięta strona ma wypełniać całe okno przeglądarki (nie zamykać contentu w kontenerze o stałej szerokości). Przy reponsywności możesz zastosować dowolne breakpointy, samemu uznaj jak będzie najlepiej.

- Header powinien być na stałe przyklejony do topu, Logo HTML5 w headerze powinno linkować do '/' .  

- Stopka strony w przypadku małej ilości treści w contencie powinna i tak być na samym dole strony a nie 'doklejać' się pod contentem.

- W bloku pierwszym są radiobuttony, ich wybór a następnie kliknięcie przycisku w bloku drugim wykona akcję podmiany lub doklejenia tekstu w bloku ostatnim. Treści które mają zostać użyte należy pobrać z JSONa (szczegóły niżej). Opcja pierwsza wybierze zawsze treść pierwszą, opcja druga drugą a opcja losowa dowolną z pozostałych. Każda osobna treść w ostatnim bloku powinna być objęta tagiem <article>. Doklejając treść należy uniknąć powielania już istniejącej treści (w przypadku użycia opcji losowej należy wylosować kolejną jeszcze nie użytą treść). 

- Button 'pokaż' w footerze po kliknięciu pokazuje ramkę (wysuwa ją spod footera) z 2 klikalnymi opcjami. Pierwsza przywraca stronę do początkowych ustawień, druga w headerze dokleja Twoje imię i nazwisko.


### PLIK JSON
Zbudować plik z tablicą przynajmniej 6 elementów zawierających dowolną treść. Wolno w JSONie trzymać dodatkowe dane jeżeli uprości to wykonanie zadania.


### WARUNKI
- Nie używać bootstrapa/tailwinda ani innych podobnych frameworków.
- Zastosować SCSS.
- Poniżej 960px według uznania dokonać zmian w projekcie by jak najlepiej przedstawić stronę (najlepiej wykorzystać przykład projektu mobilnego).


### DODATKOWE PLUSY
- Osadzenie całego zadania w jakimś JSowym frameworku (najlepiej Angular).
- Brak plików graficznych w końcowym projekcie (brak plików typu jpg, gif, png, svg).
- CSS IS AWESOME w footerze - po najechaniu myszką ramka (bez tekstu) powinna wykonać animowany obrót.
- Zastosowanie BEM.
- Spełnianie zasad a11y.
- Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze użycie jednostki px) - w taki sposób by w efekcie responsywność spełniona została jak najmniejszą ilością kodu.
- Mobile first.
- Doklejając treść sprawić by w ostatnim bloku treści były posortowane alfabetycznie.
- Przy doklejaniu treści w przypadku niemożliwości spełnienia warunku by była unikalna wyświetlić stosowny komunikat (np. alert/dialog/modal).
- Button w footerze ("pokaż") wysuwający ramkę bez użycia JSa.
- Rezultat prac wrzucić do podglądu na jakąś darmową platformę (np. netlify/heroku).


### ZADANIE NA 6 :)
- Wykorzystać localStorage do załadowania treści z pliku i ich późniejszego przechowywania oraz napisać dodatkową funkcjonalność pozwalającą na zarządzanie nimi (dodawanie/edycja/usuwanie).


## UWAGI
Projekt nie musi być 'pixel perfect'. Z uwagi na brak pliku źródłowego a jedynie jpg należy wymiary samemu zmierzyć. Ale przykładowo jeżeli jakiś element po zmierzeniu wydaje się że ma 139px to dobrą praktyką będzie zaokrąglić go do 140px. Użyty w projekcie font to OpenSans.


## WYSYŁKA PRACY
Należy przesłać link do swojego repozytorium z rozwiązaniem. Dodatkowo wrzuć dokument tekstowy z listą rzeczy których nie udało się wykonać z celów głównych oraz listę rzeczy które zrobiono dodatkowo.

POWODZENIA :)
