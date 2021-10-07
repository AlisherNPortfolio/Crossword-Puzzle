<template>
    <div>
        <table>
            <tbody>
                <tr v-for="(row, idx) in rows" :key="idx">
                    <td v-for="(col, idy) in cols" :key="idy">
                        <input type="text" maxlength="1">
                        <!-- <textarea cols="20" rows="1" class="question-input"></textarea> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'create-crossword',
    props: {
        rows: {
            type: Number,
            default: 7,
            validator: function (value) {
                return value <= 20 || value >=7;
            }
        },
        cols: {
            type: Number,
            default: 7,
            validator: function (value) {
                return value <= 20 || value >=7;
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
