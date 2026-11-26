// Impressum und Datenschutzerklärung. Long text, so these pages leave the screen grid (main.legal).
// Bitte vor dem Livegang von Dr. Ertunc prüfen lassen: siehe README.md, "Vor dem Livegang".
import { head, nav, PHONE, FAX, EMAIL, YEAR } from './parts.mjs';
import { T } from './content/de.mjs';
import { readFileSync } from 'node:fs';
const CREDITS = JSON.parse(readFileSync(new URL('./credits.json', import.meta.url), 'utf8'));

function shell(pg, body) {
  const p = pg.p;
  return head(pg, T) + nav(pg, T) + `
<main id="top" class="legal">
  <article>
${body}
  </article>
</main>
<footer class="footer legal-footer">
  <div class="wrap footer__legal">
    <span>&copy; ${YEAR} ${T.footer.firm} &nbsp; <a href="${p}impressum/">Impressum</a> &nbsp; <a href="${p}datenschutz/">Datenschutz</a></span>
    <a class="credits" href="${p}credits.html">${T.footer.credits}</a>
  </div>
</footer>
<script type="module" src="${p}assets/system.js"></script>
<script type="module" src="${p}assets/motion/motion.js"></script>
</body>
</html>
`;
}

const ADDRESS = `Rechtsanwalt Dr. Kenan Ertunc M.A.<br>Adlzreiterstraße 2<br>83022 Rosenheim`;

