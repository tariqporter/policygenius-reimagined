const navLinks = [
  {
    id: 0,
    name: 'Products',
    children: [
      { id: 0, name: 'Life', ctaText: 'Get Life Insurance' },
      { id: 1, name: 'Home', ctaText: 'Get Home Insurance' },
      { id: 2, name: 'Auto', ctaText: 'Get Auto Insurance' },
      { id: 3, name: 'Renters', ctaText: 'Get Renters Insurance' },
      { id: 4, name: 'Health', ctaText: 'Get Health Insurance' },
      { id: 5, name: 'Pet', ctaText: 'Get Pet Insurance' },
    ],
  },
  { id: 1, name: 'Learn Center' },
  { id: 2, name: 'About Us', children: [{ id: 0, name: 'About Us' }] },
];

export default navLinks;
