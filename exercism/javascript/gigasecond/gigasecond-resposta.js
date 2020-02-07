export const gigasecond = (date) => {
    let gigasecond = Math.pow(10, 9)
    let dateSeconds = date.getUTCSeconds()
    
    date.setUTCSeconds(dateSeconds + gigasecond)
    return date


    // funciona, só que não gostei da clareza do código
    // date.setUTCSeconds(date.getUTCSeconds() + Math.pow(10, 9))
    // return date

    // assim retorna em milisegundos e não pasa nos testes
    // return date.setUTCSeconds(date.getUTCSeconds() + Math.pow(10, 9))
}