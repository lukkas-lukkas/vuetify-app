<template>
    <nav>
        <v-snackbar top color="green" v-model="snackbar" :timeout="2000">
            Project created success
        </v-snackbar>
        
        <v-app-bar flat app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>List</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="grey darken-1" text v-bind="attrs" v-on="on">
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey darken-1">
                <span>Sign Out</span>
                <v-icon right>
                    mdi-exit-to-app
                </v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img class="text-lg-center" src="/images/michael.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1">Michael Scott</p>
                </v-flex>

                <v-flex class="mt-4 mb-3">
                    <PopupComponent @cardAddedEvent="snackbar = true" />
                </v-flex>

            </v-layout>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-icon>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import PopupComponent from './PopupComponent.vue';

export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
                { icon: "mdi-folder", text: "My Projects", route: "/projects" },
                { icon: "mdi-account-circle", text: "Team", route: "/team" },
            ],
            snackbar: false,
        };
    },
    components: { PopupComponent }
}
</script>
