<template>
    <v-app>
        <v-main>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse">
                    <admin-menu/>
                </div>
            </nav>
            <router-view></router-view>
        </v-main>
        <notification />
    </v-app>
</template>
<script>
import Notification from './../shared-components/Notification';
import AdminMenu from './AdminMenu';

export default {
    name: 'Home',
    components: {Notification, AdminMenu}
}
</script>
