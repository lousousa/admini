<template>
  <form class="basicform__form" @submit.prevent="onSubmit">
    <div v-for="field, idx in fields" :key="idx" class="basicform__field-wrapper">
      <field
        :class="{ error: submitted && $v.model[field.name] && $v.model[field.name].$error }"
        :name="field.name"
        :label="field.label"
        :native-type="field.nativeType"
        @input="onInput"
      />
      <div v-if="submitted && field.warnings">
        <div v-for="rule in Object.keys(field.warnings)" :key="rule">
          <p
            v-if="!$v.model[field.name][rule]"
            class="basicform__text-warning"
            v-html="field.warnings[rule]"
          />
        </div>
      </div>
    </div>
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
      model,
      submitted: false
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
        this.submitted = true
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
.basicform__text-warning {
  @apply text-red-400 text-right text-sm;
}
.basicform__field-wrapper {
  @apply w-full;
}
</style>
