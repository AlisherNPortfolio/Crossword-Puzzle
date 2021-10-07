<template>
    <div>
        <v-row>
            <v-col cols="12" md="3">
                <v-text-field
                    v-model="crosswordTbale.rows"
                    label="Rows"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                    <v-text-field
                        v-model="crosswordTbale.cols"
                        label="Cols"
                        required
                    ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-row>
                    <v-col align="end">
                        <v-btn
                            depressed
                            color="secondary"
                            @click="backHome()"
                            >
                            Back
                        </v-btn>
                        <v-btn
                            depressed
                            color="primary"
                            @click="create()"
                            >
                            Create
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'create-form',
    props: {},
    data() {
        return {
            crosswordTbale: {
                rows: null,
                cols: null
            }
        }
    },
    methods: {
        create() {
            this.$emit('change', {
                rows: +this.crosswordTbale.rows,
                cols: +this.crosswordTbale.cols,
            })
        },
        backHome() {
            this.$router.go(-1);
        }
    }
}
</script>
