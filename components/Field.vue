<template>
  <div class="field__field-wrapper">
    <label :for="name">
      {{ label }}
    </label>
    <input :id="name" class="field__input" :type="nativeType">
  </div>
</template>

<script>
export default {
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
      required: true
    }
  }
}
</script>

<style scoped>
  .field__field-wrapper {
    @apply w-full p-2;
  }
  .field__input {
    @apply w-full border border-gray-300 p-2 outline-none;
  }
</style>
