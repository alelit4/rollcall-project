<template>
    <div class="sign-up">
        <v-app>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs12 md6 offset-md3>
                        <v-card>
                            <h1>Let's create a new account !</h1>
                            <v-layout row>
                                <v-flex xs8 offset-xs2 md5 offset-md3>
                                    <v-text-field
                                        v-model="email"
                                        label="Email address"
                                        value="example"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs8 offset-xs2 md5 offset-md3>
                                    <v-text-field
                                        v-model="password"
                                        label="Password"
                                        value="password"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-btn @click="signUp">Sign Up</v-btn>
                            <span
                                >or go back to
                                <router-link to="/login">login</router-link
                                >.</span
                            >
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signUp: function() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.$router.replace('home')
                        console.log(user)
                    },
                    err => {
                        alert('Oops. ' + err.message)
                    }
                )
        },
    },
}
</script>

<style scoped>
.sign-up {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>
