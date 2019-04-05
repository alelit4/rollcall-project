<template>
    <div id="item-container">
        <v-tabs color="primary" slider-color="cyan">
            <v-tab ripple class="white--text"> See Items </v-tab>
            <v-tab ripple class="white--text"> Add Item </v-tab>
            <v-tab-item>
                <v-card flat fill-height fluid>
                    <see-items></see-items>
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
import SeeItems from '@/components/SeeItem.vue'

export default {
    name: 'item-container',
    components: {
        'add-item': AddItem,
        'see-items': SeeItems,
    },
}
</script>

<style></style>
