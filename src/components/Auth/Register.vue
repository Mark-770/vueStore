<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Regisreter</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="email" prepend-icon="person" name="Email" label="Email" type="email" :rules ="emailRules"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password"  type="password" :counter="6"
                  :rules="passwordRules"
                  ></v-text-field>
                  <v-text-field v-model="cofirmPassword" prepend-icon="repeat" name="cofirm-password" label="Cofirm Password"  type="password" :counter="6"
                  :rules="cofirmPasswordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                 color="primary"
                 @click="onSubmit"
                 :loading="loading"
                 :disabled="!valid || loading "
                 >
                 Creat Account</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      cofirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be equal or than 6 characters'
      ],
      cofirmPasswordRules: [
        v => !!v || 'Password is required',
        v => v === this.password || 'Password should math'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
