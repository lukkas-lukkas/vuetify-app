import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [
            {
                id: 1,
                title: 'Manage the Scranton branch',
                due: '1st Jan 1990',
                description: 'Description of the project'
            },
            {
                id: 2,
                title: 'Marry with Pam',
                due: '1st Sep 2009',
                description: 'Description of the project'
            },
            {
                id: 3,
                title: 'Eat pizza',
                due: '1st Sep 2010',
                description: 'Description of the project'
            }
        ]
    }
});
