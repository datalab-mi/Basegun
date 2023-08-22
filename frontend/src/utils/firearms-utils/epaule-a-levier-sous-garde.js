import levierSousGardeMagasinAvantImg from '@/assets/guide-mise-en-securite/photos/epaule_a_levier_sous_garde/epaule_levier_ss_garde_magasin_avant.jpg'
import levierSousGardePasMagasinImg from '@/assets/guide-mise-en-securite/photos/epaule_a_levier_sous_garde/epaule_levier_ss_garde_magasin_fixe.jpg'
import levierSousGardeMagasinAvantVideo from '@/assets/guide-mise-en-securite/videos/epaule_a_levier_sous_garde/epaule_levier_ss_garde_magasin_avant.mp4'
import levierSousGardePasMagasinVideo from '@/assets/guide-mise-en-securite/videos/epaule_a_levier_sous_garde/epaule_levier_ss_garde_magasin_fixe.mp4'
/*
Armes d’épaule à levier de sous-garde
  Magasin avant
  Magasin fixe
*/
export const epaule_a_levier_sous_garde = {
  displayLabel: "arme d'épaule à levier de sous-garde",
  category: 'B ou C',
  mention: 'B - Soumise à autorisation<br>C - Soumise à déclaration',
  isDummyTypology: false,
  isSecuringOptions: true,
  options_text: 'En manipulant l’arme avec précaution dans une <span class="font-bold">direction sans risque</span>, inspectez l’<span class="font-bold">extrémité du tube sous le canon</span>. Sélectionnez ce que vous voyez :',
  options: {
    front_magazine: {
      label: 'Embout rugueux',
      value: 'front_magazine',
      text_steps: {
        text_step_1: 'Observer l’arme en l’orientant dans une direction sans risque, en manipulant avec précaution',
        text_step_2: 'Faites très attention à ne pas déclencher l’arme durant cette manipulation. Dévisser la baguette à l’avant du tube magasin',
        text_step_3: 'Retirer complètement la baguette du magasin',
        text_step_4: 'Vider le magasin en tapotant l’arme orientée légèrement vers le bas',
        text_step_5: 'Actionner le levier de sous garde jusqu’en position basse et retirer la munition éventuelle de la chambre',
        text_step_6: 'Contrôler visuellement que la chambre est vide',
      },
      img: levierSousGardeMagasinAvantImg,
      video: levierSousGardeMagasinAvantVideo,
    },
    fixed_magazine: {
      label: 'Pas d’embout',
      value: 'fixed_magazine',
      text_steps: {
        text_step_1: 'Observer l’arme en l’orientant dans une direction sans risque, en manipulant avec précaution',
        text_step_2: 'Abaisser le levier de sous garde en position basse et retirer la munition éventuelle de la chambre',
        text_step_3: '<span class="font-bold" style="color:red">[ Veiller à ne pas appuyer sur la queue de détente pendant cette manipulation ! ]</span> <br> Relever et abaisser le levier de sous garde tout en extrayant les munitions tant qu’il y a toujours des munitions présentes dans le tube magasin',
        text_step_4: 'Contrôler visuellement que la chambre est vide',
      },
      img: levierSousGardePasMagasinImg,
      video: levierSousGardePasMagasinVideo,
    },
  },
}
