// Türkçe sayfalar. Eski sitedeki adresler (/tuerkce/...) korunmuştur.
import { rows, split, statement, chapters, form, fees, PHONE, FAX, EMAIL, MAP } from '../parts.mjs';

const BASE = 'tuerkce/';
const LAWYER = BASE + 'alman-hukukunda-avukat-dr-kenan-ertunc-m/';
const AREAS = BASE + 'faaliyet-alanlarimz/';
const CONTACT = BASE + 'iletisim/';

export const T = {
  lang: 'tr',
  home: BASE,
  skip: 'İçeriğe geç',
  navLabel: 'Ana menü',
  menu: 'Menü',
  quick: 'Hızlı erişim',
  action: 'Randevu talep edin',
  actionHref: CONTACT + '#talep',
  langs: [
    { code: 'de', short: 'DE', name: 'Deutsch', home: '' },
    { code: 'en', short: 'EN', name: 'English', home: 'english/' },
  ],
  nav: [
    { key: 'avukat', label: 'Avukat', href: LAWYER },
    { key: 'alanlar', label: 'Hukuk alanları', href: AREAS, menu: {
      cols: [
        { head: 'Uzmanlık alanı', links: [
          { href: AREAS + '#goc-hukuku', label: 'Yabancılar ve iltica hukuku', line: 'Oturum, vatandaşlık, iltica' },
          { href: AREAS + '#aile-hukuku', label: 'Aile hukuku', line: 'Boşanma, nafaka, velayet' },
        ] },
        { head: 'Diğer alanlar', links: [
          { href: AREAS + '#is-hukuku', label: 'İş hukuku', line: 'Fesih, tazminat, bonservis' },
          { href: AREAS + '#ceza-hukuku', label: 'Ceza hukuku', line: 'Soruşturma ve kovuşturmada savunma' },
          { href: AREAS + '#trafik-hukuku', label: 'Trafik hukuku', line: 'Kaza, para cezası, ehliyet' },
        ] },
      ],
      card: { href: AREAS + '#goc-hukuku', photo: 'justiz', title: 'Göç hukuku uzman avukatı', line: 'Unvanın davanız için anlamı' },
    } },
    { key: 'ucretler', label: 'Ücretler', href: BASE + '#ucretler' },
    { key: 'iletisim', label: 'İletişim', href: CONTACT },
  ],
  footer: {
    lede: 'Rosenheim’da avukat ve göç hukuku uzman avukatı',
    firm: 'Rechtsanwaltskanzlei Dr. Ertunc',
    imprint: 'Künye (Impressum)', privacy: 'Gizlilik (Datenschutz)',
    credits: 'Fotoğraflar: Wikimedia Commons',
    cols: [
      { head: 'Büro', links: [{ href: LAWYER, label: 'Avukat' }, { href: BASE + '#ucretler', label: 'Ücretler' }, { href: CONTACT, label: 'İletişim' }] },
      { head: 'Hukuk alanları', phoneHide: true, links: [
        { href: AREAS + '#goc-hukuku', label: 'Göç hukuku' }, { href: AREAS + '#aile-hukuku', label: 'Aile hukuku' },
        { href: AREAS + '#is-hukuku', label: 'İş hukuku' }, { href: AREAS + '#ceza-hukuku', label: 'Ceza hukuku' }, { href: AREAS + '#trafik-hukuku', label: 'Trafik hukuku' }] },
      { head: 'Ulaşın', links: [{ href: PHONE.href, label: 'Tel. ' + PHONE.label }, { href: 'mailto:' + EMAIL, label: 'E-posta yazın' }, { href: CONTACT + '#yol-tarifi', label: 'Yol tarifi' }] },
      { head: 'Diller', phoneOff: true, links: [{ href: '', label: 'Deutsch', lang: 'de' }, { label: 'Türkçe' }, { href: 'english/', label: 'English', lang: 'en' }] },
    ],
  },
};

const alt = (de, tr, en) => [{ lang: 'de', href: de }, { lang: 'tr', href: tr }, { lang: 'en', href: en }, { lang: 'x-default', href: de }];
const LANGROW = '<ul class="lang-row"><li lang="de">Deutsch</li><li>Türkçe</li><li lang="en">English</li><li lang="it">Italiano</li></ul>';

