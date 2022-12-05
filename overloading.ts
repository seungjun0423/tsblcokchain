type Add = {
  (a: number, b: number) : number,
  (a: number, b: string) : number,
};

const add: Add,private = (a,b) => a+b;