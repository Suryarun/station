//function increment(){
//	let countEL=document.getElementById("count-el");
//	let value=countEL.innerHTML;
//	++value;
//	console.log(value);
//	document.getElementById("count-el").innerHTML=value;
//}
//function save(){
//	let saveEl=document.getElementById("save-el")
//	let value=saveEl.innerHTML;
//	++value;
//	console.log(value);
//	let countStr=" - ";
//	saveEl.innerText = value;
//	saveEl.innerHTML+=countStr;
  //  console.log(saveEl);
//}
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//let decEl= document.getElementById("decrement")
let count = 0
function increment() {
	let countEl = document.getElementById("count-el")
    count += 1
    countEl.textContent = count
}	
function decrement(){
	let countEl = document.getElementById("count-el")
	//let decEl= document.getElementById("decrement")
	count-=1
	countEl.textContent=count
}
function save() {
	let saveEl = document.getElementById("save-el")
	let countEl = document.getElementById("count-el")
    let countStr = count + " - "
	
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr //( we also use saveEl.innerHTML,innerText)
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
	count=0
	countEl.textContent=0
}