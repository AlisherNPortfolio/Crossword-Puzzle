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
                        class="crossword__col">
                        <!-- <input type="text" maxlength="1"> -->
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

                if (this.checkSequence(selectedCell)) {
                    this.selectedCells.pop();
                    this.onProcess = false;
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
        checkSequence(currentCell) {
            if (this.onProcess && this.selectedCells.length >= 2) {
                const currentCoords = currentCell.dataset.coords.split(',');
                // const currentCellIndex = this.selectedCells.findIndex(cell => cell === currentCell);
                let beforeCell = this.selectedCells[this.selectedCells.length - 2];

                // if (currentCellIndex > 0) {
                //      beforeCell = this.selectedCells[currentCellIndex - 1];
                // }

                const beforeCoords = beforeCell.dataset.coords.split(',');

                return currentCoords[0] - beforeCoords[0] === 0 &&
                       currentCoords[1] - beforeCoords[1] === 0;
            }
        },
        getDirection() {
            if (this.onProcess && this.selectedCells.length >= 2) {
                const firstCell = this.selectedCells[0];
                const secondCell = this.selectedCells[1];
                const coords1 = firstCell.dataset.coords.split(',');
                const coords2 = secondCell.dataset.coords.split(',');
                const subRow = coords1[0] - coords2[0],
                        subCol = coords1[1] - coords2[1];

                let direction = null;

                if (subRow < 0 && subCol === 0) {
                    direction = 'down';
                }

                if (subRow > 0 && subCol === 0) {
                    direction = 'up';
                }

                if (subRow === 0 && subCol < 0) {
                    direction = 'right';
                }

                if (subRow === 0 && subCol > 0) {
                    direction = 'left';
                }

                return direction;
            }
        },
        setCellColor(cell) {
            cell.style.backgroundColor = '#8f9552';
            cell.dataset.selected = true;
        },
        // checkSequence() {
        //     if (this.onProcess && this.selectedCells.length >= 2) {
        //         const firstCell = this.selectedCells[0];
        //         const secondCell = this.selectedCells[1];
        //         const coords1 = firstCell.dataset.coords.split(',');
        //         const coords2 = secondCell.dataset.coords.split(',');
        //         const subRow = coords1[0] - coords2[0],
        //               subCol = coords1[1] - coords2[1];

        //         let direction = null;

        //         if (subRow < 0 && subCol === 0) {
        //             direction = 'down';
        //         }

        //         if (subRow > 0 && subCol === 0) {
        //             direction = 'up';
        //         }

        //         if (subRow === 0 && subCol < 0) {
        //             direction = 'right';
        //         }

        //         if (subRow === 0 && subCol > 0) {
        //             direction = 'left';
        //         }



        //         this.coordX = coords1[0];
        //         this.coordY = coords1[1];
        //     }
        // },
    }
}
</script>
