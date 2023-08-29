import epauleAVerrouCartridges from '@/assets/guide-factice/photos/epaule_a_verrou/epaule-a-verrou-cartridges-arrow.jpg'
import epauleAVerrouBalls from '@/assets/guide-factice/photos/epaule_a_verrou/epaule-a-verrou-balls-arrow.jpg'
import epauleAVerrouVideo from '@/assets/guide-mise-en-securite/videos/epaule_a_verrou/epaule_verrou_chargeur-video.mp4'

/*
Armes d’épaule à verrou
*/
export const epaule_a_verrou = {
  displayLabel: 'Arme d’épaule à verrou',
  category: 'B ou C',
  mention: 'B - Soumise à autorisation<br>C - Soumise à déclaration',
  isDummyTypology: true,
  isSecuringOptions: true,
  text_steps: {
    1: {
      title: 'Observer l’arme',
      time: '2 sec',
      content: 'Observer l’arme en l’orientant dans une direction sans risque, en manipulant avec précaution',
    },
    2: {
      title: 'Ouvrez la culasse',
      time: '10 sec',
      content: 'Ouvrez la culasse en tirant le levier vers le haut puis en la tirant la culasse vers l’arrière',
    },
    3: {
      title: 'Retourner l’arme',
      time: '1 min 30',
      content: 'Retourner l’arme et chercher la présence éventuelle de levier ou bouton devant le pontent indiquant la présence d’un chargeur externe. Si tel est le cas, extraire le chargeur en appuyant ou en tirant sur ces derniers',
    },
    4: {
      title: 'Vider le magasin',
      time: '5 sec',
      content: 'Si vous n’avez pas enlevé de chargeur, vider le magasin des munitions éventuelles en les faisant glisser vers l’avant à l’aide de votre pouce',
    },
    5: {
      title: 'Contrôle',
      time: '3 sec',
      content: 'Contrôler visuellement la chambre',
    },
  },
  video: epauleAVerrouVideo,
  guideFactice: {
    cartouches: {
      label: 'balles',
      value: 'cartouches',
      img_ammo: epauleAVerrouCartridges,
    },
    billes: {
      label: 'bille ou trou pour billes',
      value: 'billes',
      img_ammo: epauleAVerrouBalls,
    },
  },
}
