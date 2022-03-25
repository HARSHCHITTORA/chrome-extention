//  let inputbtn=document.getElementById()

// function saveit()
// {
//     console.log("button clicked")
// }
// create two variables:
// myleads->should be assigned to an empty Array
// inputEl-.should be assigned to the next input field
// let leads=["www.harsh.com","www.me.com"]
let leads=[]
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
 
// grab unordered list
const ulEl=document.getElementById("ul-el")
const deletebtn=document.getElementById("delete-btn")

// push the value "www.youtube.com" to my array ehrn the input button is clicked
// let inputbtn=document.getElementById("input-btn")

//["leads1","leads2"] //truthy value or null //falsy value
let leadsLocalStorage=JSON.parse(localStorage.getItem("leads"))
if(leadsLocalStorage)//if truthy code runs if falsy goes down this code
{
   leads=leadsLocalStorage
   render(leads)
}
const tabbtn=document.getElementById("save-btn")
// const tabs=[{url:"https://www.w3schools.com/jsref/event_ondblclick.asp"}]
tabbtn.addEventListener("click",function()
{    
    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
    {
        leads.push(tabs[0].url)
        localStorage.setItem("leads",JSON.stringify(leads))
        render(leads)
    })
 
    // console.log(tabs[0].url)
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
    // console.log("button clicked")
    //PUSH THE VALUE FROM THE inputEl into the leads array
    //instead of hard code from input fields in javascripts

    // leads.push("www.awesome.com")
     leads.push(inputEl.value)
    // console.log(leads)
    inputEl.value=""  //clearing input fields
    localStorage.setItem("leads",JSON.stringify(leads))
    
    render(leads)
    console.log(localStorage.getItem("leads"))
})
   //1. create a variable ,listitems,to hold all the HTML for the list item
   //assign it to an empty string to begin with
//  let listitems=""
//    for(let i=0;i<leads.length;i++)
//  {   // 2.Add it to an empty string to begin with 
// //     // ulEl.textContent+="<li>"+leads[i]+"</li>"   it just print li use innerHTML so that it works as html
//        listitems+="<li>"+leads[i]+"</li>" 
// //       //another methos to do same as inner html 

// //       //create element
// //       //set text content
// //       //append to ul

// //     //   const li=document.createElement("li")
// //     //   li.textContent=leads[i]
// //     //   ulEl.append(li)
//  }

// ulEl.innerHTML=listitems


function render(myleads)
{   let listitems=""
    for(let i=0;i<myleads.length;i++)
    {
        // listitems+="<li><a target='_blank' href='"+leads[i]+"'>"+leads[i]+"</a></li>"
       
       //tempelate string 
        listitems+=`
        <li>
            <a target='_blank' href='${myleads[i]}'>
              ${myleads[i]}
              </a>
        <li>
        `


    }
    ulEl.innerHTML=listitems
}