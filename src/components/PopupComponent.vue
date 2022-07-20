<template>
    <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
                <v-card-text>
                    <div class="text-h2 pa-12">Hello world!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {

}
</script>