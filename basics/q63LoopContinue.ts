for (let i: number = 0; i < 11; i++){
  if ( i%2 === 0 ) continue;
  console.log(i); 
}

for (let i: number = 0; i < 11; i++){
  if ( i === 5 ) break;
  console.log(i); 
}