<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row justify-start class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey darken-1" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon small left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By name</span>
            </v-btn>
          </template>          
          <span>Sort by card name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey darken-1" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon small left>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by card person</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey darken-1" @click="sortBy('status')" v-bind="attrs" v-on="on">
              <v-icon small left>mdi-radiobox-marked</v-icon>
              <span class="caption text-lowercase">By status</span>
            </v-btn>
          </template>
          <span>Sort by card status</span>
        </v-tooltip>
        
      </v-layout>

      <v-card flat class="pa-5 mb-3" v-for="card in cards" :key="card.id">
        <v-layout row wrap :class="`pa-5 project ${card.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ card.project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ card.person.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ card.project.due }}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="d-flex justify-center">
              <v-chip small :class="`${card.status} white--text caption my-2`">{{ card.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
    }
  },
  computed: {
    cards() {
      const projects = this.$store.state.projects;
      const team = this.$store.state.team;
      const cards = this.$store.state.cards;

      return cards.map(card => {
        const project = projects.filter(c => c.id == card.projectId);
        const person = team.filter(p => p.id == card.personId);

        card.project = project[0];
        card.person = person[0];

        return card;
      });
    }
  }
}
</script>

<style>
.project.done {
  border-left: 4px solid #3cd1c2;
}

.project.pending {
  border-left: 4px solid tomato;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.v-chip.done {
  background: #3cd1c2 !important;
}

.v-chip.pending {
  background: tomato !important;
}

.v-chip.ongoing {
  background: orange !important;
}
</style>