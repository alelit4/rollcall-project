<template>
    <div class="AddItem">
        <v-card>
            <h3>Add Item</h3>
            <div class="card-body">
                <form>
                    <v-flex xs8 offset-xs2 md5 offset-md3>
                        <v-text-field
                            v-model="newItem.name"
                            label="name"
                            value="name"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs8 offset-xs2 md5 offset-md3>
                        <v-text-field
                            v-model="newItem.price"
                            label="price"
                            value="price"
                        ></v-text-field>
                    </v-flex>

                    <v-btn @click="addItem">submit</v-btn>
                </form>
            </div>
        </v-card>
    </div>
</template>

<script>

import { db } from '../main'

export default {
    name: 'AddItem',
    firestore() {
      return { 
        items: db.collection('items'),
      }
    },
    data() {
        return {
            newItem: {
                name: '',
                price: '',
            },
        }
    },
    methods: {
        addItem() {
            db.collection('items')
                .add({
                    name: this.newItem.name,
                    price: this.newItem.price,
                })
                .then(function(docRef) {
                    console.log('Document written with ID: ', docRef.id)
                })
                .catch(function(error) {
                    console.error('Error adding document: ', error)
                })

            this.newItem.name = ''
            this.newItem.price = ''
        },
    },
}
</script>

<style></style>
