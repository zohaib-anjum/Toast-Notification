let toastBox = document.getElementById("toastBox");
let succesMsg = '<i class="fa-solid fa-circle-check"></i> successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the error'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, Check Again'

function showToast(msg){
let toast = document.createElement("div");
toast.classList.add("toast");
toast.innerHTML = msg;
toastBox.appendChild(toast);

if(msg.includes('error')){
    toast.classList.add('error');
}
if(msg.includes('Invalid')){
    toast.classList.add('invalid');
}
setTimeout(()=>{
    toast.remove();
},6000)
}