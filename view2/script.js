const restaurants = [
  {
    name:"ร้านอาหารไทยแท้",
    img:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    address:"กรุงเทพ",
    menu:[
      {name:"ผัดไทย",price:120,img:"https://images.unsplash.com/photo-1559847844-d721426d6edc"},
      {name:"ต้มยำกุ้ง",price:150,img:"https://images.unsplash.com/photo-1604908176997-4314b7b6f8d1"}
    ]
  },
  {
    name:"ส้มตำป้าแดง",
    img:"https://images.unsplash.com/photo-1552566626-52f8b828add9",
    address:"ชลบุรี",
    menu:[
      {name:"ส้มตำไทย",price:60,img:"https://images.unsplash.com/photo-1625944525533-473f1b5e7b7d"},
      {name:"ไก่ย่าง",price:90,img:"https://images.unsplash.com/photo-1604908177522-040c3f8c6c0b"}
    ]
  },
  {
    name:"ก๋วยเตี๋ยวเรือลุงเจ๋ง",
    img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    address:"ระยอง",
    menu:[
      {name:"ก๋วยเตี๋ยวเรือ",price:50,img:"https://images.unsplash.com/photo-1604908177050-9e7d1c1f3f9b"},
      {name:"เกาเหลา",price:60,img:"https://images.unsplash.com/photo-1605478371313-bdb0a4fddc1b"}
    ]
  },
  {
    name:"ร้านอาหารญี่ปุ่น",
    img:"https://images.unsplash.com/photo-1553621042-f6e147245754",
    address:"กรุงเทพ",
    menu:[
      {name:"ซูชิ",price:180,img:"https://images.unsplash.com/photo-1562158070-622a52b1b3e4"},
      {name:"ราเมง",price:150,img:"https://images.unsplash.com/photo-1604908554027-bb9dbb3dfcc3"}
    ]
  },
  {
    name:"สเต็กเฮ้าส์",
    img:"https://images.unsplash.com/photo-1544025162-d76694265947",
    address:"ชลบุรี",
    menu:[
      {name:"สเต็กเนื้อ",price:250,img:"https://images.unsplash.com/photo-1558036117-15d82a90b9b1"},
      {name:"สเต็กไก่",price:180,img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"}
    ]
  }
];

let currentSlide = 0;

function showSlide(){
  const slide = restaurants[currentSlide];
  document.getElementById("slide").innerHTML = `
    <img src="${slide.img}">
    <h2>${slide.name}</h2>
    <p>${slide.address}</p>
    <button onclick="openMenu(${currentSlide})">ดูเมนู</button>
  `;
}

function nextSlide(){
  currentSlide = (currentSlide+1) % restaurants.length;
  showSlide();
}

function prevSlide(){
  currentSlide = (currentSlide-1+restaurants.length) % restaurants.length;
  showSlide();
}

function loadRestaurants(){
  const list = document.getElementById("restaurantList");
  list.innerHTML="";
  restaurants.forEach((r,i)=>{
    list.innerHTML+=`
      <div class="card">
        <img src="${r.img}">
        <div class="card-content">
          <h4>${r.name}</h4>
          <p>${r.address}</p>
          <button onclick="openMenu(${i})">ดูเมนู</button>
        </div>
      </div>
    `;
  });
}

function openMenu(index){
  document.getElementById("homeSection").classList.add("hidden");
  document.getElementById("menuPage").classList.remove("hidden");

  const r = restaurants[index];
  document.getElementById("menuTitle").innerText = r.name;

  const menuList = document.getElementById("menuList");
  menuList.innerHTML="";

  r.menu.forEach(m=>{
    menuList.innerHTML+=`
      <div class="menu-item">
        <img src="${m.img}">
        <div>
          <h4>${m.name}</h4>
          <p>฿${m.price}</p>
          <button onclick="addToCart()">เพิ่มลงตะกร้า</button>
        </div>
      </div>
    `;
  });
}

function goHome(){
  document.getElementById("menuPage").classList.add("hidden");
  document.getElementById("homeSection").classList.remove("hidden");
}

function addToCart(){
  alert("เพิ่มลงตะกร้าแล้ว");
}

showSlide();
loadRestaurants();