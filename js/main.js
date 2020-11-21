const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

const typeReconstructionElem = document.querySelectorAll('input[name="type"]');
const typeBuildingElem = document.querySelectorAll('input[name="building"]');
const roomsElem = document.querySelectorAll('input[name="rooms"]');

const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePricePerMeter = 6000;
const totalPriceElement = document.querySelector('#total-price');

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
});

const inputs = document.querySelectorAll('input');

inputs.forEach(function (input) {
    input.addEventListener('input', calculate)
})

calculate();

function calculate() {
    const square = parseInt(squareInput.value);

    let typeReconstructionCost;
    typeReconstructionElem.forEach(function (item) {
        if (item.checked) {
            typeReconstructionCost = parseFloat(item.value);
        }
    })

    let typeBuildingCost;
    typeBuildingElem.forEach(function (item) {
        if (item.checked) {
            typeBuildingCost = parseFloat(item.value);
        }
    })

    let roomsCost;
    roomsElem.forEach(function (item) {
        if (item.checked) {
            roomsCost = parseFloat(item.value);
        }
    })


    const ceilingCost = ceiling.checked ? parseFloat(ceiling.value) : 1;
    const wallsCost = walls.checked ? parseFloat(walls.value) : 1;
    const floorCost = floor.checked ? parseFloat(floor.value) : 1;

    const totalPrice = floorCost * wallsCost * ceilingCost * roomsCost * typeBuildingCost * typeReconstructionCost * square * basePricePerMeter;

    const formatter = Intl.NumberFormat('ru');

    totalPriceElement.innerText = formatter.format(totalPrice);

}