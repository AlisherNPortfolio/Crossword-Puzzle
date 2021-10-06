<template>
<v-navigation-drawer v-model="isOpen" app clipped>
    <v-list dense>

        <template v-for="(menu, idx) in menuItems">
            <v-list-item :key="idx" v-if="menu.link">
                <router-link :to="menu.link">
                    <v-list-item-action>
                        <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                </router-link>
            </v-list-item>
            <v-list-group :prepend-icon="menu.icon" no-action :key="idx" v-else>
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item v-for="(subMenu, idy) in menu.children" :key="idy">
                <router-link :to="subMenu.link">
                    <v-list-item-action>
                        <v-icon>{{ subMenu.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ subMenu.title }}</v-list-item-title>
                    </v-list-item-content>
                </router-link>
            </v-list-item>
        </v-list-group>
        </template>

    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    name: 'main-menu',
    props: {
        isOpen: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            menuItems: [
                {
                    title: 'Dashboard',
                    link: '/admin',
                    icon: 'mdi-view-dashboard'
                },
                // {
                //     title: 'User Roles',
                //     link: '/',
                //     icon: 'mdi-account'
                // },
                // {
                //     title: 'Club Data',
                //     link: '/',
                //     icon: 'mdi-database'
                // },
                // {
                //     title: 'Club Info',
                //     link: null,
                //     icon: 'mdi-information-outline',
                //     children: [
                //         {
                //             title: 'Contacts',
                //             link: '/',
                //             icon: 'mdi-contacts'
                //         },
                //         {
                //             title: 'Grounds',
                //             link: '/',
                //             icon: 'mdi-stadium'
                //         },
                //         {
                //             title: 'Clubhouse',
                //             link: '/',
                //             icon: 'mdi-home-circle'
                //         },
                //         {
                //             title: 'History',
                //             link: '/',
                //             icon: 'mdi-history'
                //         },
                //     ]
                // },
                // {
                //     title: 'Teams',
                //     link: '/',
                //     icon: 'mdi-account-multiple'
                // },
                // {
                //     title: 'Images',
                //     link: '/',
                //     icon: 'mdi-image-filter'
                // },
                // {
                //     title: 'Match Reports',
                //     link: '/',
                //     icon: 'mdi-file-chart'
                // },
                // {
                //     title: 'Club News',
                //     link: '/',
                //     icon: 'mdi-newspaper'
                // },
                // {
                //     title: 'Sponsors',
                //     link: '/',
                //     icon: 'mdi-currency-gbp'
                // },
                // {
                //     title: 'Vacancies',
                //     link: '/',
                //     icon: 'mdi-account-search'
                // },
                // {
                //     title: 'Files',
                //     link: '/',
                //     icon: 'mdi-file-multiple'
                // },
                // {
                //     title: 'Media Library',
                //     link: '/',
                //     icon: 'mdi-folder-multiple-image'
                // }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
div.v-list-item {

    a.router-link-active {
        align-items: center;
        display: flex;
        flex: 1 1 100%;
        letter-spacing: normal;
        min-height: 48px;
        outline: none;
        padding: 0 16px;
        position: relative;
        text-decoration: none;
        color: #000;

        &:hover {
            background: hsla(0,0%,100%,.12);
        }
    }
}
</style>
