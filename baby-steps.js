let total = 0;

process.argv.slice(2).forEach((value,index) => {
    total += Number(value);
  });

console.log(total);