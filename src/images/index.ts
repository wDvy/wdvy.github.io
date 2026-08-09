// Centralized image paths for assets in public folder
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string) {
  if (!path.startsWith('/') || !basePath) {
    return path;
  }

  return `${basePath}${path}`;
}

export const Logo = withBasePath('/assets/Images/NewLogoPurple+Shadow1.png');
export const Banner = withBasePath('/assets/Images/Eventbrite Banner.webp');
export const SantaMagic = withBasePath('/assets/Images/santa&magic.jpg');
export const Lorehollow2025 = withBasePath('/assets/Images/2025Lorehollow.jpg');
export const Puzzle2025 = withBasePath('/assets/Images/2025puzzle.jpg');
export const Wlky = withBasePath('/assets/Images/wlky.jpg');
export const divider = withBasePath(
  '/assets/Images/dividers/Dividers_Golden_SVG/Dividers_golden_05.svg'
);
export const smallLogo = withBasePath('/assets/Images/smallLogo.psd.png');
export const GazetteHeader = withBasePath('/assets/Images/gazette/marketGazetteHeader.png');
export const GazetteBackground = withBasePath('/assets/Images/gazette/GazetteBackground.png');
export const GazetteFooter = withBasePath('/assets/Images/gazette/GazetteFooter.png');
export const GazetteDivider = withBasePath('/assets/Images/gazette/GazetteDivider.png');
export const ExtraExtra = withBasePath('/assets/Images/gazette/ExtraExtra.png');
export const StoryRedacted = withBasePath('/assets/Images/gazette/StoryRedacted.png');

export const divider2 = withBasePath(
  '/assets/Images/dividers/Dividers_Golden_SVG/Dividers_golden_04.svg'
);
export const magicDude = withBasePath('/assets/Images/magicFella.jpg');
export const HeroVideo = withBasePath('/assets/video/HeroVid.mp4');
export const LorehollowTransparent = withBasePath(
  '/assets/Images/Lorehollow/LorehollowCrests-Main.png'
);
export const LorehollowGreen = withBasePath('/assets/Images/Lorehollow/LorehollowCrests-Main.png');
export const LorehollowTan = withBasePath('/assets/Images/Lorehollow/LorehollowCrests-Main.png');

// Markies and professor
export const Amaryllis = withBasePath('/assets/Images/Markies/Amaryllis.png');
export const MarketMaster = withBasePath('/assets/Images/Markies/MarketMaster.png');
export const Sable = withBasePath('/assets/Images/Markies/Sable.png');
export const LexiQuill = withBasePath('/assets/Images/Markies/LexiQuill.png');
export const Otho = withBasePath('/assets/Images/Markies/Otho.png');

export const Vesper = withBasePath('/assets/Images/Lorehollow/VesperNightingale.png');
export const Evanora = withBasePath('/assets/Images/Lorehollow/EvanoraLace.png');

export const VictorCreo = withBasePath('/assets/Images/Lorehollow/VictorCreo.png');

//Lorehollow
export const AshThornCrest = withBasePath('/assets/Images/Lorehollow/Ashthorn.webp');
export const IronstagCrest = withBasePath('/assets/Images/Lorehollow/Ironstag.webp');
export const WraithpineCrest = withBasePath('/assets/Images/Lorehollow/Wraithpine.webp');
export const BriarfangCrest = withBasePath('/assets/Images/Lorehollow/Briarfang.webp');
export const StormhollowCrest = withBasePath('/assets/Images/Lorehollow/Stormbreak.webp');
export const EmberwyldCrest = withBasePath('/assets/Images/Lorehollow/Emberwyld.webp');
//transparent versions
export const AshThornCrestTransparent = withBasePath(
  '/assets/Images/Lorehollow/LorehollowCrests-Ashthorn.png'
);
export const IronstagCrestTransparent = withBasePath(
  '/assets/Images/Lorehollow/LorehollowCrests-Ironstag.png'
);
export const WraithpineCrestTransparent = withBasePath(
  '/assets/Images/Lorehollow/LorehollowCrests-Wraithpine.png'
);
export const BriarfangCrestTransparent = withBasePath(
  '/assets/Images/Lorehollow/LorehollowCrests-Briarfang.png'
);
export const StormhollowCrestTransparent = withBasePath(
  '/assets/Images/Lorehollow/LorehollowCrests-Stormbreak.png'
);
export const EmberwyldCrestTransparent = withBasePath(
  '/assets/Images/Lorehollow/LorehollowCrests-Emberwyld.png'
);

//Gazette
export const GazetteOverlay = withBasePath('/assets/Images/gazette/MarketGazette-template.png');
