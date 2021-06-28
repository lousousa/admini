<template>
  <div class="login__container">
    <div class="login__panel">
      <div class="login__text-welcome">
        <h1>Acesse</h1>
        <p>Digite seu nome de usuário e senha.</p>
      </div>
      <basic-form
        :fields="formFields"
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
      this.$store.commit('user/login', model)
      if (this.userIsAuthenticated) {
        return this.$router.push({ name: 'index' })
      }
      return this.$toast.open({ message: 'Login inválido', type: 'error' })
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
