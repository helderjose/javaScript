
const getAgeInEarth = (seconds) => {
    let minuteInSeconds = 60;
    let hourInSeconds = 60 * minuteInSeconds;
    let dayInSeconds = 24 * hourInSeconds;
    let earthYearInSeconds = 365.25 * dayInSeconds;
    let ageInEarth = seconds / earthYearInSeconds;
    return ageInEarth
}

export const age = (planet, seconds) => {
    let ageInYears

    switch(planet) {
        case 'earth':
            ageInYears = getAgeInEarth(seconds)
        break
        case 'mercury':
            ageInYears = getAgeInEarth(seconds) / 0.2408467
        break
        case 'venus':
            ageInYears = getAgeInEarth(seconds) / 0.61519726
        break
        case 'mars':
            ageInYears = getAgeInEarth(seconds) / 1.8808158
        break
        case 'jupiter':
            ageInYears = getAgeInEarth(seconds) / 11.862615
        break
        case 'saturn':
            ageInYears = getAgeInEarth(seconds) / 29.447498
        break
        case 'uranus':
            ageInYears = getAgeInEarth(seconds) / 84.016846
        break
        case 'neptune':
            ageInYears = getAgeInEarth(seconds) / 164.79132
        break
    }

    ageInYears = ageInYears.toFixed(2)
    ageInYears = parseFloat(ageInYears)
    return ageInYears;
}