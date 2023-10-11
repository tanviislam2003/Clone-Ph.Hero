const milestonesData = JSON.parse(data).data;

//load course milestones data
function loadMilestones(){
    const milestones = document.querySelector(".milestones");

    milestones.innerHTML = `${milestonesData.map(function(milestone){
        return`<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
           <div onclick="openMilestone(this,${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules.map(function(module){
            return`<div class="module border-b">
            <p>${module.name}</p>
            </div>`;
          })
          .join("")}
          </div>
        </div>
      </div>`;
      })
      .join("")}`;
}

function openMilestone(milestonesElement,id){
    const currentPanel = milestonesElement.parentNode.nextElementSibling;
    const shownPnale = document.querySelector(".show");
    const active = document.querySelector(".active");

    //first remove previous active class if any [other thanthe clicked one]
    if (active && !milestonesElement.classList.contains("active")){
        active.classList.remove("active");
    }

    //toggle current clicked on
    milestonesElement.classList.toggle("active");

    //first hide previous panel if open[other than the clicket element]
if (!currentPanel.classList.contains("show") && shownPnale)
    shownPnale.classList.remove("show");

   // toggle current element
    currentPanel.classList.toggle("show");

    showMilestone(id);

}

function showMilestone(id){
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const details= document.querySelector(".details");

   milestoneImage.style.opacity="0";

    milestoneImage.src = milestonesData[id].image;
    name.innerText = milestonesData[id].name;
    details.innerText= milestonesData[id].description;
}

//listen for hero image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
    this.style.opacity = "1";
};

loadMilestones();
// openMilestone()