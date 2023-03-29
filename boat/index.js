
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
    name: 'paco',
    weight: 40
  }
];

let peopleInEastSide = [];

let tripNumber = 1;

let sortedPeopleInWestSide = peopleInWestSide.sort((a, b) => { return a.weight - b.weight; });

console.log(boat);
console.log(peopleInWestSide);
console.log(sortedPeopleInWestSide);

while (sortedPeopleInWestSide.length) {

  if (boat.isInWestSide) {

    console.log('Viaje número: ' + tripNumber);
    tripNumber++;

    let indexInSortedPeopleInWestSide = 0;
    let weightToCharge = 0;

    while (weightToCharge <= boat.maxWeight) {

      weightToCharge += sortedPeopleInWestSide[0].weight;
      let x = sortedPeopleInWestSide.shift();
      peopleInEastSide.push(x);
      // peopleInEastSide.push(sortedPeopleInWestSide.shift());
      console.log('sortedPeopleInWestSide ', sortedPeopleInWestSide);
      console.log('peopleInEastSide ', peopleInEastSide);
      console.log('Cruza el de ' + peopleInEastSide[indexInSortedPeopleInWestSide].weight + ' kilos');
      indexInSortedPeopleInWestSide++;

    }

    boat.isInWestSide = false;

  } else {

    peopleInWestSide.unshift(peopleInEastSide.shift());
    console.log('Vuelve el de ' + peopleInWestSide[0].weight + ' kilos');

    boat.isInWestSide = true;

  }

}
