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
        ],
        team: [
            {
                id: 1,
                name: 'Michael Scott',
                role: 'Regional Manager',
                avatar: '/images/michael.png'
            },
            {
                id: 2,
                name: 'Jim Halpert',
                role: 'Seller',
                avatar: '/images/jim.png'
            },
            {
                id: 3,
                name: 'Dwight Schrute',
                role: 'Regional assistant manager',
                avatar: '/images/dwight.png'
            },
            {
                id: 4,
                name: 'Pam Beesly',
                role: 'Receptionist',
                avatar: '/images/pam.png'
            },
            {
                id: 5,
                name: 'Kevin Malone',
                role: 'Counter',
                avatar: '/images/kevin.png'
            },
        ],
        cards: [
            {
                id: 1,
                projectId: 1,
                personId: 1,
                status: 'pending',
            },
            {
                id: 2,
                projectId: 2,
                personId: 2,
                status: 'done',
            },
            {
                id: 3,
                projectId: 3,
                personId: 5,
                status: 'ongoing',
            },
        ],
    }
});
