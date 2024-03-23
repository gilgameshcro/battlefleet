let fleet = [];
let totalRP = 0;

function addUnit(unitName, unitRP, unitType = 'ship') {
    fleet.push({ name: unitName, rp: unitRP, type: unitType });
    updateFleetList();
    updateTotalRP();
}


function removeUnit(index) {
    fleet.splice(index, 1);
    updateFleetList();
    updateTotalRP();
}

function updateFleetList() {
    const listElement = document.getElementById('armyList');
    listElement.innerHTML = ''; // Clear the list
    fleet.forEach((unit, index) => {
        const unitElement = document.createElement('li');
        unitElement.innerHTML = `${unit.name} <strong>${unit.rp} RP</strong> <span class="remove-icon" onclick="removeUnit(${index})">X</span>`;
        // Add a class if the unit is a ground unit
        if(unit.type === 'ground') {
            unitElement.classList.add('ground-unit');
        }
        listElement.appendChild(unitElement);
    });
}


function updateTotalRP() {
    totalRP = fleet.reduce((acc, ship) => acc + ship.rp, 0);
    document.getElementById('totalCost').textContent = totalRP;
}