export function legalPages() {
  const imp = { p: '../', lang: 'de', out: 'impressum/index.html', navKey: '',
    title: 'Impressum: Rechtsanwalt Dr. Kenan Ertunc M.A., Rosenheim',
    desc: 'Anbieterkennzeichnung und berufsrechtliche Angaben der Kanzlei Dr. Ertunc in Rosenheim.',
    alternates: [], langLinks: { tr: 'tuerkce/', en: 'english/' } };
  const impressum = shell(imp, `    <h1>Impressum</h1>
    <h2>Angaben gemäß § 5 DDG</h2>
    <address>${ADDRESS}</address>
    <p>Telefon: <a href="${PHONE.href}">${PHONE.label}</a><br>Telefax: ${FAX}<br>E-Mail: <a href="mailto:${EMAIL}">${EMAIL}</a></p>

    <h2>Berufsbezeichnung</h2>
    <p>Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)<br>Fachanwalt für Migrationsrecht</p>

    <h2>Zuständige Rechtsanwaltskammer und Aufsichtsbehörde</h2>
    <address>Rechtsanwaltskammer München<br>Tal 33<br>80331 München</address>
    <p>Telefon: +49 89 532944-0<br>Telefax: +49 89 532944-28<br>Internet: <a href="https://www.rak-muenchen.de" rel="noopener">www.rak-muenchen.de</a></p>

    <h2>Berufsrechtliche Regelungen</h2>
    <ul>
      <li>Bundesrechtsanwaltsordnung (BRAO)</li>
      <li>Berufsordnung für Rechtsanwälte (BORA)</li>
      <li>Fachanwaltsordnung (FAO)</li>
      <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
      <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
      <li>Gesetz über die Tätigkeit europäischer Rechtsanwälte in Deutschland (EuRAG)</li>
    </ul>
    <p>Die Regelungen sind auf der Website der Bundesrechtsanwaltskammer unter <a href="https://www.brak.de/anwaltschaft/berufsrecht/" rel="noopener">www.brak.de</a> einsehbar.</p>

    <!-- Berufshaftpflichtversicherung (Pflichtangabe nach § 2 Abs. 1 Nr. 11 DL-InfoV): Name und Anschrift des Versicherers
         sowie räumlicher Geltungsbereich fehlen noch und müssen von der Kanzlei ergänzt werden. -->

    <h2>Außergerichtliche Streitschlichtung</h2>
    <p>Bei Streitigkeiten zwischen Rechtsanwälten und ihren Auftraggebern besteht auf Antrag die Möglichkeit der außergerichtlichen Streitschlichtung bei der regionalen Rechtsanwaltskammer München (§ 73 Abs. 2 Nr. 3 BRAO) oder bei der Schlichtungsstelle der Rechtsanwaltschaft (§ 191f BRAO), Rauchstraße 26, 10787 Berlin, <a href="https://www.s-d-r.org" rel="noopener">www.s-d-r.org</a>.</p>

    <h2>Haftung für Inhalte und Links</h2>
    <p>Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Sie ersetzen keine Rechtsberatung im Einzelfall. Für Inhalte verlinkter externer Seiten sind ausschließlich deren Betreiber verantwortlich.</p>

    <h2>Fotos</h2>
    <p>Die Fotos stammen von Wikimedia Commons; Urheber und Lizenzen stehen in den <a href="../credits.html">Bildnachweisen</a>.</p>`);

  const ds = { p: '../', lang: 'de', out: 'datenschutz/index.html', navKey: '',
    title: 'Datenschutzerklärung: Kanzlei Dr. Ertunc, Rosenheim',
    desc: 'Wie die Kanzlei Dr. Ertunc personenbezogene Daten auf dieser Website und bei einer Kontaktaufnahme verarbeitet.',
    alternates: [], langLinks: { tr: 'tuerkce/', en: 'english/' } };
  const datenschutz = shell(ds, `    <h1>Datenschutzerklärung</h1>

    <h2>1. Verantwortlicher</h2>
    <address>${ADDRESS}</address>
    <p>Telefon: <a href="${PHONE.href}">${PHONE.label}</a><br>Telefax: ${FAX}<br>E-Mail: <a href="mailto:${EMAIL}">${EMAIL}</a></p>

    <h2>2. Besuch dieser Website</h2>
    <p>Beim Aufruf dieser Website übermittelt Ihr Browser technisch bedingt Daten an den Server, auf dem die Website liegt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, zuvor besuchte Seite (Referrer), Browsertyp und Betriebssystem. Der Betreiber des Servers speichert diese Daten in Protokolldateien, um die Website auszuliefern und ihre Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im sicheren und fehlerfreien Betrieb der Website.</p>
    <p>Diese Website setzt keine Cookies, verwendet keine Analyse- oder Werbedienste und bindet keine Inhalte Dritter ein. Schriften und Bilder werden vom eigenen Server geladen; es findet keine Verbindung zu Google Fonts oder anderen externen Diensten statt.</p>

    <h2>3. Kontakt per E-Mail, Telefon oder Formular</h2>
    <p>Wenn Sie die Kanzlei per E-Mail, Telefon oder Telefax kontaktieren, werden Ihre Angaben verarbeitet, um Ihre Anfrage zu beantworten und gegebenenfalls ein Mandat anzubahnen oder durchzuführen. Das Anfrageformular auf der Kontaktseite überträgt keine Daten an einen Server: Beim Absenden öffnet sich Ihr eigenes E-Mail-Programm mit der vorbereiteten Nachricht, die Sie selbst versenden.</p>
    <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen und Vertragsdurchführung) sowie Art. 6 Abs. 1 lit. f DSGVO. Soweit Sie Angaben zu Ihrer Herkunft, Ihrem Aufenthaltsstatus, Ihrer Gesundheit oder zu Straftaten machen, verarbeitet die Kanzlei diese nach Art. 9 Abs. 2 lit. f DSGVO und Art. 10 DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
    <p>Ihre Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen; für Handakten gilt in der Regel eine Aufbewahrungsfrist von sechs Jahren nach Ende des Mandats (§ 50 BRAO).</p>

    <h2>4. Weitergabe von Daten</h2>
    <p>Ihre Daten werden nur an Dritte weitergegeben, soweit dies zur Bearbeitung Ihres Mandats erforderlich ist (etwa an Gerichte, Behörden oder Gegner), Sie eingewilligt haben oder eine gesetzliche Pflicht besteht. Rechtsanwälte unterliegen der beruflichen Verschwiegenheitspflicht (§ 43a Abs. 2 BRAO).</p>

    <h2>5. Ihre Rechte</h2>
    <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).</p>
    <p><strong>Widerspruchsrecht:</strong> Soweit die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen (Art. 21 DSGVO). Eine E-Mail an <a href="mailto:${EMAIL}">${EMAIL}</a> genügt.</p>
    <p>Sie können sich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO), etwa beim Bayerischen Landesamt für Datenschutzaufsicht, Promenade 18, 91522 Ansbach, <a href="https://www.lda.bayern.de" rel="noopener">www.lda.bayern.de</a>.</p>

    <h2>6. Datensicherheit</h2>
    <p>Diese Website wird verschlüsselt über HTTPS (TLS) ausgeliefert. Bitte beachten Sie, dass eine gewöhnliche E-Mail unverschlüsselt übertragen wird; für vertrauliche Unterlagen sprechen Sie den Übertragungsweg am besten vorher mit der Kanzlei ab.</p>

    <p class="t-small muted">Stand: November ${YEAR}</p>`);

  const cr = { p: '', lang: 'de', out: 'credits.html', navKey: '',
    title: 'Bildnachweise: Kanzlei Dr. Ertunc, Rosenheim',
    desc: 'Urheber und Lizenzen der Fotos auf rechtsanwalt-ertunc.com.',
    alternates: [], langLinks: { tr: 'tuerkce/', en: 'english/' } };
  const credits = shell(cr, `    <h1>Bildnachweise</h1>
    <p>Alle Fotos stammen von Wikimedia Commons und stehen unter den genannten freien Lizenzen.</p>
    <ul>
${CREDITS.map(c => `      <li>${c.what}: ${c.by.replace(/&/g, '&amp;').replace(/</g, '&lt;')}, <a href="${c.licenceUrl}" rel="noopener">${c.licence}</a>, <a href="${c.page}" rel="noopener">Quelle</a></li>`).join('\n')}
    </ul>`);

  return [['impressum/index.html', impressum], ['datenschutz/index.html', datenschutz], ['credits.html', credits]];
}
