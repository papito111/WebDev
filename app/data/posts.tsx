export interface Post {
  id: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Pierwszy post',
    content: 'To jest treść pierwszego posta. Piszę tutaj o moich doświadczeniach z Next.js i React.',
  },
  {
    id: '2',
    title: 'Drugi post',
    content: 'Oto treść drugiego posta. Tutaj opisuję różne aspekty programowania w JavaScript.',
  },
  {
    id: '3',
    title: 'Trzeci post',
    content: 'W trzecim poście skupiam się na Tailwind CSS i jego integracji z projektami Next.js.',
  },
  {
    id: '4',
    title: 'Czwarty post',
    content: 'Opisuję tutaj najlepsze praktyki tworzenia komponentów w React z użyciem TypeScript.',
  },
  {
    id: '5',
    title: 'Piąty post',
    content: 'Jak zarządzać stanem w aplikacjach React przy użyciu Context API i Redux.',
  },
  {
    id: '6',
    title: 'Szósty post',
    content: 'Tworzenie wydajnych aplikacji z Next.js – optymalizacja obrazu, dynamiczne ładowanie modułów.',
  },
  {
    id: '7',
    title: 'Siódmy post',
    content: 'Testowanie komponentów React przy użyciu biblioteki Testing Library i Jest.',
  },
  {
    id: '8',
    title: 'Ósmy post',
    content: 'Wprowadzenie do animacji w CSS i ich wykorzystanie z Tailwind CSS.',
  },
  {
    id: '9',
    title: 'Dziewiąty post',
    content: 'Tworzenie dynamicznych routów w Next.js i renderowanie stron po stronie serwera.',
  },
  {
    id: '10',
    title: 'Dziesiąty post',
    content: 'Automatyczne formatowanie kodu w projekcie Next.js przy użyciu Prettier i ESLint.',
  },
  {
    id: '11',
    title: 'Jedenasty post',
    content: 'Zarządzanie środowiskiem deweloperskim – konfiguracja plików .env w projektach.',
  },
  {
    id: '12',
    title: 'Dwunasty post',
    content: 'Porównanie różnych frameworków CSS dla React: Tailwind CSS, Bootstrap i Bulma.',
  },
];
