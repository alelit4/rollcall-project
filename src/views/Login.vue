<template>
    <div class="login">
        <v-app>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs12 md6 offset-md3>
                        <v-card>
                            <h3>Sign In</h3>
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
                                    @click="login"
                                    >Login</v-btn
                                >
                            </v-layout>
                            <v-flex xs8 offset-xs2 md6 offset-md3>
                                <p>or Sign In with Google <br /></p>
                                <button
                                    @click="socialLogin"
                                    class="social-button"
                                >
                                    <img
                                        alt="Google Logo"
                                        src="../assets/google-logo.png"
                                    />
                                </button>

                                <p>
                                    You don't have an account ? You can
                                    <router-link to="/signup"
                                        >create one</router-link
                                    >
                                </p>
                            </v-flex>
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
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    console.log('User ok ' + user)
                    this.$router.replace('home')
                })
                .catch(err => {
                    alert('Oops. ' + err.message)
                })
        },
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    console.log('result -> ' + result)
                    this.$router.replace('home')
                })
                .catch(err => {
                    alert('Oops. ' + err.message)
                })
        },
    },
}
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
    margin-top: 40px;
}

#bluebuttom {
    margin: 10px 110px;
}

input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
.social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    outline: 0;
    border: 0;
}
.social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.social-button img {
    width: 100%;
}
</style>
