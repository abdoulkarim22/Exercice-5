// -console.log(datas);
// Structure de datas:
// - fullname: string
// - profil: string
// - email : string
// - description : string
// - socials : [Social, Social, ...]
// - works : [Work, Work, ...]
// - experience : [Experience, Experience, ...]

// Structure de Social:
// name : string
// url : string
// link : string

// Structure de Work:
// name: string,
// url: string,
// technology: [Techo, Techno, ...],
// preview: string

// Structure de Experience:
// name: string,
// link: string,
// technology: [Techo, Techno, ...]

// 1.
// =============== Titres ==================================
const titre = document.getElementById("fullName");
titre.innerText = datas.fullname;
//  =======================================================


// 2. =============le deuxieme titre =======================
const lesdeuxiemetitre = document.getElementById("profil");
lesdeuxiemetitre.innerText = datas.profil;
//  =======================================================


// 3.=======================================================
const leparagraphe = document.getElementById("description");
leparagraphe.innerText = datas.description;
//  =======================================================


// 4======================================================
const limages = document.querySelector("#picture");
limages.src = datas.picture;
//  =======================================================



// 5.
//  =======================================================
const ul = document.querySelectorAll(".socials");

for (let i = 0; i < ul.length; i++) {
   for (let j = 0; j < ul[i].children.length; j++) {
    ul[i].children[j].innerHTML = `<li>
    <a href="datasSocialsUrl"><img src="${datas.socials[j].link}" alt="datasSocialsLinkName"></a>
  </li>`
   }
}




//  ==========================================================================================================
// 6.
const work = document.getElementById("works")

 for (let i = 0; i < datas.works.length; i++) {
    work.innerHTML += `<div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
    <div class="card">
      <img class="card-img-top" src="${datas.works[i].preview}" alt="${datas.works[i].name}">
      <div class="card-body w-100 px-0">
        <h2 class="card-title mt-0 mb-4 text-center">${datas.works[i].name}</h2>
        <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap ">
           <li>
             <span class="card-link">${datas.works[i].technology}</span>
           </li>   
       </ul>
       <div class="row w-100">
         <div class="d-flex justify-content-center">
           <a href="${datas.works[i].url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
         </div>
       </div>
     </div>
   </div>
   </div>`  
}
// ========================================================================================================================
// 7.
const experiance = document.getElementById("experiences");
for (let g = 0; g < datas.experiences.length; g++) {
  experiance.innerHTML = `<div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
  <div class="card h-100">
    <img class="card-img-top" src="${datas.experiences[0].link}" alt="">
    <div class="card-body w-100 px-0">
      <h2 class="card-title mt-0 mb-4 text-center">${datas.experiences[0].name}</h2>
      <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
     
          <li>
            <span class="card-link">${datas.experiences[0].technology}</span>
          </li>
  
      </ul>
    </div>
  </div>
</div>` + ` <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
<div class="card h-100">
  <img class="card-img-top" src="${datas.experiences[1].link}" alt="datasExperiencessName">
  <div class="card-body w-100 px-0">
    <h2 class="card-title mt-0 mb-4 text-center">${datas.experiences[1].name}</h2>
    <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">

        <li>
          <span class="card-link">${datas.experiences[1].technology}</span>
        </li>

    </ul>
  </div>
</div>
</div>` + ` <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
<div class="card h-100">
  <img class="card-img-top" src="${datas.experiences[2].link}" alt="datasExperiencessName">
  <div class="card-body w-100 px-0">
    <h2 class="card-title mt-0 mb-4 text-center">${datas.experiences[2].name}</h2>
    <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
 
        <li>
          <span class="card-link">${datas.experiences[2].technology}</span>
        </li>

    </ul>
  </div>
</div>
</div>`
}






// 8.
// ========================================================================================================================
 const email = document.getElementById("mail")
 for (let k = 0; k < datas.email.length; k++) {
   email.innerText = "jane.doe@dev.org"
 }

// ========================================================================================================================



// const lesliens = document.querySelectorAll(".socials");
//  lesliens.forEach(function (lesliens) {
//   lesliens.innerHTML = "";
//   datas.socials.forEach(socials =>{
//     lesliens.innerHTML += ` <li>
//     <a href="${socials.url}"><img src="${socials.link}" alt="${socials.name}"></a>
//   </li>`
//    })
//  });
 



// let i = 0;
// const ul = document.querySelectorAll(".socials");
// console.log(ul);
// for (const element of ul){
//     i = 0;
//    console.log(element);
//      for(const li of element.children ){
//         li.innerHTML = ` <li> <a href="datasSocialsUrl"><img src="${datas.socials[i].link} " alt="datasSocialsLinkName"></a> </li>`
//       i++
//     console.log(li);
//      }
// }
