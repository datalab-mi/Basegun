export const results = {
  revolver: {
    displayLabel: 'revolver',
    category: 'B ou D',
    mention: "B - Soumise à autorisation<br>D - Libre d'acquisition et de détention",
    isFacticeTypology: false,
  },
  pistolet_semi_auto_moderne: {
    displayLabel: 'pistolet semi-automatique moderne',
    category: 'B',
    mention: 'Soumise à autorisation',
    isFacticeTypology: true,
    stepsNumber: 4,
  },
  pistolet_a_percussion_silex: {
    displayLabel: 'pistolet à mécanisme ancien',
    category: 'D',
    mention: "Libre d'acquisition et de détention",
    isFacticeTypology: false,
  },
  autre_pistolet: {
    displayLabel: 'pistolet divers',
    category: 'A, B ou D',
    mention: "A - Interdite<br>B - Soumise à autorisation<br>D - Libre d'acquisition et de détention",
    isFacticeTypology: true,
    stepsNumber: 3,
  },
  epaule_a_percussion_silex: {
    displayLabel: "arme d'épaule à mécanisme ancien",
    category: 'D',
    mention: "Libre d'acquisition et de détention",
    isFacticeTypology: false,
  },
  epaule_a_un_coup: {
    displayLabel: "arme d'épaule à un coup par canon",
    category: 'C',
    mention: 'Soumise à déclaration',
    isFacticeTypology: false,
  },
  epaule_a_levier_sous_garde: {
    displayLabel: "arme d'épaule à levier de sous-garde",
    category: 'B ou C',
    mention: 'B - Soumise à autorisation<br>C - Soumise à déclaration',
    isFacticeTypology: false,
  },
  epaule_a_verrou: {
    displayLabel: "arme d'épaule à verrou",
    category: 'B ou C',
    mention: 'B - Soumise à autorisation<br>C - Soumise à déclaration',
    isFacticeTypology: true,
    stepsNumber: 3,
  },
  epaule_a_pompe: {
    displayLabel: "arme d'épaule à pompe",
    category: 'B ou C',
    mention: 'B - Soumise à autorisation<br>C - Soumise à déclaration',
    isFacticeTypology: false,
  },
  autre_epaule: {
    displayLabel: "arme d'épaule non manuelle",
    category: 'A, B ou C',
    mention: 'A - Interdite<br>B - Soumise à autorisation<br>C - Soumise à déclaration',
    isFacticeTypology: true,
    stepsNumber: 4,
  },
}

export const guideFactice = {
  pistolet_semi_auto_moderne: {
    levier: {
      label: 'levier',
      value: 'levier',
      text: '<span class="bold-highlight">Appuyer sur le bouton</span> avec le pouce de la main droite, puis <span class="bold-highlight">extraire le chargeur </span>avec la main gauche en le tirant ou en le laissant glisser.',
      img: 'pistol-1_0_fleche.png',
      video: 'pistol-1_sm.mp4',
    },
    bouton: {
      label: 'bouton',
      value: 'bouton',
      text: 'Pousser le  bouton vers l’arrière  avec le pouce de l’autre main, puis extraire le chargeur de la même main en le tirant ou en le laissant glisser.',
      img: 'pistol-2_0_fleche.png',
      video: 'pistol-2_sm.mp4',
    },
  },
  autre_epaule: {
    chargeur_derriere: {
      label: 'chargeur derrière la poignée',
      value: 'chargeur_derriere',
      text: 'Avec la main qui ne tient pas l’arme, soulever du pouce le levier au-dessus du pontet, et extraire le chargeur avec la même main en le faisant glisser vers le bas.',
      img: 'bullpup_0.jpg',
      video: 'bullpup_sm.mp4',
    },
    chargeur_dessus: {
      label: 'chargeur au-dessus de la poignée',
      value: 'chargeur_dessus',
      text: 'De la main qui ne tient pas l’arme, appuyer avec le pouce sur le bouton situé à l’arrière du chargeur. En même temps, tirer avec cette même main le chargeur vers le bas pour l’extraire.',
      img: 'p90_0.jpg',
      video: 'p90_sm.mp4',
    },
    levier_derriere: {
      label: 'levier derrière chargeur',
      value: 'levier_derriere',
      text: 'A l’aide de la main qui ne tient pas l’arme, appuyer avec le pouce sur le levier en maintenant le chargeur. Faire pivoter le chargeur en le poussant légèrement vers l’avant pour l’extraire de la carcasse. Puis relâcher le levier.',
      img: 'ak_0.jpg',
      video: 'ak_sm.mp4',
    },
    bouton_dessus: {
      label: 'bouton au-dessus chargeur',
      value: 'bouton_dessus',
      text: 'Tenir l’arme de la main droite. Avec l’index de cette main, appuyer sur le bouton. Avec l’autre main, tirer le chargeur vers le bas pour l’extraire de la carcasse.',
      img: 'ar_0.jpg',
      video: 'ar_sm.mp4',
    },
    levier_dessus: {
      label: 'levier au-dessus pontet',
      value: 'levier_dessus',
      text: 'De la main qui ne tient pas l’arme, pousser simultanément sur les deux boutons de part et d’autre du chargeur vers l’arrière. Puis tirer sur le chargeur vers le haut pour l’extraire de la carcasse.',
      img: 'thompson_0.jpg',
      video: 'thompson_sm.mp4',
    },
  },
  autre_pistolet:
    {
      text: '<span class="bold-highlight">Appuyer sur le bouton</span> avec le pouce de la main droite, puis <span class="bold-highlight"> extraire le chargeur </span>avec la main gauche en le tirant ou en le laissant glisser.',
      video: 'pistolet_mitrailleur_sm.mp4',
    },
  epaule_a_verrou:
    {
      text: '<span class="bold-highlight">Appuyer sur le bouton</span> avec le pouce de la main droite, puis <span class="bold-highlight"> extraire le chargeur </span>avec la main gauche en le tirant ou en le laissant glisser.',
      video: 'verrou_sm.mp4',
    },
}

const firearmDirection = 'FirearmDirection'
const selectOption = 'SelectOption'
const extractMag = 'ExtractMag'
const ammoType = 'AmmoType'

export const guideSteps = [
  firearmDirection,
  selectOption,
  extractMag,
  ammoType,
]

export const routePath = [
  'consigne-arme',
  'option-arme',
  'extract-mag',
  'munition-type',
]

export const displayGuideContentOptions = [
  //
]
