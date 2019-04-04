<template>
    <div class="home">
        <v-app grid-list-md text-xs-center>
            <v-container>
                <v-layout row wrap id="intro">
                    <v-flex xs12 md6 offset-md3>
                        <v-card>
                            <v-container>
                                <hello-word msg="Welcome to Your Vue.js App" />
                                <v-layout
                                    align-center
                                    justify-center
                                    row
                                    fill-height
                                >
                                    <v-btn
                                        block
                                        id="bluebuttom"
                                        color="secondary"
                                        @click="logout"
                                        >Logout</v-btn
                                    >
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>
                <item-container></item-container>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import AddItem from '@/components/AddItem.vue'
import ItemContainer from '@/components/ItemContainer.vue'

export default {
    name: 'home',
    components: {
        'hello-word': HelloWorld,
        'item-container': ItemContainer,
        //'add-item': AddItem,
    },
    methods: {
        logout: function() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace('login')
                })
        },
    },
}
</script>

<style>
#bluebuttom {
    margin: 10px 110px;
}
#intro {
    margin-bottom: 1%;
}
</style>
