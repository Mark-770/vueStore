<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create New Product</h1>
                <v-form ref="form" v-model="valid" lazy-validation class="md-3">
                  <v-text-field
                    v-model="title"
                      name="title"
                      label="Tatle"
                      type="text"
                      :rules ="[v => !!v || 'Title is require']"
                      required
                    >
                    </v-text-field>
                    <v-text-field
                    v-model="vendor"
                    name="vendor"
                    label="Vendor Product"
                    type="text"
                    ></v-text-field>
                    <v-text-field
                    v-model="color"
                    name="color"
                    label="Color Product"
                    type="text"
                    ></v-text-field>
                    <v-text-field
                    v-model="material"
                    name="material"
                    label="Material Product"
                    type="text"
                    ></v-text-field>
                    <v-text-field
                    v-model="price"
                    name="price"
                    label="Price Product"
                    type="text"
                    :rules ="[v => !!v || 'Price is require']"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="description"
                    name="description"
                    label="Description Product"
                    type="text"
                    multi-line
                    ></v-text-field>
                </v-form>
                <v-layout class="mb-4">
                  <v-flex xs12>
                    <v-btn class="warning">
                      Upload
                      <v-icon right dark>
                        cloud_download
                      </v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout >
                  <v-flex xs12>
                   <img src="" height="200px">
                  </v-flex>
                </v-layout>
                <v-layout >
                  <v-flex xs12>
                    <v-switch
                      color="primary"
                      v-model="promo"
                      label="Add to Promo?"
                    ></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout >
                  <v-flex xs12>
                   <v-spacer></v-spacer>
                   <v-btn
                   :loading="loading"
                   class="success"
                   :disabled="!valid || loading"
                   @click="createProduct"
                   >Create Product</v-btn>
                  </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      vendor: '',
      color: '',
      material: '',
      price: 0,
      description: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createProduct () {
      if (this.$refs.form.validate()) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://image.ibb.co/g6czu8/HP_Omen_17.jpg'
        }

        this.$store.dispatch('createProduct', product)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
