# rechtsanwalt-ertunc.com

Neue Website der Kanzlei **Rechtsanwalt Dr. Kenan Ertunc M.A.**, Fachanwalt für Migrationsrecht in Rosenheim.
Statische Seite (HTML/CSS, kein Server, keine Datenbank, keine Cookies), dreisprachig: Deutsch, Türkçe, English.

## Seiten

| Deutsch | Türkçe | English |
|---|---|---|
| `/` Startseite | `/tuerkce/` | `/english/` |
| `/rechtsanwalt/` | `/tuerkce/alman-hukukunda-avukat-dr-kenan-ertunc-m/` | `/english/dr-kenan-ertunc-m/` |
| `/rechtsgebiete/` | `/tuerkce/faaliyet-alanlarimz/` | `/english/practice-areas/` |
| `/kosten/` | (auf der Startseite, `#ucretler`) | (auf der Startseite, `#fees`) |
| `/kontakt/` | `/tuerkce/iletisim/` | `/english/contact-us/` |
| `/impressum/`, `/datenschutz/`, `/credits.html` | | |

Die Adressen der alten Seite bleiben erhalten; `/contact-us/`, `/blog/`, `/tuerkce/hakkimizda/` und
`/english/about-us/` leiten auf die neuen Seiten weiter.

## Inhalte ändern

Die HTML-Dateien werden erzeugt. Texte nie direkt im HTML ändern, sondern hier:

- `src/content/de.mjs`, `src/content/tr.mjs`, `src/content/en.mjs`: alle Texte je Sprache
- `src/legal.mjs`: Impressum, Datenschutz, Bildnachweise
- `src/parts.mjs`: gemeinsames Markup (Kopf, Navigation, Abschnitte, Footer), Telefon, E-Mail
- `src/photos.mjs`: welche Fotos es gibt, mit Alternativtexten
- `assets/site.css`: die eigenen Styles der Seite (der Rest ist das Design-System unter `assets/`)

Danach neu bauen (Node.js 20+):

```bash
node src/build.mjs
```

## Fotos austauschen

Alle Fotos sind **lizenzfreie Platzhalter von Wikimedia Commons** (Nachweise in `/credits.html`).
Fotos stehen bewusst nur noch in den Kopfbildern jeder Seite, in der Menükarte „Rechtsgebiete“ und bei
„So finden Sie die Kanzlei“ (Kontakt). Aufzählungen (Rechtsgebiete, Werdegang, Ablauf, Kosten) sind
Karten, Zeitleiste und Schritte ohne Bild. Sobald eigene Fotos vorliegen, bitte ersetzen, vor allem:

1. **Porträt von Dr. Ertunc** (Tageslicht, ruhiger Hintergrund): Kopfbild der Seite „Rechtsanwalt“.
2. Die Kanzlei von außen (Eingang Adlzreiterstraße): Kopfbild „Kontakt“ und „So finden Sie die Kanzlei“.
3. Schreibtisch- und Detailaufnahmen (Akten, Gesetzestexte) für die übrigen Kopfbilder.

Ein neues Foto als WebP in `assets/img/` ablegen (Breiten 640, 1024, 1600, 2400:
`photo-<name>-<breite>.webp`, für Kopfbilder zusätzlich `photo-<name>-phone.webp` mit 760×1600),
in `src/photos.mjs` eintragen und in den Inhaltsdateien den Schlüssel tauschen.

## Vor dem Livegang

- **Impressum:** Angaben zur **Berufshaftpflichtversicherung** (Name und Anschrift des Versicherers,
  räumlicher Geltungsbereich, § 2 Abs. 1 Nr. 11 DL-InfoV) fehlen auf der alten wie auf der neuen Seite und
  müssen ergänzt werden (Platzhalter-Kommentar in `src/legal.mjs`). Falls vorhanden: USt-IdNr.
- **Datenschutzerklärung:** neu geschrieben für die statische Seite ohne Tracking (die alte nannte Google
  Analytics und AdWords). Bitte prüfen und den **Hosting-Anbieter** nennen, sobald er feststeht.
- **Formular:** Die Anfrage öffnet das E-Mail-Programm des Besuchers (`mailto:`), es braucht also keinen
  Formulardienst. Wer echten Formularversand möchte (z. B. Formspree), trägt die Adresse in
  `data-endpoint` des Formulars ein (`src/parts.mjs`, Funktion `form`).
- **Themenlisten** in den Rechtsgebieten (z. B. Einbürgerung, Familiennachzug) sind allgemeine Beschreibungen
  der Gebiete; bitte auf das tatsächliche Angebot abstimmen.

## Veröffentlichen

Die Seite läuft auf jedem Webspace und auf GitHub Pages (Settings → Pages → Branch `main`, Ordner `/`).
Für die eigene Domain eine Datei `CNAME` mit `www.rechtsanwalt-ertunc.com` anlegen und den DNS-Eintrag setzen.

## Technik

- Schriften (Instrument Serif und Instrument Sans) liegen lokal in `assets/fonts`: keine Verbindung zu Google.
- Design-System und Bewegungen aus dem „taste skill“-Kit (`assets/system.css`, `assets/layout`,
  `assets/motion`, `assets/moments`); geprüft bei 1440, 1024, 820, 768, 390 und 320 px Breite.
