<template>
  <div>
    <h2 class="m-2.5 flex justify-center questionnaire-title">
      <div>Questionnaire demande</div> <div><span style="color: blue"> d'avis</span></div>
    </h2>

    <div class="fr-col-11 fr-col-lg-6 mx-auto">
      <div class="mb-5">
        <StepsGuide
          class="!fr-container steps-guide"
          :steps="steps"
          :current-step="currentStep"
        />
      </div>

      <div v-if="currentStep === 1">
        <Teleport to="body">
          <DsfrModal
            title=""
            :opened="showAvertissement"
            @close="onClose()"
          >
            <div class="modal">
              <div class="modal-content">
                <div class="fr-alert fr-alert--warning">
                  <h3>
                    <VIcon
                      name="ri-error-warning-line"
                      scale="1.5"
                    />
                    Avertissement
                  </h3>
                  <div class="flex justify-content">
                    <p>
                      Avant de procéder à cette demande de contact, veuillez noter que vous êtes sur le point d'envoyer une demande d'avis à un expert auprès d'un laboratoire de PTS ou de l'IRCGN. <br>
                      <br>
                      <span class="font-bold">Assurez-vous que cette demande est conforme aux règles en vigueur et que vous disposez de toutes les autorisations nécessaires. </span> <br>
                      <br>
                      En cas de doute, veuillez contacter votre supérieur hiérarchique ou le service compétent. En procédant, <span class="font-bold">vous confirmez votre compréhension et votre engagement à établir une procédure d'expertise.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="small-blank" />
              <div class="modal-footer fr-col-11 fr-col-lg-6 footer-actions mx-auto">
                <DsfrButton
                  class="confirm-button"
                  icon="ri-checkbox-circle-line"
                  label="Je confirme avoir pris connaissance des consignes"
                  @click="showAvertissement = false"
                />
              </div>
            </div>
          </DsfrModal>
        </Teleport>

        <div class="m-1 justify-center pb-30">
          <DsfrInputGroup>
            <DsfrInput
              v-model="agent_identifier"
              class="mb-5"
              label="NIGEND / Matricule (PN)"
              label-visible
              required="true"
            />
            <DsfrInput
              v-model="numeroProcedure"
              class="mb-5"
              label="UNA / Numéro de procédure"
              label-visible
              required="true"
            />
            <DsfrInput
              v-model="assignment_service"
              class="mb-5"
              label="Service d'affectation"
              label-visible
              hint="(optionnel)"
            />
            <DsfrInput
              v-model="agent_phone_number"
              class="mb-5"
              label="Numéro de téléphone"
              type="tel"
              hint="Format attendu : 06 22 33 44 55"
              label-visible
              required="true"
            />
            <DsfrInput
              id="adresse"
              v-model="agent_email"
              class="mb-5"
              label="Adresse électronique"
              type="email"
              hint="Format attendu : nom@domaine.fr"
              label-visible
              required="true"
            />
          </DsfrInputGroup>
        </div>
      </div>

      <div v-if="currentStep === 2">
        <div class="m-1 justify-center pb-30">
          <DsfrInputGroup>
            <DsfrInput
              v-model="dateSaisie"
              class="mb-5"
              label="Date de la saisie"
              type="date"
              label-visible
              required="true"
            />

            <DsfrSelect
              v-model="weapon_type"
              class="mb-5"
              label="Typologie de l'arme"
              :options="typologieArmeOptions"
            />

            <DsfrInput
              v-model="weapon_length"
              class="mb-5"
              label="Longueur de l'arme (en cm)"
              type="number"
              hint="(optionnel)"
              label-visible
            />

            <DsfrInput
              v-model="weapon_barrel_length"
              class="mb-5"
              label="Longueur du canon (en cm)"
              type="number"
              hint="(optionnel)"
              label-visible
            />

            <DsfrInput
              v-if="showMarquage"
              v-model="descMarquage"
              class="mb-5"
              label="Description des marquages"
              hint="(optionnel)"
              label-visible
            />
            <DsfrCheckbox
              class="mt-2 fr-btn--sm"
              :label="buttonLabel5"
              @click="toggleMarquage"
            />
          </DsfrInputGroup>
        </div>
      </div>

      <div v-if="currentStep === 3">
        <Teleport to="body">
          <DsfrModal
            title=""
            :opened="showModalPhotos"
            @close="onClose()"
          >
            <div class="modal">
              <div class="modal-content">
                <div class="fr-alert fr-alert--warning">
                  <h3>
                    <VIcon
                      name="ri-arrow-right-line"
                      scale="1.5"
                    />
                    Consignes pour les prises de photo
                  </h3>
                  <div class="flex justify-content">
                    <p>
                      Pour faciliter l'analyse de votre demande, veuillez tenir compte de la liste des photos à prendre en veillant à la qualité de celles-ci (<span class="font-bold">netteté, exposition, orientation, sans perspective) :</span>  <br>
                    </p>
                  </div>
                  <br>
                  <li><span class="font-bold">Vue d'ensemble de l'arme côté gauche</span></li>
                  <li><span class="font-bold">Vue d'ensemble de l'arme côté droite</span></li>
                  <li><span class="font-bold">Vue(s) rapprochée(s) des marquages et poinçon(s)</span></li>
                  <li><span class="font-bold">Une photo du chargeur</span></li>
                </div>
              </div>
              <div class="small-blank" />
              <div class="modal-footer fr-col-11 fr-col-lg-6 footer-actions mx-auto">
                <DsfrButton
                  class="confirm-button"
                  icon="ri-checkbox-circle-line"
                  label="Je confirme avoir pris connaissance des consignes"
                  @click="showModalPhotos = false"
                />
              </div>
            </div>
          </DsfrModal>
        </Teleport>

        <div class="mt-5 mb-5">
          <a
            class="help"
            href="#"
            @click="showModalPhotos = true"
          >
            Consignes de prise de photos
            <VIcon
              name="ri-mail-line"
            />
          </a>
        </div>

        <div class="m-1 justify-center pb-30">
          <div class="descPhotos mb-8">
            <DsfrFileUpload
              v-model="picture_left"
              label="Vue d'ensemble côté gauche"
              @change="(files) => handleFileUpload(files, 'picture_left')"
            />
          </div>

          <div class="descPhotos mb-8">
            <DsfrFileUpload
              v-model="picture_right"
              label="Vue d'ensemble côté droite"
              @change="(files) => handleFileUpload(files, 'picture_right')"
            />
          </div>

          <div class="descPhotos mb-8">
            <DsfrFileUpload
              v-model="picture_markings"
              label="Vue rapprochée des marquages et poinçons"
              @change="(files) => handleFileUpload(files, 'picture_markings')"
            />
          </div>

          <div class="mb-8">
            <DsfrFileUpload
              v-if="showVueRapprochee2"
              v-model="picture_markings2"
              :label="`Vue rapprochée des marquages et poinçons 2/3`"
              @change="(files) => handleFileUpload(files, 'picture_markings2')"
            />

            <DsfrButton
              class="mt-2 fr-btn--sm"
              :label="buttonLabel2"
              @click="toggleVueRapprochee2"
            />
          </div>

          <div class="mb-8">
            <DsfrFileUpload
              v-if="showVueRapprochee3"
              v-model="picture_markings3"
              :label="`Vue rapprochée des marquages et poinçons 3/3`"
              @change="(files) => handleFileUpload(files, 'picture_markings3')"
            />

            <DsfrButton
              v-if="showVueRapprochee2"
              class="mt-2 fr-btn--sm"
              :label="buttonLabel3"
              @click="toggleVueRapprochee3"
            />
          </div>

          <div class="descPhotos mb-8">
            <DsfrFileUpload
              v-if="showChargeur"
              v-model="picture_charger"
              label="Chargeur"
              @change="(files) => handleFileUpload(files, 'picture_charger')"
            />

            <DsfrCheckbox
              class="mt-2 fr-btn--sm"
              :label="buttonLabel4"
              @click="toggleChargeur"
            />
          </div>

          <Teleport to="body">
            <DsfrModal
              title=""
              :opened="showModalSubmit"
              @close="onClose()"
            >
              <div class="modal">
                <div class="modal-content">
                  <h3>
                    <VIcon
                      name="ri-arrow-right-line"
                      scale="1.5"
                    />
                    Envoi du formulaire
                  </h3>

                  <div
                    v-if="formSubmissionStatus === errorMessage"
                    class="form-submission-status"
                  >
                    <DsfrAlert
                      title="Erreur"
                      description="Le formulaire n'a pas pu être envoyé. Veuillez réessayer plus tard."
                      type="error"
                    />
                  </div>
                  <div
                    v-else-if="formSubmissionStatus === successMessage"
                    class="form-submission-status"
                  >
                    <DsfrAlert
                      title="Succès"
                      description="Le formulaire a été envoyé avec succès."
                      type="success"
                    />
                  </div>
                </div>
                <div>
                  <SnackbarAlert class="text-center pt-3" />
                </div>
                <div class="small-blank" />
                <div class="modal-footer fr-col-11 fr-col-lg-6 footer-actions mx-auto">
                  <router-link
                    v-slot="{navigate}"
                    class="navigate"
                    :to="{name: 'StartPage'}"
                  >
                    <DsfrButton
                      class="confirm-button m-1 flex justify-center"
                      icon="ri-home-4-line"
                      label="Retour à l'accueil"
                      @click="navigate()"
                    />
                  </router-link>
                </div>
              </div>
            </DsfrModal>
          </Teleport>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div
      v-if="currentStep === 1"
      class="fr-col-11 fr-col-lg-6 footer-actions"
    >
      <DsfrButton
        class="m-1 flex justify-center"
        icon="ri-arrow-left-line"
        :secondary="true"
        label="Précédent"
        @click="router.back()"
      />
      <DsfrButton
        class="m-1 flex justify-center"
        icon="ri-arrow-right-line"
        label="Suivant"
        :disabled="!areRequiredFieldsFilled()"
        :icon-right="true"
        @click="goToNextStep()"
      />
    </div>

    <div
      v-else-if="currentStep === 2"
      class="fr-col-11 fr-col-lg-6 footer-actions"
    >
      <DsfrButton
        class="m-1 flex justify-center"
        icon="ri-arrow-left-line"
        :secondary="true"
        label="Précédent"
        @click="goToPreviousStep()"
      />
      <DsfrButton
        class="m-1 flex justify-center"
        icon="ri-arrow-right-line"
        label="Suivant"
        :disabled="!areRequiredFieldsFilled()"
        :icon-right="true"
        @click="goToNextStep()"
      />
    </div>

    <div
      v-else
      class="fr-col-11 fr-col-lg-6 footer-actions"
    >
      <DsfrButton
        class="m-1 flex justify-center"
        icon="ri-arrow-left-line"
        :secondary="true"
        label="Précédent"
        @click="goToPreviousStep()"
      />

      <DsfrButton
        class="m-1 flex justify-center !w-full"
        label="Valider"
        icon="ri-checkbox-circle-line"
        :disabled="!areRequiredFieldsFilled()"
        @click="handleSubmit"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { sendExpertiseForm } from '@/api/api-client'

