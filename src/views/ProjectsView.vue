<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.description }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
          status: 'pending',
          description: 'Description of the project'
        },
        {
          title: 'Marry with Pam',
          person: 'Jim Halpert',
          due: '1st Sep 2009',
          status: 'done',
          description: 'Description of the project'
        },
        {
          title: 'Eat pizza',
          person: 'Kevin Malone',
          due: '1st Sep 2010',
          status: 'ongoing',
          description: 'Description of the project'
        },
      ]
    }
  }
}
</script>
