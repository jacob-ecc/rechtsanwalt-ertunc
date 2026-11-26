// English pages. The addresses of the previous site (/english/...) are kept.
import { rows, split, statement, chapters, form, fees, PHONE, FAX, EMAIL, MAP } from '../parts.mjs';

const BASE = 'english/';
const LAWYER = BASE + 'dr-kenan-ertunc-m/';
const AREAS = BASE + 'practice-areas/';
const CONTACT = BASE + 'contact-us/';

export const T = {
  lang: 'en',
  home: BASE,
  skip: 'Skip to content',
  navLabel: 'Main',
  menu: 'Menu',
  quick: 'Quick actions',
  action: 'Book a first consultation',
  actionHref: CONTACT + '#request',
  langs: [
    { code: 'de', short: 'DE', name: 'Deutsch', home: '' },
    { code: 'tr', short: 'TR', name: 'Türkçe', home: 'tuerkce/' },
  ],
  nav: [
    { key: 'lawyer', label: 'Lawyer', href: LAWYER },
    { key: 'areas', label: 'Practice areas', href: AREAS, menu: {
      cols: [
        { head: 'Specialism', links: [
          { href: AREAS + '#immigration', label: 'Immigration and asylum law', line: 'Residence, citizenship, asylum' },
          { href: AREAS + '#family', label: 'Family law', line: 'Divorce, maintenance, custody' },
        ] },
        { head: 'Further areas', links: [
          { href: AREAS + '#employment', label: 'Employment law', line: 'Dismissal, severance, references' },
          { href: AREAS + '#criminal', label: 'Criminal law', line: 'Defence in proceedings' },
          { href: AREAS + '#traffic', label: 'Traffic law', line: 'Accidents, fines, licences' },
        ] },
      ],
      card: { href: AREAS + '#immigration', photo: 'justiz', title: 'Certified specialist in migration law', line: 'What the German title means for your case' },
    } },
    { key: 'fees', label: 'Fees', href: BASE + '#fees' },
    { key: 'contact', label: 'Contact', href: CONTACT },
  ],
  footer: {
    lede: 'Lawyer and certified specialist in migration law in Rosenheim',
    firm: 'Rechtsanwaltskanzlei Dr. Ertunc',
    imprint: 'Legal notice (Impressum)', privacy: 'Privacy (Datenschutz)',
    credits: 'Photographs via Wikimedia Commons',
    cols: [
      { head: 'Practice', links: [{ href: LAWYER, label: 'Lawyer' }, { href: BASE + '#fees', label: 'Fees' }, { href: CONTACT, label: 'Contact' }] },
      { head: 'Practice areas', phoneHide: true, links: [
        { href: AREAS + '#immigration', label: 'Immigration law' }, { href: AREAS + '#family', label: 'Family law' },
        { href: AREAS + '#employment', label: 'Employment law' }, { href: AREAS + '#criminal', label: 'Criminal law' }, { href: AREAS + '#traffic', label: 'Traffic law' }] },
      { head: 'Reach us', links: [{ href: PHONE.href, label: 'Tel. +49 8031 209 24 48' }, { href: 'mailto:' + EMAIL, label: 'Send an email' }, { href: CONTACT + '#directions', label: 'Directions' }] },
      { head: 'Languages', phoneOff: true, links: [{ href: '', label: 'Deutsch', lang: 'de' }, { href: 'tuerkce/', label: 'Türkçe', lang: 'tr' }, { label: 'English' }] },
    ],
  },
};

const alt = (de, tr, en) => [{ lang: 'de', href: de }, { lang: 'tr', href: tr }, { lang: 'en', href: en }, { lang: 'x-default', href: de }];
const LANGROW = '<ul class="lang-row"><li lang="de">Deutsch</li><li lang="tr">Türkçe</li><li>English</li><li lang="it">Italiano</li></ul>';

const FORM = {
  subject: 'First consultation request',
  name: 'Name', nameKey: 'Name', nameErr: 'Please write your name.',
  email: 'Email', emailKey: 'Email', emailErr: 'Please write an email address with an @, like name@example.com.',
  tel: 'Phone (optional)', telKey: 'Phone',
  area: 'Practice area', areaKey: 'Area',
  areas: ['Immigration and asylum law', 'Family law', 'Employment law', 'Criminal law', 'Traffic law', 'Not sure yet'],
  msg: 'Your matter in a few sentences', msgKey: 'Matter', msgErr: 'Please describe your matter in a few words.',
  button: 'Book a first consultation',
  note: p => `Sending opens your own email program with the message ready to go. How personal data is handled is set out in the <a class="link" href="${p}datenschutz/" lang="de">Datenschutzerklärung</a> (German).`,
};

