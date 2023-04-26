// position Ships on myBoard
const positionPlayerShips = () => {
  const mouseInfo = e => {
    const selectedCell = document.getElementById(e.target.id);
    if (selectedCell.innerText === '' && playerBoat) {
      selectedCell.innerText = '1';
      playerBoat--;
      infoDiv.innerText = 'Your Boat was launched';
    } else if (!playerBoat && playerCruise) {
      selectedCell.innerText = '2';
      playerCruise--;
      infoDiv.innerText = 'Your Cruise was launched';
    }
    else if (!playerCruise && playerSubmarine) {
      selectedCell.innerText = '3';
      playerSubmarine--;
      infoDiv.innerText = ' Your Submarine was launched';
    }
    else if (!playerSubmarine && playerVessel) {
      selectedCell.innerText = '4';
      playerVessel--;
      infoDiv.innerText = ' Your Vessel was launched';
    }
    else if (!playerVessel && playerAircraftCarrier) {
      selectedCell.innerText = '5';
      playerAircraftCarrier--;
      infoDiv.innerText = ' Your AircraftCarrier was launched';
    }
    else {
      infoDiv.innerText = 'No ships left to launch asshole!!!';
    }
  };
  document.addEventListener('click', mouseInfo);
};
