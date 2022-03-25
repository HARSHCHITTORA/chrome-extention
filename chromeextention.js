let leads=[]
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deletebtn=document.getElementById("delete-btn")

let leadsLocalStorage=JSON.parse(localStorage.getItem("leads"))
if(leadsLocalStorage)
{
   leads=leadsLocalStorage
   render(leads)
}

const tabbtn=document.getElementById("save-btn")
tabbtn.addEventListener("click",function()
{    
    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
    {
        leads.push(tabs[0].url)
        localStorage.setItem("leads",JSON.stringify(leads))
        render(leads)
    })
})
deletebtn.addEventListener("dblclick",function()
{
    console.log("ouble click")
    localStorage.clear()
    leads=[]
    render(leads)
})
inputbtn.addEventListener("click",function()
{
     leads.push(inputEl.value)
 
    inputEl.value="" 
    localStorage.setItem("leads",JSON.stringify(leads))
    
    render(leads)
    console.log(localStorage.getItem("leads"))
})
function render(myleads)
{   let listitems=""
    for(let i=0;i<myleads.length;i++)
    {
        listitems+=`
        <li>
            <a target='_blank' href='${myleads[i]}'>
              ${myleads[i]}
              </a>
        <li>
        <br>
        `


    }
    ulEl.innerHTML=listitems
}