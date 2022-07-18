<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container fluid class="my-5">
      <v-card flat class="pa-5">
        <v-layout row wrap class="pa-5">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>Manage the Scranton branch</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>Michael Scott</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>1st Jan 1990</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>Pending</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {

}
</script>
