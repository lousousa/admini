<template>
  <div>
    <button
      class="button__button"
      :class="{ 'is-primary': isPrimary }"
      :type="nativeType"
      @click="$emit('click')"
    >
      <client-only v-if="isWaiting">
        <ring-loader color="white" :size="24" />
      </client-only>
      <span v-else>
        {{ label }}
      </span>
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
    },
    isWaiting: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.button__button {
  @apply bg-gray-300 w-full p-2 outline-none rounded-full;
  font-size: 0;
}
.button__button span {
  @apply text-base;
}
.button__button.is-primary {
  @apply bg-blue-500 text-white;
}
</style>
