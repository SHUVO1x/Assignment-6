const loadCategory=async()=>{
    const res=await fetch("https://openapi.programming-hero.com/api/categories");
    const json=await res.json();
    displayCategory(json.categories)
}
const manageSpinner=(check)=>{
    if(check===true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("plant-cards-container").classList.add("hidden")
    }
    else{
        document.getElementById("plant-cards-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}
const removeActiveClass=()=>{
   const categoryButtons= document.querySelectorAll(".category-button")
   categoryButtons.forEach(categoryButton=>{
    categoryButton.classList.remove('Active')
   })
}
const loadPlant= async(id)=>{
    manageSpinner(true)
    const res=await fetch (`https://openapi.programming-hero.com/api/category/${id}`);
    const json=await res.json();
    removeActiveClass();
    const cButton=document.getElementById(`c-${id}`);
    cButton.classList.add('Active')
    displayPlants(json.plants);
   
   
}
const loadAllPlants =async()=>{
  manageSpinner(true)
   const res=await fetch (`https://openapi.programming-hero.com/api/plants`);
    const json=await res.json();
    displayPlants(json.plants);
   
}

const loadPlantDetails=async(id)=>{
    const res=await fetch (`https://openapi.programming-hero.com/api/plant/${id}`);
    const json=await res.json();
    displayPlantsDetails(json.plants);
}

const deleteCross=(e,price)=>{
  
   e.target.parentElement.parentElement.parentElement.innerHTML=''
     const totalPrice=document.getElementById("total-price");
    let priceInt=parseInt(totalPrice.innerText);
    totalPrice.innerText= priceInt-price;

}

const displayPrices=(price)=>{
  const totalPrice=document.getElementById("total-price");
  let priceInt=parseInt(totalPrice.innerText);
 
  totalPrice.innerText = priceInt+price;
}


// an unsuccessful attempt but idk why :)
// displayPrices()
// const deleteCross=(uniqueId)=>{
//   const cart=document.getElementById(uniqueId);
//   console.log(uniqueId)
//   console.log(cart)
//   // cart.innerHTML='';
//   if(cart.innerHTML===''){
//     cart.innerHTML=''
//   }
//   else{
//     cart.innerHTML='hh'
//     // cart.innerHTML=''
//   }
// }

const showCart=(name,price,id)=>{
  const cartContainer=document.getElementById("cart-container")
  const div=document.createElement("div");
  const uniqueId= `cart-id-${id}`;
  div.id=uniqueId;
  // console.log(uniqueId)
  // console.log(cartContainer)
  div.innerHTML=`
   <div class="bg-[#CFECD6] flex items-center justify-between px-3 py-3">
                <div>
                  <h1 class="font-bold text-[16px]">${name}</h1>
                  <h2>৳<span class='prices'>${price}</span></h2>
                </div>
                <div>
                <i class="fa-solid fa-xmark " onclick="deleteCross(event,'${price}')"></i>
                </div>
              </div>
  
  `
  cartContainer.appendChild(div);
  

  displayPrices(price);

}

const displayPlantsDetails=(plantsDetails)=>{
  // console.log(plantsDetails)
  const {image,name,description,category,price}=plantsDetails;
  const modalContainer=document.getElementById("modal-container")
  modalContainer.innerHTML=`
<div class="card bg-base-100 shadow-sm">
   <h2 class="card-title">${name}</h2>
           <figure class="px-3 pt-3">
              <img
                src=${image}
                alt="Shoes"
                class="rounded-xl h-[200px] w-full object-cover" />
          </figure>
                <div class="card-body  ">
                  <p class=""> <span class="font-semibold text-">Category:</span>${category}</p>
                  <p class=""> <span class="font-semibold text-">Price:</span> ${price}</p>
                  <p class=""> <span class="font-semibold text-">Description:</span> ${description}</p>
                     
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
  </div>  
  
  `
  document.getElementById("plant_modal").showModal()
}

const displayPlants=(plants)=>{
    const plantCardsContainer=document.getElementById("plant-cards-container")
    plantCardsContainer.innerHTML=''
    //   console.log(plants)
      plants.forEach(plant=>{

        // console.log(plant)
        const {id,image,name,description,category,price}=plant;
        const div=document.createElement("div");
        div.innerHTML=`
            <div class="card bg-base-100 w-90 shadow-sm">
           <figure class="px-3 pt-3">
              <img
                src=${image}
                class="rounded-xl h-[200px] w-full object-cover" />
          </figure>
                <div class="card-body  ">
                  <h2 class="card-title" onclick=loadPlantDetails(${id})>${name}</h2>
                  <p class="text-[14px]">${description}</p>
                  <div class="flex justify-between">
                  <button class="btn bg-[#DCFCE7] rounded-full text-[#15803D]">${category}</button>
                  <button class="font-bold">৳<span>${price}</span></button>
                  </div>
                  <button class="btn bg-[#15803D] text-white rounded-full" onclick="showCart('${name}' , ${price} ,${id}) ; alert('your cart has been added successfully')" >Add to Cart</button>
                  
                </div>
              </div>    
        `
         plantCardsContainer.appendChild(div)
         manageSpinner(false)
      })
      
}
const displayCategory=(categories)=>{
    const categoryContainer=document.getElementById("category-container");
    // console.log(categories)
    categories.forEach(category=>{
        const {category_name : cName ,id} = category
        // console.log(category)
        const div=document.createElement('div');
        div.innerHTML=`
        <button id="c-${id}" class="btn bg-[#CFECD6] w-full hover:bg-[#15803D] category-button" onclick=loadPlant(${id}) >${cName} </button>
        
        
        `
        categoryContainer.appendChild(div)
    })
}


loadCategory();
loadAllPlants();