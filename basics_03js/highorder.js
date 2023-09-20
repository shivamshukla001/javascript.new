const arr=[1,2,3,4,5]


for (const i of arr) {
    // console.log(i)
}

const greeting=["hello world"]
for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
}


const myobject={
    js :'javascript',
    cpp :'c++',
    rb  : 'ruby',
    java  :'java',
    py :'python',
}

for (const key in myobject) {
    // console.log(`${key}is the short form of ${myobject[key]}`);
}

const map=new Map()

map.set('In', "india")
map.set('USA', "United STate Of America")
map.set('Cn', "Canada")
map.set('PAK', "Pakistan")
map.set('CN', "China")


const coding=['java','python', 'C++', 'ruby','SQL']

function silver(i){
// console.log(i);
}

// coding.forEach(silver)

coding.forEach( (i,index,arr)=>{
// console.log(i,index,arr);
})



coding.forEach( function (i){
    // console.log(i);
})




coding.forEach( (j)=>{
    // console.log(j);
})

const languag=[
    {
        languagName:'java',
        languagFileName:'java'
    },{
        languagName:'python',
        languagFileName:'py'
    },{
        languagName:'javaScript',
        languagFileName:'js'
    }

]

languag.forEach( (languag)=>{
// console.log(languag.languagFileName);
})


//filter method
const mynums=[1,2,3,4,5,6,7,8]

// console.log(mynums.filter( (i)=>(i>4) ));
// console.log(mynums.filter( (i)=>{
//     return i>4
// }))

//for each method in empty array
const newnums=[]

mynums.forEach( (i)=>{
    if (i>4) {
        newnums.push(i)
    }
})
// console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbook=(books.filter( (bk)=>{
     return bk.genre==='Non-Fiction'
  }))

  let userbook2=(books.filter( (bk)=>{
     return  bk.publish>='1990'&& bk.genre==='Non-Fiction'
  }))
  let userbook3=(books.filter( (bk)=>{
     return  bk.edition<=2010 && bk.genre==='History'

  }))

//   console.log(userbook1);
//   console.log(userbook2);
//   console.log(userbook3);



//chaining (ek saath bht saare method use krna ko chaining bolt hai)
const mynewnum=[1,2,3,4,5,6,7,8,9,10]

const shivam=mynewnum
             .map( (i)=>i*10)
             .map( (i)=>i+2 )
             .filter( (i)=> i>50)

            //  console.log(shivam);

const shivam2=mynewnum
              .map( (i)=>i*10)
            .map( (i)=>i-4)
            .filter( (i)=> i>55)
//    console.log(shivam2);


   //reduce method

   const num=[1,2,3,4]

//    const total=num.reduce( function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
//    },0)

   /**
    * acc stand for accumulate and currvalue stand for current value 
       we initialize accumulate valye by '0' and after every iteration accumulate value is incresing
      currentvalue show the value store in a array in this example currenet value is [1,2,3,4]
    */
   

//    console.log(total);


   const shopingCart=[
    {
        itemname:'javaScript',
        price:900
    },
    {
        itemname:'C++',
        price:9000
    },
    {
        itemname:'java',
        price:9500
    },
    {
        itemname:'Python',
        price:1100
    },
   ]

    // const totalPrice=shopingCart.reduce( (acc,item)=>acc+item.price,0)
    // console.log(totalPrice);


    // const overallPrice=shopingCart.reduce( (acc,item)=>acc+item.price,0)

    // console.log(overallPrice);

    // const coursePrice=shopingCart.reduce( function(acc,item){
    //  return acc+item.price,0
    // })