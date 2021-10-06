<template>
    <v-app id="inspire">
    <admin-menu :is-open="drawer" />

    <admin-app-bar @clickHamburger="drawer = $event" />
    <v-main>
        <router-view />
    </v-main>

    <admin-footer />
  </v-app>
</template>
<script>
import Notification from './../shared-components/Notification';
import AdminMenu from './AdminMenu';
import AdminAppBar from './../layouts/AdminAppBar.vue';
import AdminFooter from './../layouts/AdminFooter';

export default {
    name: 'Home',
    components: {Notification, AdminMenu, AdminAppBar, AdminFooter},
    data() {
        return {
            drawer: true
        }
    },
    created () {
        this.$vuetify.theme.dark = false;
    }
}
</script>