const FORM = {
  subject: 'İlk görüşme talebi',
  name: 'Adınız soyadınız', nameKey: 'Ad', nameErr: 'Lütfen adınızı yazın.',
  email: 'E-posta', emailKey: 'E-posta', emailErr: 'Lütfen @ içeren bir e-posta adresi yazın, örneğin ad@ornek.com.',
  tel: 'Telefon (isteğe bağlı)', telKey: 'Telefon',
  area: 'Hukuk alanı', areaKey: 'Alan',
  areas: ['Yabancılar ve iltica hukuku', 'Aile hukuku', 'İş hukuku', 'Ceza hukuku', 'Trafik hukuku', 'Henüz belli değil'],
  msg: 'Konunuz birkaç cümleyle', msgKey: 'Konu', msgErr: 'Lütfen konunuzu birkaç kelimeyle anlatın.',
  button: 'Randevu talep edin',
  note: p => `Gönder’e bastığınızda e-posta programınız hazır mesajla açılır. Kişisel verilerinizle ilgili bilgiler <a class="link" href="${p}datenschutz/" lang="de">Datenschutzerklärung</a> sayfasında (Almanca).`,
};

export function pages() {
  const home = { p: '../' };
  Object.assign(home, {
    lang: 'tr', out: BASE + 'index.html', navKey: '',
    title: 'Avukat Dr. Kenan Ertunc: Rosenheim’da göç hukuku uzman avukatı',
    desc: 'Rosenheim’da hukuk bürosu: yabancılar ve iltica hukuku, aile, iş, ceza ve trafik hukuku. Türkçe, Almanca, İngilizce ve İtalyanca danışmanlık.',
    alternates: alt('', BASE, 'english/'),
    langLinks: { de: '', en: 'english/' },
    moments: ['word-highlight', 'pinned-chapters'],
    hero: {
      photo: 'pen', pos: '50% 50%',
      h1: 'Rosenheim’da göç hukuku avukatı',
      lead: 'Dr. Kenan Ertunc M.A., Almanya’da göç hukuku uzman avukatı (Fachanwalt für Migrationsrecht). Aile, iş, ceza ve trafik hukukunda da sizi temsil eder. Danışmanlık Türkçe de yapılır.',
      buttons: [{ href: CONTACT + '#talep', label: 'Randevu talep edin' }, { href: '#alanlar', label: 'Hukuk alanlarını görün' }],
    },
    close: { h2: 'Rosenheim’da ilk görüşme için randevu alın', line: 'İlk görüşme ücretsizdir: telefonla, e-postayla ya da büroda.', photo: 'ludwig', pos: '50% 62%' },
  });
  home.sections = [
    split(home, {
      id: 'alanlar', photo: 'shelves', pos: '45% 80%',
      h2: 'Büronun hukuk alanları',
      lead: 'Uzmanlık alanı yabancılar ve iltica hukukudur. Bireyler ve şirketler dört alanda daha danışmanlık ve temsil hizmeti alır.',
      body: rows([
        { name: 'Yabancılar ve iltica hukuku', line: 'Oturum izinleri, vatandaşlığa geçiş, aile birleşimi, iltica süreci ve kararlara karşı dava.', value: 'Uzman avukat' },
        { name: 'Aile hukuku', line: 'Ayrılık, boşanma, nafaka, velayet ve görüşme hakkı.' },
        { name: 'İş hukuku', line: 'İşten çıkarma, tazminat, iş sözleşmesi ve bonservis.' },
        { name: 'Ceza hukuku', line: 'Soruşturma ve ceza davasında savunma.' },
        { name: 'Trafik hukuku', line: 'Kaza sonrası tazminat, para cezası ve ehliyet.' },
      ]) + `\n        <p class="split__more"><a class="link" href="${home.p}${AREAS}">Hukuk alanlarını ayrıntılı okuyun</a></p>`,
    }),
    statement({
      id: 'diller', label: 'Diller',
      text: 'Davanızı <strong>kendi dilinizde</strong> anlatırsınız: Türkçe, Almanca, İngilizce ya da İtalyanca. Kürtçe ve Arapça için büro, tercümanlarla yakın çalışır.',
      after: LANGROW,
    }),
    chapters(home, {
      id: 'surec', h2: 'Vekâlet süreci nasıl işler',
      steps: [
        { title: 'İlk görüşme ücretsiz', photo: 'penwood', text: 'Konunuzu telefonla, e-postayla ya da büroda anlatırsınız. Sürecin nasıl ilerleyeceğini ve tahmini masrafları öğrenirsiniz.' },
        { title: 'Belgelerin incelenmesi', photo: 'volumes', text: 'Kararlar, sözleşmeler ve yazışmalar incelenir. Durumunuz hakkında bir değerlendirme ve izlenecek yol için bir öneri alırsınız.' },
        { title: 'Makamlar ve mahkemeler önünde temsil', photo: 'justiz', text: 'Büro; makamlar, karşı taraf ve sigortalarla yazışmaları yürütür ve sizi mahkemede temsil eder.' },
      ],
    }),
    split(home, {
      id: 'avukat', photo: 'harvard', pos: '50% 50%',
      h2: 'Dr. Kenan Ertunc M.A.',
      lead: 'Avukat ve göç hukuku uzman avukatı; Münih Barosu (Rechtsanwaltskammer München) ve Alman Avukatlar Birliği (DAV) üyesi.',
      body: rows([
        { name: 'Eğitim', line: 'Bremen, Saarbrücken ve Milano’da hukuk, çalışma bilimi ve Avrupa çalışmaları.' },
        { name: 'Doktora', line: 'Milano Üniversitesi, Graduate School for Social and Political Science.' },
        { name: 'Araştırma', line: 'Warwick Business School ve Cambridge Üniversitesi’nde misafir araştırmacı.' },
        { name: 'Meslek', line: 'Münih’te uluslararası bir hukuk bürosunda avukat ve şirket hukuk müşaviri.' },
      ]) + `\n        <p class="split__more"><a class="link" href="${home.p}${LAWYER}">Özgeçmişi ve yayınları okuyun</a></p>`,
    }),
    fees(home, {
      id: 'ucretler', photo: 'intl', pos: '50% 45%',
      h2: 'Ücretler ve faturalama',
      lead: 'İlk görüşme ücretsizdir. Sonrasında nasıl faturalanacağı, vekâlet başlamadan önce belirlenir.',
      link: { href: CONTACT + '#talep', label: 'Masrafları görüşmek için yazın' },
      items: [
        { value: 'RVG', name: 'Yasal ücret tarifesi', line: 'Avukatlık Ücret Kanunu’na (RVG) göre, dava değerine bağlı olarak.' },
        { value: 'Saatlik', name: 'Saat ücreti', line: 'Önceden kararlaştırılan saat ücretiyle harcanan süre faturalanır.' },
        { value: 'Sabit', name: 'Götürü ücret', line: 'Kapsamı belli bir iş için sabit bir tutar kararlaştırılır.' },
      ],
    }),
  ];

  const lawyer = { p: '../../' };
  Object.assign(lawyer, {
    lang: 'tr', out: LAWYER + 'index.html', navKey: 'avukat',
    title: 'Dr. Kenan Ertunc M.A.: Alman hukukunda avukat ve göç hukuku uzmanı',
    desc: 'Dr. Kenan Ertunc’un özgeçmişi: Bremen, Saarbrücken ve Milano’da eğitim, Milano’da doktora, Warwick ve Cambridge’de araştırma, Münih ve Rosenheim’da avukatlık.',
    alternates: alt('rechtsanwalt/', LAWYER, 'english/dr-kenan-ertunc-m/'),
    langLinks: { de: 'rechtsanwalt/', en: 'english/dr-kenan-ertunc-m/' },
    moments: ['picture-develops'],
    hero: {
      photo: 'harvard', pos: '50% 50%',
      h1: 'Avukat Dr. Kenan Ertunc M.A.',
      lead: 'Rosenheim’da göç hukuku uzman avukatı. Almanya ve İtalya’da eğitim ve doktora, Warwick ve Cambridge’de araştırma, Münih’te uluslararası bir hukuk bürosunda deneyim.',
      buttons: [{ href: CONTACT + '#talep', label: 'Randevu talep edin' }, { href: '#ozgecmis', label: 'Özgeçmişi görün' }],
    },
    close: { h2: 'Dr. Ertunc ile görüşme talep edin', line: 'İlk görüşme ücretsizdir: telefonla, e-postayla ya da büroda.', photo: 'mittertor', pos: '50% 55%' },
  });
  lawyer.sections = [
    split(lawyer, {
      id: 'ozgecmis', photo: 'lesesaal', develop: true, pos: '50% 50%', cls: 'ph-short',
      h2: 'Özgeçmiş',
      lead: 'Dört ülkede eğitim, araştırma ve meslek deneyimi.',
      body: rows([
        { name: 'Eğitim', line: 'Bremen, Saarbrücken ve Milano’da hukuk, çalışma bilimi ve Avrupa çalışmaları.' },
        { name: 'Staj (Referendariat)', line: 'Saarland Yüksek Eyalet Mahkemesi, Saarbrücken.' },
        { name: 'Doktora', line: 'Milano Üniversitesi, Graduate School for Social and Political Science.' },
        { name: 'Araştırma', line: 'Warwick Business School Industrial Relations Research Unit, Cambridge Üniversitesi Centre for Business Research; Warwick Law School’da araştırma görevlisi.' },
        { name: 'Uluslararası kurumlar', line: 'Cenevre’de Uluslararası Çalışma Örgütü (ILO), Brüksel’de Avrupa Sendikalar Enstitüsü (ETUI).' },
        { name: 'Meslek', line: 'Münih’te bir danışmanlık şirketinde hukuk müşaviri ve uluslararası bir hukuk bürosunda avukat.' },
      ]),
    }),
    split(lawyer, {
      id: 'yayinlar', photo: 'intl', pos: '40% 50%',
      h2: 'Yayınlar ve üyelikler',
      lead: 'Göç hukuku uzmanlık eğitimi (Fachanwalt für Migrationsrecht). Türkçe, Almanca, İngilizce ve İtalyanca danışmanlık; Kürtçe ve Arapça için tercüman.',
      body: rows([
        { name: '<a class="link" href="https://trs.sagepub.com/content/19/2/281.short" rel="noopener" lang="en">Fundamental Social Rights in the European Multilevel Governance System</a>', line: 'Transfer: European Review of Labour and Research, 2013, s. 281.' },
        { name: '<a class="link" href="https://air.unimi.it/handle/2434/233514" rel="noopener" lang="en">The Legal Implications of the Social Market Economy on the European Economic Constitution</a>', line: 'Doktora tezi, Milano Üniversitesi, 2014.' },
        { name: 'Üyelikler', line: 'Münih Barosu (Rechtsanwaltskammer München), Alman Avukatlar Birliği (Deutscher Anwaltverein).' },
      ]),
    }),
  ];

  const areas = { p: '../../' };
  Object.assign(areas, {
    lang: 'tr', out: AREAS + 'index.html', navKey: 'alanlar',
    title: 'Hukuk alanları: göç, aile, iş, ceza ve trafik hukuku, Rosenheim',
    desc: 'Yabancılar ve iltica hukukunda uzman avukat desteği; ayrıca aile, iş, ceza ve trafik hukuku. Bireyler ve şirketler için.',
    alternates: alt('rechtsgebiete/', AREAS, 'english/practice-areas/'),
    langLinks: { de: 'rechtsgebiete/', en: 'english/practice-areas/' },
    moments: ['word-highlight'],
    hero: {
      photo: 'shelves', pos: '45% 50%',
      h1: 'Dr. Ertunc hukuk bürosunun alanları',
      lead: 'Yabancılar ve iltica hukukunda uzman avukat desteği; ayrıca aile, iş, ceza ve trafik hukuku. Rosenheim’da bireyler ve şirketler için.',
      buttons: [{ href: CONTACT + '#talep', label: 'Randevu talep edin' }, { href: '#goc-hukuku', label: 'Göç hukukunu görün' }],
    },
    close: { h2: 'Konunuzu büroyla görüşün', line: 'İlk görüşme ücretsizdir: telefonla, e-postayla ya da büroda.', photo: 'ludwig', pos: '50% 62%' },
  });
  areas.sections = [
    split(areas, {
      id: 'goc-hukuku', photo: 'justiz', pos: '50% 55%',
      h2: 'Yabancılar ve iltica hukuku',
      lead: 'Dr. Ertunc, göç hukuku uzman avukatı unvanını taşır. Büro, özellikle şu konularda danışmanlık ve temsil hizmeti verir:',
      body: rows([
        { name: 'Oturum', line: 'Oturum izni, süresiz oturum izni, uzatma ve daimi oturum.' },
        { name: 'Vatandaşlık', line: 'Başvuru, şartlar ve ret kararına itiraz.' },
        { name: 'Aile birleşimi ve vize', line: 'Eş ve çocukların yanınıza gelmesi, vize süreci.' },
        { name: 'İltica süreci', line: 'Mülakat, karar ve idare mahkemesinde dava.' },
        { name: 'Sınır dışı etme', line: 'Acil hukuki koruma ve yabancılar dairesi karşısında temsil.' },
      ]),
    }),
    statement({
      id: 'baglanti', label: 'Bağlantılar',
      text: 'Bir ceza kararı, bir boşanma ya da bir işten çıkarma <strong>oturum hakkınızı</strong> etkileyebilir. Büro her iki tarafı da bildiği için bu sonuçlar baştan birlikte değerlendirilir.',
      after: '<ul class="lang-row lang-row--3"><li lang="de">§ 54 AufenthG<small>Mahkûmiyet sonrası sınır dışı etme menfaati</small></li><li lang="de">§ 31 AufenthG<small>Ayrılıktan sonra eşin bağımsız oturum hakkı</small></li><li lang="de">§ 18 ff. AufenthG<small>Çalışma amaçlı oturum</small></li></ul>',
    }),
    split(areas, {
      id: 'diger', photo: 'volumes', pos: '50% 50%',
      h2: 'Aile, iş, ceza ve trafik hukuku',
      lead: 'Mahkeme dışında ve mahkemede danışmanlık ve temsil.',
      body: rows([
        { id: 'aile-hukuku', name: 'Aile hukuku', line: 'Ayrılık ve boşanma, çocuk ve eş nafakası, velayet ve görüşme hakkı, mal paylaşımı.' },
        { id: 'is-hukuku', name: 'İş hukuku', line: 'İşe iade davası, tazminat, iş sözleşmesi ve bonservis; çalışanlar ve işverenler için.' },
        { id: 'ceza-hukuku', name: 'Ceza hukuku', line: 'Soruşturmada, ceza emrinde (Strafbefehl) ve duruşmada savunma.' },
        { id: 'trafik-hukuku', name: 'Trafik hukuku', line: 'Kaza tazminatı, para cezası süreci, sürüş yasağı ve ehliyet.' },
      ]),
    }),
  ];

  const contact = { p: '../../' };
  Object.assign(contact, {
    lang: 'tr', out: CONTACT + 'index.html', navKey: 'iletisim',
    title: 'İletişim: Dr. Ertunc hukuk bürosu, Adlzreiterstraße 2, Rosenheim',
    desc: 'İlk görüşme için randevu: telefon 08031 209 24 48, info@rechtsanwalt-ertunc.com adresine e-posta ya da talep formu.',
    alternates: alt('kontakt/', CONTACT, 'english/contact-us/'),
    langLinks: { de: 'kontakt/', en: 'english/contact-us/' },
    moments: ['picture-develops'],
    hero: {
      photo: 'mittertor', pos: '50% 45%',
      h1: 'Rosenheim’daki büroyla iletişim',
      lead: 'Adlzreiterstraße 2, 83022 Rosenheim. Arayın, e-posta yazın ya da talebinizi formla gönderin. Türkçe yazabilirsiniz.',
      buttons: [{ href: '#talep', label: 'Randevu talep edin' }, { href: PHONE.href, label: `${PHONE.label} arayın` }],
    },
    close: { h2: 'Doğrudan aramayı mı tercih edersiniz', line: `Telefon ${PHONE.label}, faks ${FAX}.`, photo: 'shelves', pos: '45% 50%' },
  });
  contact.sections = [
    `  <section class="section" id="talep" style="--hm: 2" aria-labelledby="talep-h">
    <div class="wrap grid grid--top">
      <div class="span-5">
        <div class="section-head">
          <h2 id="talep-h">İlk görüşme için randevu</h2>
          <p>Konunuzu birkaç cümleyle anlatın. Büro size e-postayla ya da telefonla geri döner. İlk görüşme ücretsizdir.</p>
        </div>
        ${rows([
          { name: 'Telefon', value: `<a class="link" href="${PHONE.href}">${PHONE.label}</a>` },
          { name: 'Faks', value: FAX },
          { name: 'E-posta', value: `<a class="link" href="mailto:${EMAIL}">${EMAIL}</a>` },
        ], 'rows contact-rows')}
      </div>
      <div class="form-panel span-6 start-7">
        ${form(contact, FORM)}
      </div>
    </div>
  </section>
`,
    split(contact, {
      id: 'yol-tarifi', photo: 'ludwig', develop: true, pos: '50% 62%', cls: 'stack-tab',
      h2: 'Büroya nasıl ulaşılır',
      lead: 'Büro, Rosenheim şehir merkezindedir.',
      body: `<address class="contact-address">Adlzreiterstraße 2<br>83022 Rosenheim</address>
        <p class="split__more"><a class="link" href="${MAP}" rel="noopener">Yol tarifi alın</a></p>
        ${rows([
          { name: 'Diller', line: 'Türkçe, Almanca, İngilizce, İtalyanca; Kürtçe ve Arapça için tercüman.' },
          { name: 'Bağlı olunan baro', line: 'Münih Barosu (Rechtsanwaltskammer München).' },
        ])}`,
    }),
  ];
  return [home, lawyer, areas, contact];
}
