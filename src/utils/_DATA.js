let products =[
  {
    id: 1,
    name: "Rose Bouquet",
    price: 25,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7"
  },
  {
    id: 2,
    name: "Tulip Mix",
    price: 30,
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c"
  },
  {
    id: 3,
    name: "Sunflower Set",
    price: 20,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 4,
    name: "White Lily Bouquet",
    price: 35,
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d"
  },
  {
    id: 5,
    name: "Pink Peonies",
    price: 40,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
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
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9"
  },
  {
    id: 8,
    name: "Lavender Bundle",
    price: 22,
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde"
  },
  {
    id: 9,
    name: "Wedding Bouquet",
    price: 60,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  }
];

export function getProducts(){
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(products), 1000);
  });
}
