<template>
    <div id="item-container">
        <v-tabs color="primary" slider-color="cyan">
            <v-tab ripple class="white--text"> See Items </v-tab>
            <v-tab ripple class="white--text"> Add Item </v-tab>
            <v-tab-item>
                <v-card flat fill-height fluid>
                    <add-item></add-item>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat fill-height fluid>
                    <add-item></add-item>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import AddItem from '@/components/AddItem.vue'

export default {
    name: 'item-container',
    components: {
        'add-item': AddItem,
    },
}
</script>

<style></style>
