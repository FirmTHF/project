// slide
const slides = [
  {
    name: "แกงเขียวหวาน",
    desc: "เข้มข้น กลมกล่อม",
    price: 130,
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
  },
  {
    name: "ผัดไทย",
    desc: "หอมมะขาม",
    price: 90,
    img: "https://images.unsplash.com/photo-1559314809-0f31657c3b1c"
  }
];

let currentSlide = 0;

function showSlide(){
  document.getElementById("slide-img").src = slides[currentSlide].img;
  document.getElementById("slide-name").innerText = slides[currentSlide].name;
  document.getElementById("slide-desc").innerText = slides[currentSlide].desc;
  document.getElementById("slide-price").innerText = "฿"+slides[currentSlide].price;
}

function nextSlide(){
  currentSlide=(currentSlide+1)%slides.length;
  showSlide();
}

function prevSlide(){
  currentSlide=(currentSlide-1+slides.length)%slides.length;
  showSlide();
}

function addSlideToCart(){
  addToCart(slides[currentSlide].name,slides[currentSlide].price);
}

// menu
const shops={
  thai:[{name:"ต้มยำกุ้ง",price:150},{name:"แกงเขียวหวาน",price:130}],
  somtam:[{name:"ส้มตำ",price:50},{name:"ไก่ย่าง",price:80}],
  noodle:[{name:"ก๋วยเตี๋ยวเรือ",price:60}]
};

let cart=[];
let historyData=[];

function openShop(shop){
  hideAll();
  document.getElementById("menu").classList.remove("hidden");

  const menu=document.getElementById("menu-items");
  menu.innerHTML="";

  shops[shop].forEach(item=>{
    menu.innerHTML+=`
    <div class="menu-item">
      <h4>${item.name}</h4>
      <p>${item.price} บาท</p>
      <button onclick="addToCart('${item.name}',${item.price})">เพิ่ม</button>
    </div>`;
  });
}

function addToCart(name,price){
  cart.push({name,price});
  document.getElementById("cart-count").innerText=cart.length;
  alert("เพิ่มแล้ว");
}

function showCart(){
  hideAll();
  document.getElementById("cart").classList.remove("hidden");

  const list=document.getElementById("cart-items");
  list.innerHTML="";
  let total=0;

  cart.forEach(item=>{
    list.innerHTML+=`<li>${item.name} - ${item.price}</li>`;
    total+=item.price;
  });

  document.getElementById("total").innerText="รวม "+total+" บาท";
}

function checkout(){
  if(cart.length===0){ alert("ไม่มีสินค้า"); return;}
  historyData.push([...cart]);
  cart=[];
  document.getElementById("cart-count").innerText=0;
  alert("สั่งซื้อสำเร็จ");
  showHome();
}

function showHistory(){
  hideAll();
  document.getElementById("history").classList.remove("hidden");

  const list=document.getElementById("history-list");
  list.innerHTML="";

  historyData.forEach((order,i)=>{
    const items=order.map(x=>x.name).join(", ");
    list.innerHTML+=`<li>ออเดอร์ ${i+1}: ${items}</li>`;
  });
}

function showHome(){
  hideAll();
  document.getElementById("shops").classList.remove("hidden");
}

function hideAll(){
  document.getElementById("shops").classList.add("hidden");
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("cart").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");
}

showSlide();