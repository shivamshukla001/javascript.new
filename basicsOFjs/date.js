//dates

const mydate=new Date()
console.log(mydate);

console.log(mydate.toDateString());
console.log('datastring: '+mydate.toDateString());

console.log('isosstring: '+mydate.toISOString());

console.log('json: '+ mydate.toJSON());

console.log('localdtastring: '+ mydate.toLocaleDateString());

console.log('localstring: '+ mydate.toLocaleString());

console.log('localtimesring: '+mydate.toLocaleTimeString());


let mycreatedata=new Date("2023-07-14")
console.log(mycreatedata);


let mytimestamp=Date.now()

console.log(mytimestamp);
console.log(mycreatedata.getTime());