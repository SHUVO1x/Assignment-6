const loadCategory=async()=>{
    const res=await fetch("https://openapi.programming-hero.com/api/categories");
    const json=await res.json();
    displayCategory(json.categories)
}

const loadPlant= async(id)=>{
    const res=await fetch (`https://openapi.programming-hero.com/api/category/${id}`);
    const json=await res.json();
    displayPlants(json.plants);
   
   
}
const loadAllPlants =async()=>{
   const res=await fetch (`https://openapi.programming-hero.com/api/plants`);
    const json=await res.json();
    displayPlants(json.plants);
   
}

const loadPlantDetails=async(id)=>{
    const res=await fetch (`https://openapi.programming-hero.com/api/plant/${id}`);
    const json=await res.json();
    displayPlantsDetails(json.plants);
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
                  <button class="btn bg-[#15803D] text-white rounded-full" >Add to Cart</button>
                  
                </div>
              </div>    
        `
         plantCardsContainer.appendChild(div)
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
        <button class="btn bg-[#CFECD6] w-full hover:bg-[#15803D] category-button" onclick=loadPlant(${id}) >${cName} </button>
        
        
        `
        categoryContainer.appendChild(div)
    })
}


loadCategory();
loadAllPlants();