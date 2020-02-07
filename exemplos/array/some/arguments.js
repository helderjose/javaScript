var ages = [30, 10, 18, 20];

ages.some((age, index, arr) =>   {
  console.log("currentValue: ", age, "| index: ", index, " | arr: ", arr);
})
