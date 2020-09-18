import saveForRetirement from 'assets/save_for_retirement.png';
import handsWithPhone from 'assets/hands_with_phone.png';
import puzzlePieces from 'assets/puzzle_pieces.png';
import saveForCollege from 'assets/save_for_college.png';
import womanWithBag from 'assets/woman_with_bag.png';
import womanWithFlower from 'assets/woman_with_flower.png';

export const PRODUCTS_NAME = 'Products';
export const LEARN_CENTER_NAME = 'Learn Center';
export const ABOUT_US_NAME = 'About Us';

export const PRODUCTS = {
  LIFE: 'Life',
  HOME: 'Home',
  AUTO: 'Auto',
  RENTERS: 'Renters',
  HEALTH: 'Health',
  PET: 'Pet',
};

const navLinks = [
  {
    id: 0,
    name: PRODUCTS_NAME,
    children: [
      {
        id: 0,
        name: PRODUCTS.LIFE,
        ctaText: 'Get Life Insurance',
        image: saveForRetirement,
        alt: 'Save For retirement',
        width: 250,
        columns: [
          {
            id: 0,
            name: 'Find A Policy',
            links: [
              { id: 0, name: 'Life Insurance Guide', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Life Insurance Caluclator', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 2, name: 'Term Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 3, name: 'Whole Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 4, name: 'Term vs Whole Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 5, name: 'No Medical Exam Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
            ],
          },
          {
            id: 1,
            name: 'Get Advice',
            links: [
              { id: 0, name: 'How To Buy Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Types of Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              {
                id: 2,
                name: 'How Much Life Insurance Do I need?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 3,
                name: 'How Much Does Life Insurance Cost?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 4,
                name: 'How Long Should My Life Insurance Coverage Last?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: PRODUCTS.HOME,
        ctaText: 'Get Home Insurance',
        image: handsWithPhone,
        alt: 'Hands with phone',
        width: 300,
        columns: [
          {
            id: 0,
            name: 'Find A Policy',
            links: [
              { id: 0, name: 'Homeowners Inurance Guide', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Homeowners Insurance Calculator', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 2, name: 'Bundling Home and Auto Insurance', href: 'https://www.policygenius.com/life-insurance/' },
            ],
          },
          {
            id: 1,
            name: 'Get Advice',
            links: [
              { id: 0, name: 'How To Buy Homeowners Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              {
                id: 1,
                name: 'How Much Does Homeowners Insurance Cost',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 2,
                name: 'How Much Homeowners Insurance Do I need?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 3,
                name: 'Learn More About Homeowners Insurance',
                href: 'https://www.policygenius.com/life-insurance/',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: PRODUCTS.AUTO,
        ctaText: 'Get Auto Insurance',
        image: puzzlePieces,
        alt: 'Puzzle pieces',
        width: 300,
        columns: [
          {
            id: 0,
            name: 'Find A Policy',
            links: [
              { id: 0, name: 'Auto Insurance Guide', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Auto Insurance Quotes', href: 'https://www.policygenius.com/life-insurance/' },
            ],
          },
          {
            id: 1,
            name: 'Get Advice',
            links: [
              { id: 0, name: 'How To Buy Car Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'How Much Does Car Insurance Cost', href: 'https://www.policygenius.com/life-insurance/' },
              {
                id: 2,
                name: 'How Much Car Insurance Do I need?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 3,
                name: 'Learn More About Car Insurance',
                href: 'https://www.policygenius.com/life-insurance/',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: PRODUCTS.RENTERS,
        ctaText: 'Get Renters Insurance',
        image: saveForCollege,
        alt: 'Save for college',
        width: 300,
        columns: [
          {
            id: 0,
            name: 'Find A Policy',
            links: [
              { id: 0, name: 'Renters Insurance Guide', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Renters Insurance Caluclator', href: 'https://www.policygenius.com/life-insurance/' },
            ],
          },
          {
            id: 1,
            name: 'Get Advice',
            links: [
              {
                id: 0,
                name: 'What Does Renters Insurance Cover?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 1,
                name: 'How Much Does Renters Insurance Cost?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 2,
                name: 'Learn More About Renters Insurance',
                href: 'https://www.policygenius.com/life-insurance/',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: PRODUCTS.HEALTH,
        ctaText: 'Get Health Insurance',
        image: womanWithBag,
        alt: 'Woman with bag',
        width: 250,
        columns: [
          {
            id: 0,
            name: 'Find A Policy',
            links: [
              { id: 0, name: 'Health Insurance Guide', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Health Insurance Caluclator', href: 'https://www.policygenius.com/life-insurance/' },
            ],
          },
          {
            id: 1,
            name: 'Get Advice',
            links: [
              { id: 0, name: 'How To Buy Health Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Types of Health Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              {
                id: 2,
                name: 'How Much Health Insurance Do I need?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: PRODUCTS.PET,
        ctaText: 'Get Pet Insurance',
        image: womanWithFlower,
        alt: 'Woman with flower',
        width: 250,
        columns: [
          {
            id: 0,
            name: 'Find A Policy',
            links: [
              { id: 0, name: 'Life Insurance Guide', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Life Insurance Caluclator', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 2, name: 'Term Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 3, name: 'Whole Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 4, name: 'Term vs Whole Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 5, name: 'No Medical Exam Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
            ],
          },
          {
            id: 1,
            name: 'Get Advice',
            links: [
              { id: 0, name: 'How To Buy Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              { id: 1, name: 'Types of Life Insurance', href: 'https://www.policygenius.com/life-insurance/' },
              {
                id: 2,
                name: 'How Much Life Insurance Do I need?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 3,
                name: 'How Much Does Life Insurance Cost?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
              {
                id: 4,
                name: 'How Long Should My Life Insurance Coverage Last?',
                href: 'https://www.policygenius.com/life-insurance/',
              },
            ],
          },
        ],
      },
    ],
  },
  { id: 1, name: LEARN_CENTER_NAME },
  { id: 2, name: ABOUT_US_NAME, children: [{ id: 0, name: 'About Us' }] },
];

export default navLinks;
