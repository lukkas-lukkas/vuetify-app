<template>
    <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>
        <template>
            <v-card>
                <v-toolbar color="primary" dark>Add new project form</v-toolbar>
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder" :rules="rules">
                        </v-text-field>
                        <v-textarea v-model="description" label="Information" prepend-icon="mdi-pencil" :rules="rules">
                        </v-textarea>

                        <v-menu v-model="menu" :close-on-content-click="false">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar"
                                    readonly v-bind="attrs" v-on="on" :rules="rules"></v-text-field>
                            </template>
                            <v-date-picker v-model="dueDate" @change="menu = false"></v-date-picker>
                        </v-menu>
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
import { format, parseISO } from 'date-fns';

export default {
    data() {
        return {
            title: '',
            description: '',
            dueDate: null,
            menu: false,
            rules: [
                v => !!v || 'This field is required',
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ]
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                console.log('Title', this.title);
                console.log('Description', this.description);
                console.log('Due date', this.formattedDate);
            }
        }
    },
    computed: {
        formattedDate() {
            return this.dueDate ? format(parseISO(this.dueDate), 'do MMM yyyy') : '';
        }
    }
}
</script>