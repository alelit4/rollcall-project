<template>
    <div class="AddItem">
        <v-card>
            <h3>Add Item</h3>
            <div class="card-body">
                <form>
                    <v-flex xs8 offset-xs2 md5 offset-md3>
                        <v-text-field
                            v-model="newItem.name"
                            label="Name"
                            value="Name"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs8 offset-xs2 md5 offset-md3>
                        <v-text-field
                            v-model="newItem.surname"
                            label="Surname"
                            value="Surname"
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
                surname: '',
            },
        }
    },
    methods: {
        addItem() {
            db.collection('items')
                .add({
                    name: this.newItem.name,
                    surname: this.newItem.surname,
                })
                .then(function(docRef) {
                    console.log('Document written with ID: ', docRef.id)
                })
                .catch(function(error) {
                    console.error('Error adding document: ', error)
                })

            this.newItem.name = ''
            this.newItem.surname = ''
        },
    },
}
</script>

<style></style>
