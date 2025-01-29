const Sidebar=document.querySelector(".Sidebar");
const angleRight=document.querySelector(".angleRight")
const angleLeft=document.querySelector(".angleLeft")
const sidebarTitle=document.querySelector(".sidebarTitle");
const sidebarICOn=document.querySelector(".sidebarICOn")
const sidebarBattom=document.querySelector(".sidebarBattom")
console.log(Sidebar,angleRight, angleLeft, sidebarTitle,sidebarICOn,sidebarBattom)


angleRight.addEventListener("click",()=>{
    Sidebar.style.width="20%";
    angleLeft.style.display="block" 
    angleRight.style.display="none"
    sidebarICOn.style.marginLeft="-7%"
    sidebarICOn.style.marginTop="25%"
    sidebarICOn.style.gap="10px"
    sidebarTitle.style.display="flex"
    sidebarBattom.style.flexDirection="row";
    sidebarBattom.style.marginTop="30%";
    sidebarBattom.style.marginLeft="-30%";

})
angleLeft.addEventListener("click",()=>{
Sidebar.style.width="6%";
angleRight.style.display="block";
angleLeft.style.display="none";
sidebarICOn.style.margin="0 auto"
 sidebarTitle.style.display="none"
 sidebarICOn.style.marginTop="25px"
 sidebarBattom.style.flexDirection="column";
})

