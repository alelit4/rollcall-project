<template>
    <div class="home">
        <v-app>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs12 md6 offset-md3>
                        <v-card>
                            <v-container>
                                <HelloWorld msg="Welcome to Your Vue.js App" />
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
            </v-container>
        </v-app>
    </div>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: 'home',
    components: {
        HelloWorld,
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
</style>
