// Deutsche Seiten. Fakten aus der bisherigen Website www.rechtsanwalt-ertunc.com (Stand November 2026).
import { rows, split, cardGrid, timeline, badges, statement, chapters, faqSplit, form, fees, PHONE, FAX, EMAIL, MAP } from '../parts.mjs';

export const T = {
  lang: 'de',
  home: '',
  skip: 'Zum Inhalt',
  navLabel: 'Hauptnavigation',
  menu: 'Menü',
  quick: 'Schnellzugriff',
  action: 'Erstgespräch vereinbaren',
  actionHref: 'kontakt/#anfrage',
  langs: [
    { code: 'tr', short: 'TR', name: 'Türkçe', home: 'tuerkce/' },
    { code: 'en', short: 'EN', name: 'English', home: 'english/' },
  ],
  nav: [
    { key: 'anwalt', label: 'Anwalt', href: 'rechtsanwalt/' },
    { key: 'gebiete', label: 'Rechtsgebiete', href: 'rechtsgebiete/', menu: {
      cols: [
        { head: 'Schwerpunkt', links: [
          { href: 'rechtsgebiete/#migrationsrecht', label: 'Ausländer- und Asylrecht', line: 'Aufenthalt, Einbürgerung, Asyl' },
          { href: 'rechtsgebiete/#familienrecht', label: 'Familienrecht', line: 'Scheidung, Unterhalt, Sorgerecht' },
        ] },
        { head: 'Weitere Gebiete', links: [
          { href: 'rechtsgebiete/#arbeitsrecht', label: 'Arbeitsrecht', line: 'Kündigung, Abfindung, Zeugnis' },
          { href: 'rechtsgebiete/#strafrecht', label: 'Strafrecht', line: 'Verteidigung im Verfahren' },
          { href: 'rechtsgebiete/#verkehrsrecht', label: 'Verkehrsrecht', line: 'Unfall, Bußgeld, Führerschein' },
        ] },
      ],
      card: { href: 'rechtsgebiete/#migrationsrecht', photo: 'justiz', title: 'Fachanwalt für Migrationsrecht', line: 'Der Titel und was er für Ihr Verfahren bedeutet' },
    } },
    { key: 'kosten', label: 'Kosten', href: 'kosten/' },
    { key: 'kontakt', label: 'Kontakt', href: 'kontakt/' },
  ],
  footer: {
    lede: 'Rechtsanwalt und Fachanwalt für Migrationsrecht in Rosenheim',
    firm: 'Rechtsanwaltskanzlei Dr. Ertunc',
    imprint: 'Impressum', privacy: 'Datenschutz',
    credits: 'Fotos via Wikimedia Commons',
    cols: [
      { head: 'Kanzlei', links: [{ href: 'rechtsanwalt/', label: 'Rechtsanwalt' }, { href: 'kosten/', label: 'Kosten' }, { href: 'kontakt/', label: 'Kontakt' }] },
      { head: 'Rechtsgebiete', phoneHide: true, links: [
        { href: 'rechtsgebiete/#migrationsrecht', label: 'Migrationsrecht' }, { href: 'rechtsgebiete/#familienrecht', label: 'Familienrecht' },
        { href: 'rechtsgebiete/#arbeitsrecht', label: 'Arbeitsrecht' }, { href: 'rechtsgebiete/#strafrecht', label: 'Strafrecht' }, { href: 'rechtsgebiete/#verkehrsrecht', label: 'Verkehrsrecht' }] },
      { head: 'Erreichbar', links: [{ href: PHONE.href, label: 'Tel. ' + PHONE.label }, { href: 'mailto:' + EMAIL, label: 'E-Mail schreiben' }, { href: 'kontakt/#anfahrt', label: 'Anfahrt' }] },
      { head: 'Sprachen', phoneOff: true, links: [{ label: 'Deutsch' }, { href: 'tuerkce/', label: 'Türkçe', lang: 'tr' }, { href: 'english/', label: 'English', lang: 'en' }] },
    ],
  },
};

