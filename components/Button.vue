<template>
  <div>
    <button
      class="button__button"
      :class="{ 'is-primary': isPrimary }"
      :type="nativeType"
      @click="$emit('click')"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Enviar'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.button__button {
  @apply bg-gray-300 w-full p-2 outline-none rounded-full;
}
.button__button.is-primary {
  @apply bg-blue-500 text-white;
}
</style>
