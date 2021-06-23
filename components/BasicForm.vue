<template>
  <form class="basicform__form">
    <div v-for="field, idx in fields" :key="idx" class="basicform__field-wrapper">
      <label :for="field.name">
        {{ field.label }}
      </label>
      <input :id="field.name" class="basicform__input" :type="field.inputType">
    </div>
    <div class="basicform__field-wrapper">
      <button class="basicform__button" type="submit">
        Enviar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .basicform__form {
    @apply w-full flex flex-wrap p-2;
  }
  .basicform__field-wrapper {
    @apply w-full p-2;
  }
  .basicform__input {
    @apply w-full border border-gray-300 p-2 outline-none;
  }
  .basicform__button {
    @apply bg-gray-300 w-full p-2;
  }
</style>
