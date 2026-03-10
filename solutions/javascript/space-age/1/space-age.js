//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const EarthSeconds = 31557600;
  
  switch (planet) {
    case 'mercury':
      const orbitalPeriodMercury = 0.2408467;
      const ageMercury = Math.round((seconds / (orbitalPeriodMercury * EarthSeconds)) * 100) / 100;

      return ageMercury;

    case 'venus':
      const orbitalPeriodVenus = 0.61519726;
      const ageVenus = Math.round((seconds / (orbitalPeriodVenus * EarthSeconds)) * 100) / 100;

      return ageVenus;

    case 'earth':
      const ageEarth = Math.round((seconds / EarthSeconds) * 100) / 100;

      return ageEarth;

    case 'mars':
      const orbitalPeriodMars = 1.8808158;
      const ageMars = Math.round((seconds / (orbitalPeriodMars * EarthSeconds)) * 100) / 100;

      return ageMars;

    case 'jupiter':
      const orbitalPeriodJupiter = 11.862615;
      const ageJupiter = Math.round((seconds / (orbitalPeriodJupiter * EarthSeconds)) * 100) / 100;

      return ageJupiter;

    case 'saturn':
      const orbitalPeriodSaturn = 29.447498;
      const ageSaturn = Math.round((seconds / (orbitalPeriodSaturn * EarthSeconds)) * 100) / 100;

      return ageSaturn;

    case 'uranus':
      const orbitalPeriodUranus = 84.016846;
      const ageUranus = Math.round((seconds / (orbitalPeriodUranus * EarthSeconds)) * 100) / 100;

      return ageUranus;

    case 'neptune':
      const orbitalPeriodNeptune = 164.79132;
      const ageNeptune = Math.round((seconds / (orbitalPeriodNeptune * EarthSeconds)) * 100) / 100;

      return ageNeptune;
  }
};
