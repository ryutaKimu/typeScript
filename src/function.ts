
const range = (min: number, max: number): number[] => {
  const result: number[] = [];
  for(let i:number = min; i <= max; i++){
    result.push(i);
  }
  return result;
}

console.log(range(1, 10));