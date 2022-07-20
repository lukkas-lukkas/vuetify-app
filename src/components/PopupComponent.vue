<template>
    <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>
        <template>
            <v-card>
                <v-toolbar color="primary" dark>Add new project form</v-toolbar>
                <v-card-text>
                    <v-form class="px-3">
                        <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"></v-text-field>
                        <v-textarea v-model="description" label="Information" prepend-icon="mdi-pencil"></v-textarea>
                    </v-form>
                </v-card-text>
                <v-card-actions class="justify-end pb-5">
                    <v-btn text @click="submit" class="success mx-0 mt-3">Add project</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        submit() {
            console.log('Title', this.title);
            console.log('Description', this.description);
        }
    }
}
</script>