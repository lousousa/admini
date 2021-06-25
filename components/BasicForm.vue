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
    const model = {}
    for (const field of this.fields) {
      model[field.name] = null
    }
    return {
      model
    }
  },
  validations () {
    const model = {}
    for (const field of this.fields) {
      if (field.validation) {
        model[field.name] = field.validation
      }
    }
    return {
      model
    }
  },
  methods: {
    onSubmit () {
      if (this.action) {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.action()
        }
      }
    },
    onInput (name, value) {
      this.model[name] = value
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
