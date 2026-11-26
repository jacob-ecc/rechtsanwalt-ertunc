// Photographs used on the site. Every one is a licensed stand-in from Wikimedia Commons until the
// client's own photographs arrive (see README.md, "Fotos austauschen"). Each file exists in
// assets/img as photo-<id>-<width>.webp; heroes also have a 760x1600 phone crop (-phone.webp).
import { readdirSync } from 'node:fs';

const dir = new URL('../assets/img/', import.meta.url);
const files = readdirSync(dir);

// id, ratio (w/h), subject (data-subject), alt per language
export const PHOTOS = {
  pen: { id: 'f17662006', ratio: 1.5, subject: 'fountain pen on a handwritten page',
    alt: { de: 'Füllfederhalter auf einem handbeschriebenen Blatt', tr: 'El yazısıyla dolu bir sayfanın üzerinde dolma kalem', en: 'A fountain pen resting on a handwritten page' } },
  shelves: { id: 'f201613328', ratio: 1.5, subject: 'law reports on a bookshelf',
    alt: { de: 'Gesetzessammlungen und Entscheidungsbände in einem Bücherregal', tr: 'Kitaplıkta kanun ve karar derlemeleri', en: 'Law reports and statute volumes on a bookshelf' } },
  penwood: { id: 'f98501666', ratio: 1.5, subject: 'fountain pen on a wooden desk',
    alt: { de: 'Geöffneter Füllfederhalter auf einem Holztisch', tr: 'Ahşap masa üzerinde kapağı açık dolma kalem', en: 'An uncapped fountain pen on a wooden desk' } },
  volumes: { id: 'f83119900', ratio: 1.4, subject: 'leather-bound case files',
    alt: { de: 'Ledergebundene Aktenbände in einem Regal', tr: 'Rafta deri ciltli dosya ciltleri', en: 'Leather-bound case volumes on a shelf' } },
  justiz: { id: 'f130916005', ratio: 1.5, subject: 'Palace of Justice, Munich',
    alt: { de: 'Der Justizpalast in München mit Brunnen im Vordergrund', tr: 'Önünde çeşmesiyle Münih Adalet Sarayı', en: 'The Palace of Justice in Munich with its fountain in front' } },
  harvard: { id: 'f134488615', ratio: 1.5, subject: 'law library interior',
    alt: { de: 'Gang zwischen Bücherregalen in einer juristischen Bibliothek', tr: 'Bir hukuk kütüphanesinde kitap rafları arasındaki koridor', en: 'An aisle between bookcases in a law library' } },
  ludwig: { id: 'f177063630', ratio: 1.0, subject: 'Ludwigsplatz, Rosenheim',
    alt: { de: 'Der Ludwigsplatz in Rosenheim am Morgen', tr: 'Sabah saatlerinde Rosenheim’daki Ludwigsplatz', en: 'Ludwigsplatz in Rosenheim in the morning' } },
  mittertor: { id: 'f82730221', ratio: 1.26, subject: 'Mittertor, Rosenheim',
    alt: { de: 'Das Mittertor in der Rosenheimer Altstadt', tr: 'Rosenheim eski şehrindeki Mittertor', en: 'The Mittertor gate in Rosenheim’s old town' } },
  lesesaal: { id: 'f79428019', ratio: 1.5, subject: 'law library reading room',
    alt: { de: 'Lesesaal einer juristischen Bibliothek mit Holzdecke und Kronleuchtern', tr: 'Ahşap tavanlı ve avizeli bir hukuk kütüphanesi okuma salonu', en: 'A law library reading room with a timber ceiling and chandeliers' } },
  intl: { id: 'f28572353', ratio: 1.41, subject: 'books on international law',
    alt: { de: 'Ein Stapel Fachbücher zum Völkerrecht auf einem Marmortisch', tr: 'Mermer masada uluslararası hukuk kitaplarından bir yığın', en: 'A stack of books on international law on a marble table' } },
};

export function widths(id) {
  return files.map(f => f.match(new RegExp(`^photo-${id}-(\\d+)\\.webp$`))).filter(Boolean).map(m => +m[1]).sort((a, b) => a - b);
}
export const hasPhone = id => files.includes(`photo-${id}-phone.webp`);
