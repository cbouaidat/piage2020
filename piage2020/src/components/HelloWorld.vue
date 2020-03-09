


<template>
  <v-data-table
    :headers="headers"
    :items="loc"
    :items-per-page="5"
    class="elevation-1"
  >

   <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Tachéomète</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-dialog 
        v-model="dialog" 
        max-width="1200"
        >
          <template v-slot:activator="{ on }">
            <v-btn 
            color="primary" 
            dark 
            class="mb-2" 
            v-on="on"
            >
            Ajouter
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              Ajouter
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.localisation_pk" label="localisation_pk"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.id_piece" label="id_piece"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.suffix" label="suffix"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.x_piece" label="x_piece"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.y_piece" label="y_piece"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.z_piece" label="z_piece"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.num_piece" label="num_piece"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.sous_carre" label="sous_carre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.decapage" label="decapage"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.date_fouille" label="date_fouille"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.nom_prisme" label="nom_prisme"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.remarque" label="remarque"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.recolement" label="recolement"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.fiche" label="fiche"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.topo_nulle" label="topo_nulle"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.couche_pk" label="couche_pk"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.carre_pk" label="carre_pk"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.nature_pk" label="nature_pk"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="loc.fouilleur_pk" label="fouilleur_pk"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
      </v-toolbar>

    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
       <v-icon
        small
        @click="dialog = false"
      >
        mdi-delete
      </v-icon>
    </template>
   <!--  <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template> -->
  </v-data-table>
</template>

<!-- <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">localisation_pk</th>
          <th class="text-left">id piece</th>
          <th class="text-left">suffix</th>
          <th class="text-left">x piece</th>
          <th class="text-left">y piece</th>
          <th class="text-left">z piece</th>

          <th class="text-left">num piece</th>
          <th class="text-left">sous carré</th>
          <th class="text-left">décapage</th>
          <th class="text-left">date de fouille</th>

          <th class="text-left">nom prisme</th>
          <th class="text-left">remarque</th>
          <th class="text-left">recolement</th>
          <th class="text-left">fiche</th>

          <th class="text-left">topo nulle</th>
          <th class="text-left">couche</th>
          <th class="text-left">carré</th>
          <th class="text-left">nature</th>
          <th class="text-left">fouilleur</th>
          <th class="text-left">del</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in loc"
         :key="currency.id"
          class="currency" >
          <td> {{currency.localisation_pk}}</td>
          <td> {{currency.id_piece}}</td>
          <td> {{currency.suffix}}</td>
          <td>{{currency.x_piece}}</td>
          <td>{{currency.y_piece}}</td>
          <td>{{currency.z_piece}}</td>

          <td>{{currency.num_piece}}</td>
          <td>{{currency.sous_carre}}</td>
          <td>{{currency.decapage}}</td>

          <td>{{currency.date_fouille}}</td>
          <td>{{currency.nom_prisme}}</td>
          <td>{{currency.remarque}}</td>

          <td>{{currency.recolement}}</td>
          <td>{{currency.fiche}}</td>
          <td>{{currency.topo_nulle}}</td>

          <td>{{currency.couche_pk}}</td>
          <td>{{currency.carre_pk}}</td>
          <td>{{currency.nature_pk}}</td>

          <td>{{currency.fouilleur_pk}}</td>
          <td>{{currency.del}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> 
  </template>-->

  






 

<script>
import { mapGetters,   mapActions  } from 'vuex';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    dialog: false,

    headers: [
      { text: "localisation_pk", value: "localisation_pk" },
      { text: "id_piece", value: "id_piece" },
      { text: "suffix", value: "suffix" },
      { text: "x_piece", value: "x_piece" },
      { text: "y_piece", value: "y_piece" },
      { text: "z_piece", value: "z_piece" },
      { text: "num_piece", value: "num_piece" },
      { text: "sous_carre", value: "sous_carre" },
      { text: "decapage", value: "decapage" },
      { text: "date_fouille", value: "date_fouille" },
      { text: "nom_prisme", value: "nom_prisme" },
      { text: "remarque", value: "remarque" },
      { text: "recolement", value: "recolement" },
      { text: "fiche", value: "fiche" },
      { text: "topo_nulle", value: "topo_nulle" },
      { text: "couche_pk", value: "couche_pk" },
      { text: "carre_pk", value: "carre_pk" },
      { text: "nature_pk", value: "nature_pk" },
      { text: "fouilleur_pk", value: "fouilleur_pk" },
      { text: "del", value: "del" },
    ],

      editedIndex: -1,

   /*    editedItem: {
        localisation_pk: 0,
        suffix: 0,
        x_piece: 0,
        y_piece: 0,
        z_piece: 0,
         num_piece: 0,
        sous_carre: 0,
        decapage: 0,
        date_fouille: 0,
        nom_prisme: 0,
        remarque: "",
        recolement: 0,
        fiche: 0,
        topo_nulle: 0,
        couche_pk: 0,
         carre_pk: 0,
        nature_pk: 0,
        fouilleur_pk: 0,
      }, */

      defaultItem: {
        localisation_pk: 0,
        suffix: 0,
        x_piece: 0,
        y_piece: 0,
        z_piece: 0,
         num_piece: 0,
        sous_carre: 0,
        decapage: 0,
        date_fouille: 0,
        nom_prisme: 0,
        remarque: "",
        recolement: 0,
        fiche: 0,
        topo_nulle: 0,
        couche_pk: 0,
         carre_pk: 0,
        nature_pk: 0,
        fouilleur_pk: 0,
      },
 
  }),
  
 watch: {
      dialog (val) {
        val || this.close()
      },
    },


  methods:{   
      ...mapActions(['getLocalisation']),
    // ...mapGetters(["getAllLocalisations"]),

   getloc(){
      return this.getLocalisation
    },

    editedItem (item) {
        this.editedIndex = this.loc.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
    },

      deleteItem (item) {
        const index = this.loc.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.loc.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.loc[this.editedIndex], this.editedItem)
        } else {
          this.loc.push(this.editedItem)
        }
        this.close()
      },
  },
computed: {
  ...mapGetters(["getAllLocalisations", "getAllHeaders"]),

  loc() {
    return this.getAllLocalisations
  },
   headerse() {
    return this.getAllHeaders
  },
}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
