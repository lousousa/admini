<template>
  <div>
    <button
      class="button__button"
      :type="nativeType"
      @click="$emit('click')"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>
  .button__button {
    @apply bg-gray-300 w-full p-2 outline-none;
  }
</style>
