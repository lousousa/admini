<template>
  <form class="basicform__form">
    <field
      v-for="field, idx in fields"
      :key="idx"
      :name="field.name"
      :label="field.label"
      :input-type="field.inputType"
    />
    <div class="basicform__field-wrapper">
      <button class="basicform__button" type="submit">
        Enviar
      </button>
    </div>
  </form>
</template>

<script>
import Field from '@/components/Field.vue'
export default {
  components: {
    Field
  },
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
  .basicform__button {
    @apply bg-gray-300 w-full p-2;
  }
</style>
