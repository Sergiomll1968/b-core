
const boat = {
  maxWeight: 100,
  isInWestSide: true,
};

const peopleInWestSide = [
  {
    name: 'pepe',
    weight: 100
  },
  {
    name: 'juan',
    weight: 60
  },
  {
    name: 'pepe',
    weight: 100
  },
  {
    name: 'paco',
    weight: 40
  },
  {
    name: 'pepe',
    weight: 100
  }
];

const peopleInEastSide = [];

let tripNumber = 1;

let sortedPeopleInWestSide = peopleInWestSide.sort((a, b) => a.weight - b.weight);
console.log('sortedPeopleInWestSide: ', JSON.stringify(sortedPeopleInWestSide));

while (sortedPeopleInWestSide.length) {

  if (boat.isInWestSide) {

    console.log('Viaje número: ' + tripNumber);
    tripNumber++;

    let indexInSortedPeopleInWestSide = 0;
    let weightToCharge = 0;

    while ((weightToCharge <= boat.maxWeight) || (tripNumber = 20)) {

      console.log('Entrando en segundo while');

      while (sortedPeopleInWestSide.length) {

      const nextPersonToBoat = sortedPeopleInWestSide.shift();
      weightToCharge += nextPersonToBoat.weight;
      console.log(weightToCharge);

      console.log('nextPersonToBoat :', JSON.stringify(nextPersonToBoat));
      peopleInEastSide.push(nextPersonToBoat);

      console.log('sortedPeopleInWestSide: ', JSON.stringify(sortedPeopleInWestSide));
      console.log('peopleInEastSide: ', JSON.stringify(peopleInEastSide));
      console.log('Cruza el de ' + peopleInEastSide[indexInSortedPeopleInWestSide].weight + ' kilos');

      indexInSortedPeopleInWestSide++;

      }

    }

    boat.isInWestSide = false;

  } else {

    sortedPeopleInWestSide.unshift(peopleInEastSide.shift());
    console.log('Vuelve el de ' + sortedPeopleInWestSide[0].weight + ' kilos');

    boat.isInWestSide = true;

  }

  console.log('Voy a salir del primer while');

  sortedPeopleInWestSide = [];

}
