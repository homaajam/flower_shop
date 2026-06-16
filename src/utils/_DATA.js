let products =[
  {
    id: 1,
    name: "pink Rose",
    price: 25,
    image: "https://i.pinimg.com/736x/72/cc/75/72cc75de36527dd93d2ac3f2ea2dcd2c.jpg"
  },
  {
    id: 2,
    name: "Tulip",
    price: 30,
    image: "https://i.pinimg.com/736x/04/16/9d/04169dcddea45ee42afccef95108e195.jpg"
  },
  {
    id: 3,
    name: "Sunflower",
    price: 20,
    image: "https://i.pinimg.com/736x/c3/57/2e/c3572e41e80f637d8bceca02ec85fb9d.jpg"
  },
  {
    id: 4,
    name: "White Lily",
    price: 35,
    image: "https://i.pinimg.com/736x/e8/15/88/e81588e63c458185cae31c64c13b2b29.jpg"
  },
  {
    id: 5,
    name: "Pink Peonies",
    price: 40,
    image: "https://i.pinimg.com/736x/57/6c/2a/576c2ab75e8d339f8a74ebed0898ae70.jpg"
  },
  {
    id: 6,
    name: "Mixed Spring Flowers",
    price: 28,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 7,
    name: "Orchid Elegance",
    price: 50,
    image: "https://i.pinimg.com/736x/09/65/e1/0965e178cb523ab031a5110cef0c81a4.jpg"
  },
  {
    id: 8,
    name: "Lavender Bundle",
    price: 22,
    image: "https://i.pinimg.com/736x/20/11/ac/2011ac07586f294fb16676a9c1af4f84.jpg"
  },
  {
    id: 9,
    name: "Wedding Bouquet",
    price: 60,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  }
];

 let wraps =[
  {
    id: 1,
    name: "Red Wrap",
    color: "red",
    image: ""
  },
  {
    id: 2,
    name: "White Wrap",
    color: "white",
    image: ""
  }
];

const ribbons =[
  {
    id: 1,
    name: "Red Ribbon",
    color: "red",
    image: "https://i.pinimg.com/736x/23/5f/1d/235f1d3baa9ab85b204ebc8aee867f62.jpg"
  },
  {
    id: 2,
    name: "Blue Ribbon",
    color: "blue",
    image: "https://i.pinimg.com/736x/4a/3b/e7/4a3be7c5abc6a941ed88085fd4e78479.jpg"
  },
  {id: 3,
    name: "Gold Ribbon",
    color: "goald",
    image: "https://i.pinimg.com/736x/7f/a9/9e/7fa99e1ecc92a0938b2ed42d91733a92.jpg"
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
 