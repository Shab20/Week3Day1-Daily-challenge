const listPlanets = document.querySelector('.listPlanets');

const planets = [
  { name: 'Mercury', color: 'gray', moons: 0 },
  { name: 'Venus', color: 'yellow', moons: 0 },
  { name: 'Earth', color: 'blue', moons: 1 },
  { name: 'Mars', color: 'red', moons: 2 },
  { name: 'Jupiter', color: 'orange', moons: 79 },
  { name: 'Saturn', color: 'tan', moons: 82 },
  { name: 'Uranus', color: 'cyan', moons: 27 },
  { name: 'Neptune', color: 'blue', moons: 14 }
];

planets.forEach((planet) => {
  const planetDiv = document.createElement('div');
  planetDiv.className = `planet planet-${planet.name}`;
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
    const moonDiv = document.createElement('div');
    moonDiv.className = 'moon';
    planetDiv.appendChild(moonDiv);
  }

  listPlanets.appendChild(planetDiv);
});
