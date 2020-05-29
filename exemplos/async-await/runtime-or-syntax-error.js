
/*
This synchronous error handling doesn’t just work when a
promise is rejected, but also when there’s an actual runtime or
syntax error happening. In the following example, the second
time with call our msg function we pass in a number value that
doesn’t have a toUpperCase method in its prototype chain. Our try…catch
block catches that error just as well:
*/

function caserUpper(val) {
  return new Promise((resolve, reject) => {
    resolve(val.toUpperCase());
  });
}

async function msg(x) {
  try {
    const msg = await caserUpper(x);
    console.log(msg);
  } catch(err) {
    console.log('Ohh no:', err.message);
  }
}

msg('Hello'); // HELLO
msg(34); // Ohh no: val.toUpperCase is not a function