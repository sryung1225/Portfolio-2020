console.clear();

gsap.registerPlugin(MorphSVGPlugin);

const charMorphs = [
  returnPathArray("#morphs #morph-m"),
  returnPathArray("#morphs #morph-o"),
  returnPathArray("#morphs #morph-n"),
  returnPathArray("#morphs #morph-y1"),
  returnPathArray("#morphs #morph-a"),
  returnPathArray("#morphs #morph-y2")
];
const shadowMorphs = [
  returnPathArray("#morphs #shadow-morph-m"),
  returnPathArray("#morphs #shadow-morph-o"),
  returnPathArray("#morphs #shadow-morph-n"),
  returnPathArray("#morphs #shadow-morph-y1"),
  returnPathArray("#morphs #shadow-morph-a"),
  returnPathArray("#morphs #shadow-morph-y2")
];

const chars = [
  returnPathArray("#original #m"),
  returnPathArray("#original #o"),
  returnPathArray("#original #n"),
  returnPathArray("#original #y1"),
  returnPathArray("#original #a"),
  returnPathArray("#original #y2")
];
const shadows = [
  returnPathArray("#original #shadow-m"),
  returnPathArray("#original #shadow-o"),
  returnPathArray("#original #shadow-n"),
  returnPathArray("#original #shadow-y1"),
  returnPathArray("#original #shadow-a"),
  returnPathArray("#original #shadow-y2")
];

const TL_DEFAULTS = {
  duration: 0.8,
  repeat: -1,
  repeatDelay: 0.08 * chars.length,
  ease: 'elastic.inOut',
  yoyo: true
};

let charTl = gsap.timeline({ defaults: TL_DEFAULTS });
let shadowTl = gsap.timeline({ defaults: TL_DEFAULTS });

chars.forEach((char, index) => {
  charTl.to(chars[index], {
    morphSVG: (i) => charMorphs[index][i]
  }, index != 0 ? '-=0.72' : 0 );
  shadowTl.to(shadows[index], {
    morphSVG: (i) => shadowMorphs[index][i]
  }, index != 0 ? '-=0.72' : 0);
});

function returnPathArray(selectorString) {
  return gsap.utils.toArray(`${selectorString} path`);
}