<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>

        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4 pl-5">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="person.avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey darken-1">
                                <v-icon small left>mdi-message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'Michael Scott', role: 'Regional Manager', avatar: '/images/michael.png'},
                { name: 'Jim Halpert', role: 'Seller', avatar: '/images/jim.png'},
                { name: 'Dwight Schrute', role: 'Regional assistant manager', avatar: '/images/dwight.png'},
                { name: 'Pam Beesly', role: 'Receptionist', avatar: '/images/pam.png'}
            ]
        }
    }
}
</script>
