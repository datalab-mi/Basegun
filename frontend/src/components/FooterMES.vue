<template>
  <div class="footer">
    <div class="fr-col-11 fr-col-lg-6 footer-actions mx-auto">
      <DsfrButton
        class="m-1 flex justify-center"
        icon="ri-arrow-left-line"
        :secondary="true"
        label="Précédent"
        @click="$router.back()"
      />
      <DsfrButton
        class="m-1 flex justify-center"
        icon="ri-arrow-right-line"
        data-testid="button-next"
        label="Suivant"
        :icon-right="true"
        @click="$router.push({ name:'SecuringAchievement'})"
      />
    </div>
  </div>
</template>

<style>
.footer {
  background-color: #fff;
  box-shadow: 0 -4px 16px rgb(0 0 0 / 25%);
}

.footer button {
  width: 50%;
}
</style>
