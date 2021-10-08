<template>
    <div>
        <table>
            <tbody>
                <tr
                v-for="(row, idx) in rows"
                :key="idx"
                :id="`crossword__row-${row}`"
                class="crossword__row">
                    <td
                        v-for="(col, idy) in cols"
                        @mousedown="startSelection"
                        @click="startSelection"
                        @mouseup="endSelection"
                        @mousemove="processSelection"
                        :key="idy"
                        :data-coords="`${row},${col}`"
                        :data-selected="false"
                        :id="`crossword__row-${col}`"
                        class="crossword__col"
                        disabled>
                        <!-- <input type="text" maxlength="1"> -->
                        <!-- <textarea cols="20" rows="1" class="question-input"></textarea> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
// birinchi va oxirgi kataklarni tanlab shu kataklar orasiga so'z qo'yish
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
            onProcess: false,
            fromCell: null,
            toCell: null,
            selectedCells: [],
            coordX: null,
            coordY: null
        }
    },
    methods: {
        startSelection(e) {
            const selectedCell = e.target;

            if (!selectedCell.dataset.selected) {
                this.onProcess = true;
                this.fromCell = selectedCell;
                this.selectedCells = [];
                this.selectedCells.push(selectedCell);
                this.setCellColor(selectedCell);
            }

            console.log('start', e);
        },
        processSelection(e) {
            // console.log('on process', this.onProcess, this.fromCell)
            if (this.onProcess && this.fromCell) {

                const selectedCell = e.target;

                if (!this.selectedCells.includes(selectedCell) &&
                    selectedCell.dataset.selected) {
                    this.selectedCells.push(selectedCell);
                }

                this.setCellColor(selectedCell);

                console.log('process', e)
            }
        },
        endSelection(e) {
            this.onProcess = false;
            this.toCell = e.target;

            this.fromCell = null;
            this.processing();

            console.log('end', e);
        },
        processing() {
            if (this.selectedCells.length > 0) {
                this.selectedCells.forEach(cell => {
                    console.log(cell);
                })
            }
        },
        setCellColor(cell) {
            cell.style.backgroundColor = '#8f9552';
            cell.dataset.selected = true;
        }
    }
}
</script>
<style scoped>
/* .disabled {
    pointer-events:none;
} */
</style>
