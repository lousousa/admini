<template>
  <div class="field__field-wrapper">
    <label :for="name" class="field__label">
      {{ label }}
    </label>
    <input :id="name" class="field__input" :type="nativeType">
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
</style>
