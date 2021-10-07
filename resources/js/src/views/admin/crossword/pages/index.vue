<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="4">
                <router-link to="/admin/crossword/create">
                    <v-btn
                        class="mx-2"
                        small
                        color="secondary"
                    >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                        Add
                    </v-btn>
                </router-link>
            </v-col>
            <v-col cols="12" md="6"></v-col>
            <v-col cols="12" md="2" align="end"></v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="list"
                    :hide-default-footer="true"
                    class="elevation-1"
                    >
                    <template v-slot:[`item.action`]="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="edit(item.id)">
                                mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="remove(item.id)">
                                mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
                <pagination
                    :total="this.total"
                    :perPage="10"
                    @paginate="pagination($event)">
                </pagination>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Pagination from './../../../../components/shared-components/Pagination';

export default {
    name: 'index',
    data() {
        return {
            list: [
                {
                    name: 'Crossword 1',
                    status: 1,
                    viewed: 10
                }
            ],
            query: {
                page: 1
            },
            headers: [
                { text: 'ID', value: 'id' },
                { text: 'Name', value: 'name' },
                { text: 'Status', value: 'status' },
                { text: 'Viewed', value: 'viewed' },
                { text: 'Action', value: 'action', width: '5%'}
            ],
            total: 0
        }
    },
    components: {Pagination},
    created() {
        this.load();
    },
    methods: {
        load() {

        },
        edit(id) {
            this.$router.push({name: '', params: {id: id}});
        },
        remove(id) {

        },

        pagination(page) {
            this.query.page = page;
            this.load();
        }
    }
}
</script>
