<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-card flat class="pa-5 mb-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-5 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
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
      projects: [
        {
          title: 'Manage the Scranton branch',
          person: 'Michael Scott',
          due: '1st Jan 1990',
          status: 'pending'
        },
        {
          title: 'Marry with Pam',
          person: 'Jim Halpert',
          due: '1st Sep 2009',
          status: 'done'
        },
        {
          title: 'Eat pizza',
          person: 'Kevin Malone',
          due: '1st Sep 2010',
          status: 'ongoing'
        },
      ]
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
</style>