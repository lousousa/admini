<template>
  <div class="login__container">
    <div class="login__panel">
      <div class="login__text-welcome">
        <h1>Acesse</h1>
        <p>Digite seu nome de usuário e senha.</p>
      </div>
      <basic-form
        :fields="formFields"
        :form-waiting="formWaiting"
        action-label="Acessar"
        @submit="logar"
      />
    </div>
  </div>
</template>

<script>
import BasicForm from '@/components/BasicForm.vue'
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  components: {
    BasicForm
  },
  data () {
    return {
      formWaiting: false,
      formFields: [
        {
          name: 'username',
          label: 'Nome de usuário:',
          nativeType: 'text',
          validation: {
            required
          },
          warnings: {
            required: 'Digite o <b>nome de usuário</b>'
          }
        },
        {
          name: 'password',
          label: 'Senha:',
          nativeType: 'password',
          validation: {
            required
          },
          warnings: {
            required: 'Digite o <b>senha</b>'
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['userIsAuthenticated'])
  },
  methods: {
    logar (model) {
      this.formWaiting = true
      window.setTimeout(() => {
        this.formWaiting = false
        this.$store.commit('user/login', model)
        if (this.userIsAuthenticated) {
          this.$toast.open({ message: 'Bem vindo(a)!', type: 'success' })
          return this.$router.push({ name: 'index' })
        }
        return this.$toast.open({ message: 'Login inválido', type: 'error' })
      }, 1000)
    }
  }
}
</script>

<style scoped>
.login__container {
  @apply flex max-w-screen-lg justify-center items-center mx-auto min-h-screen px-8;
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
  @apply bg-white p-2 w-full sm:w-1/3 rounded-lg;
}
</style>
