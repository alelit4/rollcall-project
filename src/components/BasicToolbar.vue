<template>
    <div class="toolbar">
        <v-toolbar color="primary" class="white--text">
            <!-- <v-toolbar-side-icon></v-toolbar-side-icon>-->
            <v-toolbar-title>Rollcall</v-toolbar-title>
            <!-- <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Link One</v-btn>
                <v-btn flat>Link Two</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items> -->
        </v-toolbar>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BasicToolbar',
    props: {
        msg: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
