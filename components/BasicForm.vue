<template>
  <form class="basicform__form" @submit.prevent="onSubmit">
    <field
      v-for="field, idx in fields"
      :key="idx"
      :name="field.name"
      :label="field.label"
      :native-type="field.nativeType"
      @input="onInput"
    />
    <div v-if="action" class="basicform__action-wrapper">
      <Button native-type="submit" :label="actionLabel" :is-primary="true" />
    </div>
  </form>
</template>

<script>
import Field from '@/components/Field.vue'
import Button from '@/components/Button.vue'
export default {
  components: {
    Field,
    Button
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    action: {
      type: Function,
      default: undefined
    },
    actionLabel: {
      type: String,
      default: 'Salvar'
    }
  },
  data () {
    return {
      model: {}
    }
  },
  created () {
    for (const field of this.fields) {
      this.model[field.name] = null
    }
  },
  methods: {
    onSubmit () {
      if (this.action) {
        this.action()
      }
    },
    onInput (name, val) {
      this.model[name] = val
    }
  }
}
</script>

<style scoped>
.basicform__form {
  @apply w-full flex flex-wrap p-2;
}
.basicform__action-wrapper {
  @apply w-full p-2;
}
</style>
