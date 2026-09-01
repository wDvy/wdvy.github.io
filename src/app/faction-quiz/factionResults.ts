import {
  GazetteOverlay,
  LorehollowTransparent,
  MarketMaster,
  Vesper,
  VictorCreo,
  magicDude,
} from '../../images';

export const FACTION_RESULTS = {
  markie: {
    title: 'Markies',
    principles: [
      'Live and let live',
      'Protect your found family',
      'Snitches get stitches',
      'Follow your heart',
      'Passionate, independent, crafty',
    ],
    image: MarketMaster,
    imageAlt: 'Markies',
    description:
      'Markies are the family at the heart of the marketplace composed of vendors and longtime frequent guests. True Markies are distinguished by the golden key pin, allowing them access into all parts of the marketplace. Markies owe allegiance to no one individual or cause except the marketplace and the Market Master. The Market Master has complete control and authority over doings in the marketplace, so all Markies are subject to his whim. Since the marketplace travels all over the world, Markies tend to remain aloof from individual city drama. For example, you won’t find many markies pledging allegiance or fidelity to either Lorehollow or the Veilbreakers, though many will be interested in the drama. Markies prize their found family and protect their own, no matter what.',
  },
  'The Marketplace Gazette': {
    title: 'The Marketplace Gazette',
    principles: [
      'The truth at any cost',
      'The public deserves to know',
      'The good, the bad, the ugly, all deserve to be printed, no matter the consequence',
      'Eagle-eyed, wary, truthful',
    ],
    image: GazetteOverlay,
    imageAlt: 'The Marketplace Gazette',
    description:
      'The Marketplace Gazette, founded by Evelyn Stokes, editor-in-chief, with the mandate to investigate the various mysteries of the Marketplace, is the only traveling magical printing house of its kind. Led by their fearless leader, Evelyn, reporters of the Gazette hunt down new leads by interviewing Markies and guests alike. This year, they’re focusing on uncovering the reason behind the string of unexplained disappearances at the marketplace which has gone unexamined since they began… The members of the Marketplace Gazette seek truth above all… and will stop at nothing to get it.',
  },
  "Hecate's Torch": {
    title: "Hecate's Torch",
    principles: [
      'The strong will protect the weak',
      'A life of service',
      'Authority and law keep us safe',
      'The world is black and white, wrong or right',
      'Loyal, dedicated, steadfast',
    ],
    image: magicDude,
    imageAlt: "Hecate's Torch",
    description:
      'An international coalition of talented magic users dedicated to upholding magical law. Hecate’s Hand is the ultimate expression of justice - judge, jury and executioner. Lorehollow is one of the recruiting houses that sends prospective members for this elite society’s training. Commonly referred to as “The Torch.” Members of Hecate’s Torch will stop at nothing to uncover the Veilbreaker’s insidious plot to steal and misuse the magic of the dead. They are also highly suspicious of the tactics and power hoarded by the Family Nightingale.',
  },
  Lorehollow: {
    title: 'Lorehollow',
    principles: [
      'Appreciates education and training',
      'Think there should be ethical bounds around power and magic',
      'Respect professors, the dead, and our ancestors',
      'Respectful, careful, compassionate',
    ],
    image: LorehollowTransparent,
    imageAlt: 'Lorehollow colored crest',
    description:
      'Louisville’s magical school for higher education in the arcane arts. Lorehollow presents itself as a bastion of peace and ethical magic use, in balance with the non-magical world. Along with other magical schools, keepers of the Veil between the living world and the world of the dead as well as magical laws and enforcement violating the law of secrecy. Lorehollow professors and students vow to uphold magical society and protect magic users and non-magical folk alike from improper and dangerous magical interference.',
  },
  'The Family Nightingale': {
    title: 'The Family Nightingale',
    principles: [
      'Great power should be reserved for a careful few',
      'You should have to constantly prove yourself to be worthy',
      'Those who are unworthy don’t matter',
      'Measured, reserved, effective',
    ],
    image: Vesper,
    imageAlt: 'Nightingale Crest',
    description:
      'A highly respected magical ‘made’ family who select new members by an individual’s potential for magical achievement. The Nightingale name opens doors, literally and metaphorically. Nightingale family members gain wealth, status, and a highly secret new power that helps them excel beyond any normal magic user. In exchange for these perks, the family demands strict loyalty and obedience. Family members are paired for optimal breeding of the most powerful lines, though offspring are not always guaranteed a spot in the family. New family members undergo an intense initiation ritual and emerge ‘changed.’ The family Nightingale values power and loyalty to the name.',
  },
  Veilbreakers: {
    title: 'Veilbreakers',
    principles: [
      'No bounds to power or individual achievement',
      'Rebel against preconceived notions',
      'Down with authority',
      'Do what you can get away with',
      'Defiant, bold, cunning',
    ],
    image: VictorCreo,
    imageAlt: 'Veilbreakers',
    description:
      'Magic users who defy Lorehollow’s (and larger magical society’s) tenets of ethical magical use in balance with the non-magical world. Veilbreakers want to use the wealth of magical power held behind the veil in the form of the souls of the dead to create a society of powerful magical users. Unspoken is their intent to establish this society as dominant to non-magical society. Also unspoken is the vast sacrifice necessary in order to completely ‘break’ the veil. Who is paying the ultimate cost? The Veilbreakers say they want magical equality - liberation from elitist schools and families like the Nightingale, but what are they willing to do to get it?',
  },
} as const;

export function getFactionResult(faction: string | null) {
  if (!faction || !(faction in FACTION_RESULTS)) return null;
  return FACTION_RESULTS[faction as keyof typeof FACTION_RESULTS];
}
