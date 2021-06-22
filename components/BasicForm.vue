<template>
  <form class="basicform__form">
    <div class="basicform__field-wrapper">
      <input class="basicform__input" type="text">
    </div>
    <div class="basicform__field-wrapper">
      <input class="basicform__input" type="password">
    </div>
    <div class="basicform__field-wrapper">
      <button class="basicform__button" type="submit">
        Enviar
      </button>
    </div>
  </form>
</template>

<style scoped>
  .basicform__form {
    @apply w-full flex flex-wrap p-2;
  }
  .basicform__field-wrapper {
    @apply w-full p-2;
  }
  .basicform__input {
    @apply w-full border border-gray-300 p-2;
  }
  .basicform__button {
    @apply bg-gray-300 w-full p-2;
  }
</style>
