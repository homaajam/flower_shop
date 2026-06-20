let products =[
  {
    id: 1,
    category: "flower",
    name: "pink Rose",
    price: 25,
    image: "https://i.pinimg.com/736x/72/cc/75/72cc75de36527dd93d2ac3f2ea2dcd2c.jpg"
  },
  {
    id: 2,
    category: "flower",
    name: "Pink Tulip",
    price: 30,
    image: "https://i.pinimg.com/736x/04/16/9d/04169dcddea45ee42afccef95108e195.jpg"
  },
  {
    id: 3,
    category: "flower",
    name: "Sunflower",
    price: 20,
    image: "https://i.pinimg.com/736x/c3/57/2e/c3572e41e80f637d8bceca02ec85fb9d.jpg"
  },
  {
    id: 4,
    category: "flower",
    name: "White Lily",
    price: 35,
    image: "https://i.pinimg.com/736x/e8/15/88/e81588e63c458185cae31c64c13b2b29.jpg"
  },
  {
    id: 5,
    category: "flower",
    name: "Pink Peonies",
    price: 40,
    image: "https://i.pinimg.com/736x/57/6c/2a/576c2ab75e8d339f8a74ebed0898ae70.jpg"
  },
  {
    id: 6,
    category: "flower",
    name: "Soft Pink Anthurium",
    price: 28,
    image: "https://i.pinimg.com/736x/37/ca/f0/37caf0cec0dacf21bb83d58894a27e90.jpg"
  },
  {
    id: 7,
    category: "flower",
    name: "Purple Orchid",
    price: 50,
    image: "https://i.pinimg.com/736x/09/65/e1/0965e178cb523ab031a5110cef0c81a4.jpg"
  },
  {
    id: 8,
    category: "flower",
    name: "Lavender Bundle",
    price: 22,
    image: "https://i.pinimg.com/736x/20/11/ac/2011ac07586f294fb16676a9c1af4f84.jpg"
  },
  {
    id: 9,
    category: "flower",
    name: "Pink gerbera",
    price: 60,
    image: "https://i.pinimg.com/1200x/5e/d2/29/5ed229f83ea5d97921aefd66ea2f2627.jpg"
  }
];

 let wraps =[
  {
    id: 11,
    category: "wrap",
    name: "Red Wrap",
    color: "red",
    image: "https://i.pinimg.com/736x/61/85/e6/6185e6e4a196d1cecef8eb05db5d15a1.jpg",
    price: 4
  },
  {
    id: 12,
    category: "wrap",
    name: "Pink Wrap",
    color: "pink",
    image: "https://i.pinimg.com/736x/4a/b7/1b/4ab71ba429a8f80a7e97fac1cff259e8.jpg",
    price: 4
  },
  {
    id: 13,
    category: "wrap",
    name: "Navy Wrap",
    color: "navy",
    image: "https://i.pinimg.com/736x/90/7d/d2/907dd21e428453a6d6350524e0564772.jpg",
    price: 4
  }

];

const ribbons =[
  {
    id: 21,
    category: "ribbon",
    name: "Red Ribbon",
    color: "red",
    image: "https://i.pinimg.com/736x/23/5f/1d/235f1d3baa9ab85b204ebc8aee867f62.jpg",
    price: 2
  },
  {
    id: 22,
    category: "ribbon",
    name: "Blue Ribbon",
    color: "blue",
    image: "https://i.pinimg.com/736x/4a/3b/e7/4a3be7c5abc6a941ed88085fd4e78479.jpg",
    price: 3
  },
  {id: 23,
    name: "Gold Ribbon",
    category: "ribbon",
    color: "gold",
    image: "https://i.pinimg.com/736x/7f/a9/9e/7fa99e1ecc92a0938b2ed42d91733a92.jpg",
    price: 2
  }

];

export function getProducts(){
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(products), 1000);
  });
}
export function getWraps(){
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(wraps), 1000)
  })
}

export function getRibbons(){
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(ribbons), 1000)
  })
}
 