const formData = new FormData()
const steps = ['Identification du demandeur', 'Informations sur l\'arme', 'Photos complémentaires']
const stepsStore = useStepsStore()
const router = useRouter()

const typologieArmeOptions = ref([
  { text: 'Je ne sais pas', value: 'Je ne sais pas' },
  { text: 'Arme de poing', value: 'Arme de poing' },
  { text: 'Arme d\'épaule', value: 'Arme d\'épaule' },
])

const showAvertissement = ref(true)
const showModalPhotos = ref(true)
const showModalSubmit = ref(false)

function onClose () {
  showAvertissement.value = false
  showModalPhotos.value = false
  showModalSubmit.value = false
}

const currentStep = computed<1 | 2 | 3>({
  get () {
    return stepsStore.currentStep + 1 as 1 | 2 | 3
  },
  set (value: 1 | 2 | 3) {
    stepsStore.setCurrentStep(value)
  },
})

const showVueRapprochee2 = ref(false)
const showVueRapprochee3 = ref(false)
const showChargeur = ref(true)
const showMarquage = ref(true)

const buttonLabel2 = ref('Ajouter une photo')
const buttonLabel3 = ref('Ajouter une photo')
const buttonLabel4 = ref('Pas de chargeur')
const buttonLabel5 = ref('Pas de marquage')

