export const FESTIVAL = {
  current: {
    title: '제6회 코드페스티벌',
    href: '/festival/6',
    date: '2024-10-31T18:00:00+09:00',
    registrationDeadline: '2024-10-23T23:59:59+09:00',
    registrationLink: 'https://forms.gle/dGGqMTxni4RL2Moq7',
  },
};

export const MENU = [
  { ...FESTIVAL.current },
  {
    title: 'FAQ',
    href: '/faq',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
