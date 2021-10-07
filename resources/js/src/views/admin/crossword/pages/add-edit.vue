<template>
    <v-container class="m-30">
        <create-form v-if="!creating" @change="generateCrosswordField"/>
        <create-crossword
            v-else
            :rows="crosswordCells.rows"
            :cols="crosswordCells.cols"/>
    </v-container>
</template>
<script>
import CreateForm from './../../../../components/pages/admin/crossword/create-form';
import CreateCrossword from './../../../../components/pages/admin/crossword/create-crossword';

export default {
    name: 'add-edit',
    data() {
        return {
            creating: false,
            crosswordCells: {
                rows: null,
                cols: null
            }
        }
    },
    components: {CreateForm, CreateCrossword},
    created() {
    },
    methods: {
        generateCrosswordField(e) {
            this.creating = !this.creating;
            this.crosswordCells = e;
        }
    },
}
</script>