const toggleVueRapprochee2 = () => {
  showVueRapprochee2.value = !showVueRapprochee2.value
  buttonLabel2.value = showVueRapprochee2.value ? 'Supprimer la photo' : 'Ajouter une photo'
}

const toggleVueRapprochee3 = () => {
  if (showVueRapprochee2.value) {
    showVueRapprochee3.value = !showVueRapprochee3.value
    buttonLabel3.value = showVueRapprochee3.value ? 'Supprimer la photo' : 'Ajouter une photo'
  }
}

const toggleChargeur = () => {
  showChargeur.value = !showChargeur.value
  buttonLabel4.value = showChargeur.value ? 'Pas de chargeur' : 'Décocher s\'il y a un chargeur'
}

const toggleMarquage = () => {
  showMarquage.value = !showMarquage.value
  buttonLabel5.value = showMarquage.value ? 'Pas de marquages' : 'Décocher s\'il y a des marquages'
}

const agent_identifier: Ref<number> = ref(null)
const numeroProcedure: Ref<number> = ref(null)
const assignment_service: Ref<string> = ref('')
const agent_phone_number: Ref<number> = ref(null)
const agent_email: Ref<string> = ref('')
const dateSaisie: Ref<string> = ref('')
const weapon_type: Ref<string> = ref('')
const weapon_length: Ref<number> = ref(null)
const weapon_barrel_length: Ref<number> = ref(null)
const descMarquage: Ref<string> = ref('')
const picture_left: Ref<File | null> = ref(null)
const picture_right: Ref<File> = ref(null)
const picture_markings: Ref<File> = ref(null)
const picture_markings2: Ref<File> = ref(null)
const picture_markings3: Ref<File> = ref(null)
const picture_charger: Ref<File> = ref(null)

