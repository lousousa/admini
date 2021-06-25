<template>
  <div class="field__field-wrapper">
    <label :for="name" class="field__label">
      {{ label }}
    </label>
    <input
      :id="name"
      v-model="input"
      class="field__input"
      :type="nativeType"
      @input="$emit('input', name, input)"
    >
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    nativeType: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.field__field-wrapper {
  @apply w-full p-2;
}
.field__label {
  @apply font-medium;
}
.field__input {
  @apply w-full border-b border-gray-300 p-2 outline-none;
}
.field__field-wrapper.error .field__input {
  @apply border-red-400;
}
.field__field-wrapper.error .field__label {
  @apply text-red-500;
}
</style>
