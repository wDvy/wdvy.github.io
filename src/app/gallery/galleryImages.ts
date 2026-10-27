import {
  GalleryAmaryllis,
  GalleryAmaryllis2,
  GalleryHopGossip,
  GalleryLorehollow,
  GalleryMarkies,
  GalleryPointyHat,
  GalleryPuzzle,
  GalleryPuzzle2,
  GalleryPuzzle3,
  GalleryPuzzle4,
  GalleryQuest,
  GalleryYuh,
} from '../../images';

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

// Add new photos here: drop the file in public/assets/Images/gallery, export it from src/images,
// then add an entry below.
export const galleryImages: GalleryImage[] = [
  {
    src: GalleryLorehollow,
    alt: 'Two guests posing in front of the painted Lorehollow mural',
    caption: 'Lorehollow',
  },
  {
    src: GalleryAmaryllis2,
    alt: 'Amaryllis in a black hat and plaid shawl',
    caption: 'Amaryllis',
  },
  {
    src: GalleryPointyHat,
    alt: 'A smiling vendor in a witch hat and cloak in front of The Pointy Hat Shoppe banner',
    caption: 'The Pointy Hat Shoppe',
  },
  {
    src: GalleryPuzzle,
    alt: 'A guest in a blue wig examines framed pictures with a magnifying glass by flashlight',
    caption: 'Hunting for clues',
  },
  {
    src: GalleryMarkies,
    alt: 'Two Markies in costume smiling for a selfie in front of wooden barrels',
  },
  {
    src: GalleryPuzzle4,
    alt: 'A guest in a wizard hat and embroidered coat inspects a wall of frames with a magnifying glass',
    caption: 'Solving the puzzle',
  },
  {
    src: GalleryHopGossip,
    alt: 'A bartender holding up a green cocktail with a finger to their lips',
    caption: 'Cocktails from The Hop Gossip',
  },
  {
    src: GalleryQuest,
    alt: 'A guest signing the quest book while a costumed character looks on',
  },
  {
    src: GalleryPuzzle2,
    alt: 'A guest writing in a notebook beside a brass candlestick',
  },
  {
    src: GalleryAmaryllis,
    alt: 'Amaryllis laughing in the market',
  },
  {
    src: GalleryPuzzle3,
    alt: 'A guest in a horned veil headpiece writing in a notebook',
  },
  {
    src: GalleryYuh,
    alt: 'Two guests striking a pose under the market canopy',
  },
];