const goToPreviousStep = () => (
  currentStep.value = currentStep.value - 2 as 1 | 2 | 3
)

const goToNextStep = () => {
  sendData()
  currentStep.value = currentStep.value + 0 as 1 | 2 | 3
}

const sendData = () => {
  const formDataToUpdate = getCurrentFormData()
  console.log('Données à envoyer à handleFormDataUpdate :', formDataToUpdate)
  handleFormDataUpdate(formDataToUpdate)
}

const handleFileUpload = async (files: FileList | null, vModel: string) => {
  if (files && files.length > 0) {
    const file = files[0]
    const base64String = await readFileAsBase64(file)
    const base64Data = base64String.split(',')[1]

    console.log(base64Data)
    console.log(vModel)

    const formDataToUpdate = getCurrentFormData(vModel, base64Data)
    handleFormDataUpdate(formDataToUpdate)
  }
}

const readFileAsBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const base64String = reader.result as string
      resolve(base64String)
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsDataURL(file)
  })
}

const handleFormDataUpdate = (form: Record<string, number | string | File>) => {
  console.log('Données mises à jour:', form)
  Object.entries(form).forEach(([key, value]) => {
    if (formData.has(key)) {
      formData.set(key, value)
    } else {
      formData.append(key, value)
    }
  })
  console.log('Toutes les données:', formData)
}

const getCurrentFormData = (fieldName: string, base64String: string) => {
  let formDataToUpdate: Record<string, number | string | File> = {}

  if (currentStep.value === 1) {
    formDataToUpdate = {
      agent_identifier: agent_identifier.value,
      numeroProcedure: numeroProcedure.value,
      assignment_service: assignment_service.value,
      agent_phone_number: agent_phone_number.value,
      agent_email: agent_email.value,
    }
  } else if (currentStep.value === 2) {
    formDataToUpdate = {
      dateSaisie: dateSaisie.value,
      weapon_type: weapon_type.value,
      weapon_length: weapon_length.value,
      weapon_barrel_length: weapon_barrel_length.value,
      descMarquage: descMarquage.value,
    }
  } else if (currentStep.value === 3) {
    formDataToUpdate = {
      [fieldName]: base64String,
    }
  }

  return formDataToUpdate
}

const handleSubmit = async () => {
  await sendData()
  await sendFormData()
  showModalSubmit.value = true
}

const sendFormData = () => {
  sendExpertiseForm(formData).then(() => {
    formSubmissionStatus.value = successMessage
  })
    .catch(() => {
      formSubmissionStatus.value = errorMessage
    })
}

const formSubmissionStatus = ref<boolean | null>(null)

const successMessage = true
const errorMessage = false

const areRequiredFieldsFilled = () => {
  if (currentStep.value === 1) {
    return (
      agent_identifier.value !== 0 &&
      numeroProcedure.value !== 0 &&
      agent_phone_number.value !== 0 &&
      agent_email.value.trim() !== ''
    )
  } else if (currentStep.value === 2) {
    return (
      dateSaisie.value.trim() !== ''
    )
  } else if (currentStep.value === 3 && showChargeur.value === true) {
    return (
      picture_left.value &&
      picture_right.value &&
      picture_markings.value &&
      (!showVueRapprochee2.value || picture_markings2.value) &&
      (!showVueRapprochee3.value || picture_markings3.value) &&
      picture_charger.value
    )
  } else if (currentStep.value === 3) {
    return (
      picture_left.value &&
      picture_right.value &&
      picture_markings.value &&
      (!showVueRapprochee2.value || picture_markings2.value) &&
      (!showVueRapprochee3.value || picture_markings3.value)
    )
  }
}

</script>

<style scoped>

@media only screen and (max-width: 600px) {
  .confirm-button {
    font-size: 12px;
  }
}

.questionnaire-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer {
  background-color: #fff;
  box-shadow: 0 -4px 16px rgb(0 0 0 / 25%);
}

.footer button {
  width: 50%;
}

.steps-guide {
  margin: auto;
}

:deep(div.fr-stepper__steps) {
  border-radius: 5px 5px 5px 5px;
}

:deep(.fr-stepper__state::after) {
  content: " :\a";
}

:deep(.fr-label) {
  margin-bottom: 12px;
}

.desc {
  border-bottom: 1px solid grey;
  padding-bottom: -4px;
  font-weight: bold;
}

.descPhotos {
  border-bottom: 1px solid grey;
  padding-bottom: 8px;
  font-weight: bold;
}

:deep(.required) {
  color:red;
}

.form-submission-status {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>