export const LANGROW = '<ul class="lang-row"><li lang="de">Deutsch</li><li lang="tr">Türkçe</li><li lang="en">English</li><li lang="it">Italiano</li></ul>';
const ADDRESS = 'Adlzreiterstraße 2, 83022 Rosenheim';
const alt = (de, tr, en) => [{ lang: 'de', href: de }, { lang: 'tr', href: tr }, { lang: 'en', href: en }, { lang: 'x-default', href: de }];

const FORM = {
  subject: 'Anfrage Erstgespräch',
  name: 'Name', nameKey: 'Name', nameErr: 'Bitte tragen Sie Ihren Namen ein.',
  email: 'E-Mail', emailKey: 'E-Mail', emailErr: 'Bitte tragen Sie eine E-Mail-Adresse mit @ ein, etwa name@beispiel.de.',
  tel: 'Telefon (freiwillig)', telKey: 'Telefon',
  area: 'Rechtsgebiet', areaKey: 'Rechtsgebiet',
  areas: ['Ausländer- und Asylrecht', 'Familienrecht', 'Arbeitsrecht', 'Strafrecht', 'Verkehrsrecht', 'Noch unklar'],
  msg: 'Ihr Anliegen in wenigen Sätzen', msgKey: 'Anliegen', msgErr: 'Bitte beschreiben Sie Ihr Anliegen in ein paar Worten.',
  button: 'Erstgespräch vereinbaren',
  note: p => `Beim Absenden öffnet sich Ihr E-Mail-Programm mit der fertigen Nachricht an die Kanzlei. Hinweise zum Datenschutz finden Sie in der <a class="link" href="${p}datenschutz/">Datenschutzerklärung</a>.`,
};

