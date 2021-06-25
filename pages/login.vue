<template>
  <div class="login__container">
    <div class="login__panel">
      <div class="login__text-welcome">
        <h1>Acesse</h1>
        <p>Digite seu nome de usuário e senha.</p>
      </div>
      <basic-form
        ref="loginForm"
        :fields="form.fields"
        :action="logar"
        action-label="Acessar"
      />
    </div>
  </div>
</template>

<script>
import BasicForm from '@/components/BasicForm.vue'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    BasicForm
  },
  data () {
    return {
      form: {
        fields: [
          {
            name: 'username',
            label: 'Nome de usuário:',
            nativeType: 'text',
            validation: {
              required
            }
          },
          {
            name: 'password',
            label: 'Senha:',
            nativeType: 'password',
            validation: {
              required
            }
          }
        ]
      }
    }
  },
  methods: {
    logar () {}
  }
}
</script>

<style scoped>
.login__container {
  @apply flex max-w-screen-lg justify-center items-center mx-auto min-h-screen;
}
.login__text-welcome {
  @apply text-center my-8;
}
.login__text-welcome h1 {
  @apply text-3xl font-bold mb-4;
}
.login__text-welcome p {
  @apply text-gray-500;
}
.login__panel {
  @apply bg-white p-2 w-1/3 rounded-lg;
}
</style>
