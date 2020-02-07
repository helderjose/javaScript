export const testeUtils = () => {
  console.log("funcionou")
}

export const  slugify = (string) => {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  
  return string.toString().toLowerCase().trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export const dateFormat = (dateToFormat, format) => {
  let formatedDate = new Date();
  let year;
  let month;
  let day;

  dateToFormat = dateToFormat ? new Date(dateToFormat) : new Date();

  year = dateToFormat.getFullYear();
  month = dateToFormat.getMonth() + 1;
  day = dateToFormat.getDate();

  dateToFormat.getUTCHours() === 0
    && dateToFormat.getUTCHours() === dateToFormat.getUTCMinutes()
      && dateToFormat.getUTCMinutes() === dateToFormat.getUTCSeconds()
        && day++;

  if(format === 'DD/MM/YYYY') {

    if(String(month).length === 1) {
      month = '0' + month;
    }
    
    formatedDate = `${day}/${month}/${year}`
  }

  return formatedDate;
}