/* ---------- pages ---------- */
export function pages() {
  const home = { p: '' };
  Object.assign(home, {
    lang: 'de', out: 'index.html', navKey: '',
    title: 'Rechtsanwalt Dr. Kenan Ertunc: Fachanwalt für Migrationsrecht in Rosenheim',
    desc: 'Kanzlei in der Adlzreiterstraße in Rosenheim: Ausländer- und Asylrecht, Familien-, Arbeits-, Straf- und Verkehrsrecht. Beratung auf Deutsch, Türkisch, Englisch und Italienisch.',
    alternates: alt('', 'tuerkce/', 'english/'),
    langLinks: { tr: 'tuerkce/', en: 'english/' },
    moments: ['word-highlight'],
    hero: {
      photo: 'pen', pos: '50% 50%',
      h1: 'Anwalt für Migrations&shy;recht in Rosenheim',
      lead: 'Dr. Kenan Ertunc M.A., Fachanwalt für Migrationsrecht, vertritt Sie auch im Familien-, Arbeits-, Straf- und Verkehrsrecht. Kanzlei in der Adlzreiterstraße in Rosenheim, Beratung in vier Sprachen.',
      buttons: [{ href: 'kontakt/#anfrage', label: 'Erstgespräch vereinbaren' }, { href: '#rechtsgebiete', label: 'Rechtsgebiete ansehen' }],
    },
    close: { h2: 'Erstgespräch in Rosenheim vereinbaren', line: 'Der erste Kontakt ist kostenfrei: am Telefon, per E-Mail oder in der Kanzlei.' },
  });
  home.sections = [
    split(home, {
      id: 'rechtsgebiete',
      h2: 'Rechtsgebiete der Kanzlei',
      lead: 'Schwerpunkt ist das Ausländer- und Asylrecht. Privatpersonen und Unternehmen werden außerdem in vier weiteren Gebieten beraten und vertreten.',
      body: cardGrid([
        { name: 'Ausländer- und Asylrecht', line: 'Aufenthaltstitel, Einbürgerung, Familiennachzug, Asylverfahren und Klagen gegen Bescheide.', value: 'Fachanwalt' },
        { name: 'Familienrecht', line: 'Trennung, Scheidung, Unterhalt, Sorge- und Umgangsrecht.' },
        { name: 'Arbeitsrecht', line: 'Kündigung, Abfindung, Arbeitsvertrag und Zeugnis.' },
        { name: 'Strafrecht', line: 'Verteidigung im Ermittlungs- und Strafverfahren.' },
        { name: 'Verkehrsrecht', line: 'Unfallregulierung, Bußgeld und Führerschein.' },
      ], { icons: ['globe', 'users', 'briefcase', 'gavel', 'car'], feature: true }),
      aside: `<p class="split__more"><a class="link" href="rechtsgebiete/">Alle Rechtsgebiete im Detail lesen</a></p>`,
    }),
    statement({
      id: 'sprachen', label: 'Sprachen',
      text: 'Sie schildern Ihren Fall <strong>in Ihrer Sprache</strong>: auf Deutsch, Türkisch, Englisch oder Italienisch. Für Kurdisch und Arabisch arbeitet die Kanzlei eng mit Dolmetschern zusammen.',
      after: LANGROW,
    }),
    chapters(home, {
      id: 'ablauf', h2: 'So läuft Ihr Mandat ab',
      steps: [
        { title: 'Erster Kontakt, kostenfrei', text: 'Sie schildern Ihr Anliegen am Telefon, per E-Mail oder in der Kanzlei. Sie erfahren, wie das Verfahren abläuft und welche Kosten voraussichtlich entstehen.' },
        { title: 'Prüfung Ihrer Unterlagen', text: 'Bescheide, Verträge und Schreiben werden geprüft. Sie erhalten eine Einschätzung Ihrer Lage und einen Vorschlag für das weitere Vorgehen.' },
        { title: 'Vertretung bei Behörden und Gerichten', text: 'Die Kanzlei führt den Schriftverkehr mit Behörden, Gegnern und Versicherungen und vertritt Sie vor Gericht.' },
      ],
    }),
    split(home, {
      id: 'anwalt',
      // client slot: replace with the portrait of Dr. Ertunc (4:5, daylight, plain background)
      h2: 'Dr. Kenan Ertunc M.A.',
      lead: 'Rechtsanwalt und Fachanwalt für Migrationsrecht, Mitglied der Rechtsanwaltskammer München und des Deutschen Anwaltvereins.',
      body: timeline([
        { name: 'Studium', line: 'Rechtswissenschaft, Arbeitswissenschaft und Europastudien in Bremen, Saarbrücken und Mailand.' },
        { name: 'Promotion', line: 'Graduate School for Social and Political Science der Universität Mailand.' },
        { name: 'Forschung', line: 'Gastforscher an der Warwick Business School und der University of Cambridge.' },
        { name: 'Praxis', line: 'Syndikus und Rechtsanwalt in einer internationalen Wirtschaftskanzlei in München.' },
      ]),
      aside: `${badges(["Fachanwalt für Migrationsrecht","Promotion in Mailand","Beratung in vier Sprachen"])}
        <p class="split__more"><a class="link" href="rechtsanwalt/">Werdegang und Publikationen lesen</a></p>`,
    }),
    fees(home, {
      id: 'kosten',
      h2: 'Kosten und Abrechnung',
      lead: 'Der erste Kontakt ist kostenfrei. Wie danach abgerechnet wird, steht fest, bevor das Mandat beginnt.',
      link: { href: 'kosten/', label: 'Fragen zu den Kosten lesen' },
      items: [
        { value: 'RVG', name: 'Gesetzliche Gebühren', line: 'Nach dem Rechtsanwaltsvergütungsgesetz, abhängig vom Gegenstandswert.' },
        { value: 'Stundensatz', name: 'Stundenhonorar', line: 'Abgerechnet wird der Zeitaufwand zu einem vorher vereinbarten Satz.' },
        { value: 'Festbetrag', name: 'Pauschale', line: 'Ein fester Betrag für ein klar umrissenes Mandat.' },
      ],
    }),
  ];

  /* Rechtsanwalt */
  const anwalt = { p: '../' };
  Object.assign(anwalt, {
    lang: 'de', out: 'rechtsanwalt/index.html', navKey: 'anwalt',
    title: 'Dr. Kenan Ertunc M.A.: Rechtsanwalt und Fachanwalt für Migrationsrecht',
    desc: 'Werdegang von Dr. Kenan Ertunc: Studium in Bremen, Saarbrücken und Mailand, Promotion in Mailand, Forschung in Warwick und Cambridge, Praxis in München und Rosenheim.',
    alternates: alt('rechtsanwalt/', 'tuerkce/alman-hukukunda-avukat-dr-kenan-ertunc-m/', 'english/dr-kenan-ertunc-m/'),
    langLinks: { tr: 'tuerkce/alman-hukukunda-avukat-dr-kenan-ertunc-m/', en: 'english/dr-kenan-ertunc-m/' },
    moments: [],
    hero: {
      photo: 'harvard', pos: '50% 50%',
      h1: 'Rechtsanwalt Dr. Kenan Ertunc M.A.',
      lead: 'Fachanwalt für Migrationsrecht in Rosenheim. Studium und Promotion in Deutschland und Italien, Forschung in Warwick und Cambridge, Praxis in einer Münchner Wirtschaftskanzlei.',
      buttons: [{ href: 'kontakt/#anfrage', label: 'Erstgespräch vereinbaren' }, { href: '#werdegang', label: 'Werdegang ansehen' }],
    },
    close: { h2: 'Erstgespräch mit Dr. Ertunc vereinbaren', line: `${ADDRESS}. Telefon ${PHONE.label}.` },
  });
  anwalt.sections = [
    split(anwalt, {
      id: 'werdegang',
      // client slot: the portrait of Dr. Ertunc belongs here
      h2: 'Werdegang',
      lead: 'Ausbildung, Forschung und Praxis in vier Ländern.',
      body: timeline([
        { name: 'Studium', line: 'Rechtswissenschaft, Arbeitswissenschaft und Europastudien in Bremen, Saarbrücken und Mailand.' },
        { name: 'Referendariat', line: 'Am Saarländischen Oberlandesgericht in Saarbrücken.' },
        { name: 'Promotion', line: 'Graduate School for Social and Political Science der Universität Mailand.' },
        { name: 'Forschung', line: 'Industrial Relations Research Unit der Warwick Business School, Centre for Business Research der University of Cambridge; wissenschaftlicher Mitarbeiter an der Warwick Law School.' },
        { name: 'Stationen', line: 'Internationale Arbeitsorganisation (ILO) in Genf, Europäisches Gewerkschaftsinstitut (ETUI) in Brüssel.' },
        { name: 'Praxis', line: 'Syndikus in einer Unternehmensberatung und Rechtsanwalt in einer internationalen Wirtschaftskanzlei, beide in München.' },
      ]),
    }),
    split(anwalt, {
      id: 'publikationen',
      h2: 'Publikationen und Mitgliedschaften',
      lead: 'Fortbildung zum Fachanwalt für Migrationsrecht. Beratung auf Deutsch, Türkisch, Englisch und Italienisch; für Kurdisch und Arabisch mit Dolmetschern.',
      body: cardGrid([
        { name: '<a class="link" href="https://trs.sagepub.com/content/19/2/281.short" rel="noopener">Fundamental Social Rights in the European Multilevel Governance System</a>', line: 'Transfer: European Review of Labour and Research, 2013, S. 281.' },
        { name: '<a class="link" href="https://air.unimi.it/handle/2434/233514" rel="noopener">The Legal Implications of the Social Market Economy on the European Economic Constitution</a>', line: 'Dissertation, Universität Mailand, 2014.' },
        { name: 'Mitgliedschaften', line: 'Rechtsanwaltskammer München, Deutscher Anwaltverein.' },
      ], { icons: ['book', 'book', 'award'], cols: 1 }),
    }),
  ];

  /* Rechtsgebiete */
  const gebiete = { p: '../' };
  Object.assign(gebiete, {
    lang: 'de', out: 'rechtsgebiete/index.html', navKey: 'gebiete',
    title: 'Rechtsgebiete: Migrations-, Familien-, Arbeits-, Straf- und Verkehrsrecht in Rosenheim',
    desc: 'Fachanwaltliche Beratung im Ausländer- und Asylrecht sowie Familien-, Arbeits-, Straf- und Verkehrsrecht für Privatpersonen und Unternehmen.',
    alternates: alt('rechtsgebiete/', 'tuerkce/faaliyet-alanlarimz/', 'english/practice-areas/'),
    langLinks: { tr: 'tuerkce/faaliyet-alanlarimz/', en: 'english/practice-areas/' },
    moments: ['word-highlight'],
    hero: {
      photo: 'shelves', pos: '45% 50%',
      h1: 'Rechtsgebiete der Kanzlei Dr. Ertunc',
      lead: 'Fachanwaltliche Beratung im Ausländer- und Asylrecht, dazu Familien-, Arbeits-, Straf- und Verkehrsrecht für Privatpersonen und Unternehmen in Rosenheim.',
      buttons: [{ href: 'kontakt/#anfrage', label: 'Erstgespräch vereinbaren' }, { href: '#migrationsrecht', label: 'Migrationsrecht ansehen' }],
    },
    close: { h2: 'Ihr Anliegen mit der Kanzlei besprechen', line: `${ADDRESS}. Telefon ${PHONE.label}.` },
  });
  gebiete.sections = [
    split(gebiete, {
      id: 'migrationsrecht',
      h2: 'Ausländer- und Asylrecht',
      lead: 'Dr. Ertunc trägt den Titel Fachanwalt für Migrationsrecht. Die Kanzlei berät und vertritt Sie unter anderem bei diesen Fragen:',
      body: cardGrid([
        { name: 'Aufenthalt', line: 'Aufenthaltserlaubnis, Niederlassungserlaubnis, Verlängerung und Daueraufenthalt.' },
        { name: 'Einbürgerung', line: 'Antrag, Voraussetzungen und Rechtsmittel bei Ablehnung.' },
        { name: 'Familiennachzug und Visum', line: 'Nachzug von Ehepartnern und Kindern, Visumverfahren.' },
        { name: 'Asylverfahren', line: 'Anhörung, Bescheid und Klage vor dem Verwaltungsgericht.' },
        { name: 'Ausweisung und Abschiebung', line: 'Eilrechtsschutz und Vertretung gegenüber der Ausländerbehörde.' },
      ], { icons: ['idcard', 'landmark', 'send', 'shield', 'alert'] }),
    }),
    statement({
      id: 'zusammenhang', label: 'Zusammenhänge',
      text: 'Ein Strafbefehl, eine Scheidung oder eine Kündigung kann Folgen für Ihr <strong>Aufenthaltsrecht</strong> haben. Weil die Kanzlei beide Seiten bearbeitet, werden diese Folgen von Anfang an mitgeprüft.',
      after: '<ul class="lang-row lang-row--3"><li>§ 54 AufenthG<small>Ausweisungsinteresse nach einer Verurteilung</small></li><li>§ 31 AufenthG<small>Eigenes Aufenthaltsrecht des Ehegatten nach der Trennung</small></li><li>§ 18 ff. AufenthG<small>Aufenthalt zum Zweck der Beschäftigung</small></li></ul>',
    }),
    split(gebiete, {
      id: 'weitere',
      h2: 'Familien-, Arbeits-, Straf- und Verkehrsrecht',
      lead: 'Beratung und Vertretung außergerichtlich und vor Gericht.',
      body: cardGrid([
        { id: 'familienrecht', name: 'Familienrecht', line: 'Trennung und Scheidung, Kindes- und Ehegattenunterhalt, Sorge- und Umgangsrecht, Zugewinnausgleich.' },
        { id: 'arbeitsrecht', name: 'Arbeitsrecht', line: 'Kündigungsschutzklage, Abfindung, Arbeitsvertrag und Arbeitszeugnis, für Arbeitnehmer und Arbeitgeber.' },
        { id: 'strafrecht', name: 'Strafrecht', line: 'Verteidigung im Ermittlungsverfahren, bei Strafbefehl und in der Hauptverhandlung.' },
        { id: 'verkehrsrecht', name: 'Verkehrsrecht', line: 'Unfallregulierung, Bußgeldverfahren, Fahrverbot und Führerschein.' },
      ], { icons: ['users', 'briefcase', 'gavel', 'car'] }),
    }),
  ];

  /* Kosten */
  const kosten = { p: '../' };
  Object.assign(kosten, {
    lang: 'de', out: 'kosten/index.html', navKey: 'kosten',
    title: 'Kosten und Honorar der Kanzlei Dr. Ertunc in Rosenheim',
    desc: 'Abrechnung nach RVG, Stundenhonorar oder Pauschale. Der erste Kontakt zu Ablauf und voraussichtlichen Kosten ist kostenfrei.',
    alternates: [{ lang: 'de', href: 'kosten/' }],
    langLinks: { tr: 'tuerkce/#ucretler', en: 'english/#fees' },
    moments: [],
    hero: {
      photo: 'penwood', pos: '40% 50%',
      h1: 'Kosten und Honorar der Kanzlei',
      lead: 'Der erste Kontakt, in dem Sie Ablauf und voraussichtliche Kosten erfahren, ist kostenfrei. Danach wird nach RVG, nach Zeitaufwand oder pauschal abgerechnet.',
      buttons: [{ href: 'kontakt/#anfrage', label: 'Erstgespräch vereinbaren' }, { href: '#abrechnung', label: 'Abrechnung ansehen' }],
    },
    close: { h2: 'Kosten im ersten Gespräch klären', line: `Kostenfrei, am Telefon unter ${PHONE.label} oder per E-Mail.` },
  });
  kosten.sections = [
    split(kosten, {
      id: 'abrechnung', top: true,
      h2: 'Drei Arten der Abrechnung',
      lead: 'Welche für Ihren Fall gilt, hängt vom Rechtsgebiet und vom Umfang ab. Sie erfahren es vor Beginn des Mandats.',
      body: cardGrid([
        { name: 'Gesetzliche Gebühren nach RVG', line: 'Die Gebühren richten sich nach dem Gegenstandswert und den Tätigkeiten, die das Rechtsanwaltsvergütungsgesetz vorsieht.' },
        { name: 'Stundenhonorar', line: 'Abgerechnet wird der tatsächliche Zeitaufwand zu einem vorher vereinbarten Stundensatz.' },
        { name: 'Pauschalvergütung', line: 'Für ein klar umrissenes Mandat wird ein fester Betrag vereinbart.' },
      ], { icons: ['file', 'clock', 'tag'], cols: 3 }),
    }),
    faqSplit({
      id: 'fragen', h2: 'Fragen zu den Kosten',
      lead: `Weitere Fragen beantwortet die Kanzlei am Telefon unter <a class="link" href="${PHONE.href}">${PHONE.label}</a>.`,
      faq: [
        { q: 'Was kostet der erste Kontakt?', a: 'Nichts. Sie erfahren, wie Ihr Verfahren abläuft und welche Kosten voraussichtlich entstehen.' },
        { q: 'Wann steht fest, wie abgerechnet wird?', a: 'Vor Beginn des Mandats. Ein Stundenhonorar oder eine Pauschale wird schriftlich vereinbart.' },
        { q: 'Muss ich dafür nach Rosenheim kommen?', a: 'Nein. Der erste Kontakt ist auch per Telefon oder E-Mail möglich.' },
        { q: 'Berät die Kanzlei auch Unternehmen?', a: 'Ja. Beraten werden Privatpersonen und Unternehmen.' },
        { q: 'Welche Unterlagen soll ich bereithalten?', a: 'Alle Schreiben, Bescheide und Verträge zu Ihrem Fall, dazu Ihren Ausweis oder Aufenthaltstitel.' },
      ],
    }),
  ];

  /* Kontakt */
  const kontakt = { p: '../' };
  Object.assign(kontakt, {
    lang: 'de', out: 'kontakt/index.html', navKey: 'kontakt',
    title: 'Kontakt: Kanzlei Dr. Ertunc, Adlzreiterstraße 2, Rosenheim',
    desc: 'Erstgespräch vereinbaren: Telefon 08031 209 24 48, E-Mail an info@rechtsanwalt-ertunc.com oder über das Anfrageformular.',
    alternates: alt('kontakt/', 'tuerkce/iletisim/', 'english/contact-us/'),
    langLinks: { tr: 'tuerkce/iletisim/', en: 'english/contact-us/' },
    moments: ['picture-develops'],
    hero: {
      photo: 'mittertor', pos: '50% 45%',
      h1: 'Kontakt zur Kanzlei in Rosenheim',
      lead: `${ADDRESS}. Rufen Sie an, schreiben Sie eine E-Mail oder senden Sie Ihre Anfrage über das Formular.`,
      buttons: [{ href: '#anfrage', label: 'Erstgespräch vereinbaren' }, { href: PHONE.href, label: `${PHONE.label} anrufen` }],
    },
    close: { h2: 'Lieber direkt anrufen', line: `Telefon ${PHONE.label}, Fax ${FAX}.` },
  });
  kontakt.sections = [
    `  <section class="section" id="anfrage" style="--hm: 2" aria-labelledby="anfrage-h">
    <div class="wrap grid grid--top">
      <div class="span-5">
        <div class="section-head">
          <h2 id="anfrage-h">Erstgespräch vereinbaren</h2>
          <p>Beschreiben Sie Ihr Anliegen in wenigen Sätzen. Die Kanzlei meldet sich per E-Mail oder Telefon bei Ihnen. Der erste Kontakt ist kostenfrei.</p>
        </div>
        ${rows([
          { name: 'Telefon', value: `<a class="link" href="${PHONE.href}">${PHONE.label}</a>` },
          { name: 'Fax', value: FAX },
          { name: 'E-Mail', value: `<a class="link" href="mailto:${EMAIL}">${EMAIL}</a>` },
        ], 'rows contact-rows')}
      </div>
      <div class="form-panel span-6 start-7">
        ${form(kontakt, FORM)}
      </div>
    </div>
  </section>
`,
    split(kontakt, {
      id: 'anfahrt', photo: 'ludwig', develop: true, pos: '50% 62%', cls: 'stack-tab',
      h2: 'So finden Sie die Kanzlei',
      lead: 'Die Kanzlei liegt in der Rosenheimer Innenstadt.',
      body: `<address class="contact-address">Adlzreiterstraße 2<br>83022 Rosenheim</address>
        <p class="split__more"><a class="link" href="${MAP}" rel="noopener">Route planen</a></p>
        ${rows([
          { name: 'Sprachen', line: 'Deutsch, Türkisch, Englisch, Italienisch; Kurdisch und Arabisch mit Dolmetschern.' },
          { name: 'Zuständige Kammer', line: 'Rechtsanwaltskammer München.' },
        ])}`,
    }),
  ];
  return [home, anwalt, gebiete, kosten, kontakt];
}
