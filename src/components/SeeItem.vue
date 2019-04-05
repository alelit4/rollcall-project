<template>
    <div class="SeeItem">
        <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
             <!--  <span>{{items }}</span> -->
            <v-flex md8 sm8 offset-sm2 class="item"  v-for="item in items" :key="item.key" >
                <v-card class="card-body elevation-12 white--text"  color="cyan darken-2" >
                    <v-layout>
                      <v-flex xs5>
                        <v-img class="imgrandom"
                          src="https://picsum.photos/300/300/?random"
                          height="125px"
                          contain
                        ></v-img>
                      </v-flex>
                      <v-flex xs7>
                        <v-card-title primary-title>
                          <div>
                            <div class="headline"> {{item.name}} </div>
                            <span>{{ item.surname }}</span>
                          </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn flat dark @click="removeItem(item)">Delete</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        </v-card>
    </div>
</template>

<script>
import { db } from '../main'

export default {
    name: 'SeeItem',
    firestore() {
        return {
            items: db.collection('items'),
        }
    },
    data() {
        return {
            items: {
                name: '',
                surname: '',
            },
        }
    },
    methods: {
       removeItem: function (item) {
        db.collection('items').doc(item['.key']).delete();
    }
        
    },
}
</script>

<style>

 .item {
    margin: 2em;
    padding: 0.5em;
   
 }
 
 small {
    font-size: 0.6em;
    opacity: 0.8;
 }

 .imgrandom{
    margin: 2em 0.9em;

 }

</style>