export function pages() {
  const home = { p: '../' };
  Object.assign(home, {
    lang: 'en', out: BASE + 'index.html', navKey: '',
    title: 'Dr. Kenan Ertunc: immigration lawyer in Rosenheim, Germany',
    desc: 'Law firm in Rosenheim, Bavaria: immigration and asylum law, family, employment, criminal and traffic law. Advice in English, German, Turkish and Italian.',
    alternates: alt('', 'tuerkce/', BASE),
    langLinks: { de: '', tr: 'tuerkce/' },
    moments: ['word-highlight', 'pinned-chapters'],
    hero: {
      photo: 'pen', pos: '50% 50%',
      h1: 'Immigration lawyer in Rosenheim, Germany',
      lead: 'Dr. Kenan Ertunc M.A. is a certified specialist in German migration law and also acts in family, employment, criminal and traffic matters. Advice in four languages, English included.',
      buttons: [{ href: CONTACT + '#request', label: 'Book a first consultation' }, { href: '#areas', label: 'See the practice areas' }],
    },
    close: { h2: 'Book a first consultation in Rosenheim', line: 'The first contact is free of charge: by phone, by email or at the office.', photo: 'ludwig', pos: '50% 62%' },
  });
  home.sections = [
    split(home, {
      id: 'areas', photo: 'shelves', pos: '45% 80%',
      h2: 'Practice areas of the firm',
      lead: 'The focus is immigration and asylum law. Private clients and companies are also advised and represented in four further areas.',
      body: rows([
        { name: 'Immigration and asylum law', line: 'Residence permits, naturalisation, family reunification, asylum and appeals against decisions.', value: 'Specialist' },
        { name: 'Family law', line: 'Separation, divorce, maintenance, custody and contact.' },
        { name: 'Employment law', line: 'Dismissal, severance, contracts and references.' },
        { name: 'Criminal law', line: 'Defence in investigations and at trial.' },
        { name: 'Traffic law', line: 'Accident claims, fines and driving licences.' },
      ]) + `\n        <p class="split__more"><a class="link" href="${home.p}${AREAS}">Read the practice areas in detail</a></p>`,
    }),
    statement({
      id: 'languages', label: 'Languages',
      text: 'You explain your case <strong>in your own language</strong>: English, German, Turkish or Italian. For Kurdish and Arabic, the firm works closely with interpreters.',
      after: LANGROW,
    }),
    chapters(home, {
      id: 'process', h2: 'How your case proceeds',
      steps: [
        { title: 'First contact, free of charge', photo: 'penwood', text: 'You describe your matter by phone, by email or at the office. You learn how the procedure works and what it is likely to cost.' },
        { title: 'Review of your documents', photo: 'volumes', text: 'Decisions, contracts and letters are reviewed. You receive an assessment of your position and a proposal for the next steps.' },
        { title: 'Representation before authorities and courts', photo: 'justiz', text: 'The firm handles correspondence with authorities, opponents and insurers and represents you in court.' },
      ],
    }),
    split(home, {
      id: 'lawyer', photo: 'harvard', pos: '50% 50%',
      h2: 'Dr. Kenan Ertunc M.A.',
      lead: 'German lawyer (Rechtsanwalt) and certified specialist in migration law, member of the Munich Bar and the German Bar Association.',
      body: rows([
        { name: 'Studies', line: 'Law, labour studies and European studies in Bremen, Saarbrücken and Milan.' },
        { name: 'Doctorate', line: 'Graduate School for Social and Political Science, University of Milan.' },
        { name: 'Research', line: 'Visiting researcher at Warwick Business School and the University of Cambridge.' },
        { name: 'Practice', line: 'In-house counsel and lawyer at an international business law firm in Munich.' },
      ]) + `\n        <p class="split__more"><a class="link" href="${home.p}${LAWYER}">Read the career and publications</a></p>`,
    }),
    fees(home, {
      id: 'fees', photo: 'intl', pos: '50% 45%',
      h2: 'Fees and billing',
      lead: 'The first contact is free of charge. How the work is billed is agreed before the mandate begins.',
      link: { href: CONTACT + '#request', label: 'Write to discuss the costs' },
      items: [
        { value: 'RVG', name: 'Statutory fees', line: 'Under the German Lawyers’ Remuneration Act (RVG), based on the value in dispute.' },
        { value: 'Hourly', name: 'Hourly rate', line: 'The time spent is billed at a rate agreed in advance.' },
        { value: 'Fixed', name: 'Flat fee', line: 'A fixed amount is agreed for a clearly defined matter.' },
      ],
    }),
  ];

  const lawyer = { p: '../../' };
  Object.assign(lawyer, {
    lang: 'en', out: LAWYER + 'index.html', navKey: 'lawyer',
    title: 'Dr. Kenan Ertunc M.A.: German lawyer and migration law specialist',
    desc: 'Career of Dr. Kenan Ertunc: studies in Bremen, Saarbrücken and Milan, doctorate in Milan, research at Warwick and Cambridge, practice in Munich and Rosenheim.',
    alternates: alt('rechtsanwalt/', 'tuerkce/alman-hukukunda-avukat-dr-kenan-ertunc-m/', LAWYER),
    langLinks: { de: 'rechtsanwalt/', tr: 'tuerkce/alman-hukukunda-avukat-dr-kenan-ertunc-m/' },
    moments: ['picture-develops'],
    hero: {
      photo: 'harvard', pos: '50% 50%',
      h1: 'Lawyer Dr. Kenan Ertunc M.A.',
      lead: 'Certified specialist in migration law in Rosenheim. Studies and doctorate in Germany and Italy, research at Warwick and Cambridge, practice at a Munich business law firm.',
      buttons: [{ href: CONTACT + '#request', label: 'Book a first consultation' }, { href: '#career', label: 'See the career' }],
    },
    close: { h2: 'Book a consultation with Dr. Ertunc', line: 'The first contact is free of charge: by phone, by email or at the office.', photo: 'mittertor', pos: '50% 55%' },
  });
  lawyer.sections = [
    split(lawyer, {
      id: 'career', photo: 'lesesaal', develop: true, pos: '50% 50%', cls: 'ph-short',
      h2: 'Career',
      lead: 'Education, research and practice in four countries.',
      body: rows([
        { name: 'Studies', line: 'Law, labour studies and European studies in Bremen, Saarbrücken and Milan.' },
        { name: 'Legal clerkship', line: 'At the Higher Regional Court of Saarland, Saarbrücken.' },
        { name: 'Doctorate', line: 'Graduate School for Social and Political Science, University of Milan.' },
        { name: 'Research', line: 'Industrial Relations Research Unit, Warwick Business School; Centre for Business Research, University of Cambridge; research fellow at Warwick Law School.' },
        { name: 'International bodies', line: 'International Labour Organization (ILO), Geneva; European Trade Union Institute (ETUI), Brussels.' },
        { name: 'Practice', line: 'In-house counsel at a consultancy and lawyer at an international business law firm, both in Munich.' },
      ]),
    }),
    split(lawyer, {
      id: 'publications', photo: 'intl', pos: '40% 50%',
      h2: 'Publications and memberships',
      lead: 'Specialist training in migration law (Fachanwalt für Migrationsrecht). Advice in English, German, Turkish and Italian; Kurdish and Arabic with interpreters.',
      body: rows([
        { name: '<a class="link" href="https://trs.sagepub.com/content/19/2/281.short" rel="noopener">Fundamental Social Rights in the European Multilevel Governance System</a>', line: 'Transfer: European Review of Labour and Research, 2013, p. 281.' },
        { name: '<a class="link" href="https://air.unimi.it/handle/2434/233514" rel="noopener">The Legal Implications of the Social Market Economy on the European Economic Constitution</a>', line: 'Doctoral thesis, University of Milan, 2014.' },
        { name: 'Memberships', line: 'Munich Bar (Rechtsanwaltskammer München), German Bar Association (Deutscher Anwaltverein).' },
      ]),
    }),
  ];

  const areas = { p: '../../' };
  Object.assign(areas, {
    lang: 'en', out: AREAS + 'index.html', navKey: 'areas',
    title: 'Practice areas: immigration, family, employment, criminal and traffic law in Rosenheim',
    desc: 'Specialist advice in immigration and asylum law, plus family, employment, criminal and traffic law, for private clients and companies.',
    alternates: alt('rechtsgebiete/', 'tuerkce/faaliyet-alanlarimz/', AREAS),
    langLinks: { de: 'rechtsgebiete/', tr: 'tuerkce/faaliyet-alanlarimz/' },
    moments: ['word-highlight'],
    hero: {
      photo: 'shelves', pos: '45% 50%',
      h1: 'Practice areas of Dr. Ertunc’s firm',
      lead: 'Specialist advice in immigration and asylum law, plus family, employment, criminal and traffic law, for private clients and companies in Rosenheim.',
      buttons: [{ href: CONTACT + '#request', label: 'Book a first consultation' }, { href: '#immigration', label: 'See immigration law' }],
    },
    close: { h2: 'Discuss your matter with the firm', line: 'The first contact is free of charge: by phone, by email or at the office.', photo: 'ludwig', pos: '50% 62%' },
  });
  areas.sections = [
    split(areas, {
      id: 'immigration', photo: 'justiz', pos: '50% 55%',
      h2: 'Immigration and asylum law',
      lead: 'Dr. Ertunc holds the German title of certified specialist in migration law. The firm advises and represents you on matters such as:',
      body: rows([
        { name: 'Residence', line: 'Residence permits, settlement permits, extensions and permanent residence.' },
        { name: 'Naturalisation', line: 'Application, requirements and appeals against refusal.' },
        { name: 'Family reunification and visas', line: 'Bringing a spouse and children to Germany, the visa procedure.' },
        { name: 'Asylum', line: 'Interview, decision and appeal before the administrative court.' },
        { name: 'Expulsion and deportation', line: 'Urgent legal protection and representation before the immigration office.' },
      ]),
    }),
    statement({
      id: 'connections', label: 'Connections',
      text: 'A criminal conviction, a divorce or a dismissal can affect your <strong>right of residence</strong>. Because the firm handles both sides, these effects are checked from the start.',
      after: '<ul class="lang-row lang-row--3"><li lang="de">§ 54 AufenthG<small>Grounds for expulsion after a conviction</small></li><li lang="de">§ 31 AufenthG<small>A spouse’s own right of residence after separation</small></li><li lang="de">§ 18 ff. AufenthG<small>Residence for the purpose of employment</small></li></ul>',
    }),
    split(areas, {
      id: 'further', photo: 'volumes', pos: '50% 50%',
      h2: 'Family, employment, criminal and traffic law',
      lead: 'Advice and representation out of court and in court.',
      body: rows([
        { id: 'family', name: 'Family law', line: 'Separation and divorce, child and spousal maintenance, custody and contact, division of assets.' },
        { id: 'employment', name: 'Employment law', line: 'Unfair dismissal claims, severance, employment contracts and references, for employees and employers.' },
        { id: 'criminal', name: 'Criminal law', line: 'Defence in investigations, against penalty orders and at trial.' },
        { id: 'traffic', name: 'Traffic law', line: 'Accident claims, fines, driving bans and licences.' },
      ]),
    }),
  ];

  const contact = { p: '../../' };
  Object.assign(contact, {
    lang: 'en', out: CONTACT + 'index.html', navKey: 'contact',
    title: 'Contact: Dr. Ertunc law firm, Adlzreiterstraße 2, Rosenheim',
    desc: 'Book a first consultation: phone +49 8031 209 24 48, email info@rechtsanwalt-ertunc.com or the request form.',
    alternates: alt('kontakt/', 'tuerkce/iletisim/', CONTACT),
    langLinks: { de: 'kontakt/', tr: 'tuerkce/iletisim/' },
    moments: ['picture-develops'],
    hero: {
      photo: 'mittertor', pos: '50% 45%',
      h1: 'Contact the firm in Rosenheim',
      lead: 'Adlzreiterstraße 2, 83022 Rosenheim, Germany. Call, send an email or use the request form. You are welcome to write in English.',
      buttons: [{ href: '#request', label: 'Book a first consultation' }, { href: PHONE.href, label: 'Call +49 8031 209 24 48' }],
    },
    close: { h2: 'Prefer to call directly', line: `Phone +49 8031 209 24 48, fax +49 8031 232 88 49.`, photo: 'shelves', pos: '45% 50%' },
  });
  contact.sections = [
    `  <section class="section" id="request" style="--hm: 2" aria-labelledby="request-h">
    <div class="wrap grid grid--top">
      <div class="span-5">
        <div class="section-head">
          <h2 id="request-h">Book a first consultation</h2>
          <p>Describe your matter in a few sentences. The firm will reply by email or phone. The first contact is free of charge.</p>
        </div>
        ${rows([
          { name: 'Phone', value: `<a class="link" href="${PHONE.href}">+49 8031 209 24 48</a>` },
          { name: 'Fax', value: '+49 8031 232 88 49' },
          { name: 'Email', value: `<a class="link" href="mailto:${EMAIL}">${EMAIL}</a>` },
        ], 'rows contact-rows')}
      </div>
      <div class="form-panel span-6 start-7">
        ${form(contact, FORM)}
      </div>
    </div>
  </section>
`,
    split(contact, {
      id: 'directions', photo: 'ludwig', develop: true, pos: '50% 62%', cls: 'stack-tab',
      h2: 'How to find the office',
      lead: 'The office is in Rosenheim’s town centre.',
      body: `<address class="contact-address">Adlzreiterstraße 2<br>83022 Rosenheim</address>
        <p class="split__more"><a class="link" href="${MAP}" rel="noopener">Get directions</a></p>
        ${rows([
          { name: 'Languages', line: 'English, German, Turkish, Italian; Kurdish and Arabic with interpreters.' },
          { name: 'Bar', line: 'Munich Bar (Rechtsanwaltskammer München).' },
        ])}`,
    }),
  ];
  return [home, lawyer, areas, contact];
}
