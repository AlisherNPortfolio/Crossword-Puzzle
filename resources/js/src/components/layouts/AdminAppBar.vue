<template>
    <v-app-bar
        app
        clipped-left
        >
      <v-app-bar-nav-icon @click.stop="openMenu()"></v-app-bar-nav-icon>
      <v-toolbar-title> Dashboard</v-toolbar-title>
    </v-app-bar>
</template>
<script>
export default {
    name: 'admin-app-bar',
    data() {
        return {
            drawer: true
        }
    },
    methods: {
        openMenu() {
            this.drawer = !this.drawer;
            this.$emit('clickHamburger', this.drawer);
        }
    }
}
</script>
