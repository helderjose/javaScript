export const age = (planet, ageInSeconds) => {
    const earthYearSeconds = 31557600,
      earthYearEquivalents = {
        earth: 1,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
      },
      round2 = n => parseFloat(Math.round(n + "e2")  + "e-2");
  
    return round2(ageInSeconds / earthYearSeconds / earthYearEquivalents[planet]);
  };