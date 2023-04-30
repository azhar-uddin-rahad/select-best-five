let playerlist;
let playerArray;
let isArray;
function addName(nameID,btn){
    const makeli=document.createElement('li');
    makeli.innerText= nameID.innerText;
    playerlist=document.querySelectorAll('.playerlist');
    makeli.classList.add('playerlist');
    playerArray=Array.from(playerlist);
    if(playerArray.length <= 4){
        selectList.appendChild(makeli);
        isArray=true;
        btn.setAttribute('disabled','');
        btn.style.backgroundColor="gray";
      }
    else{
        alert("You add 5 player ")
    }
   
}

const selectList=document.getElementById('list');
const nameMessi=document.getElementById('nameMessi');
const messi=document.getElementById('messi');
messi.addEventListener('click',function(){
    addName(nameMessi,messi);
   
});
const neymarName=document.getElementById('neymarName');
const neymer=document.getElementById('neymar');
neymer.addEventListener('click',function(){
    addName(neymarName,neymer)
})
const mbappéName=document.getElementById('mbappéName');
const mbappé=document.getElementById('mbappé');
mbappé.addEventListener('click',function(){
    addName(mbappéName,mbappé)
})
const machadoName=document.getElementById('machadoName');
const machado=document.getElementById('machado');
machado.addEventListener('click',function(){
    addName(machadoName,machado)
})
const ramosName=document.getElementById('ramosName');
const ramos = document.getElementById('ramos');
ramos.addEventListener('click',function(){
    addName(ramosName,ramos)
})
const renatoName=document.getElementById('renatoName');
const renato=document.getElementById('renato');
renato.addEventListener('click',function(){
    addName(renatoName,renato)
})


const perPlayerField=document.querySelector('#parPlayerMoney');
document.querySelector('#playerPriceCalculate').addEventListener("click",function(){
    const perPlayerMoneyStr=perPlayerField.value;
    const perPlayerMoneyNum=parseInt(perPlayerMoneyStr);
    const playerTotal=document.querySelector('#playerTotal');
    console.log();
    if(isArray && isNaN(perPlayerMoneyNum) == false){
        const perPlayerTotal=perPlayerMoneyNum * (playerArray.length + 1)
        playerTotal.innerText= perPlayerTotal;
    }
    else if(isNaN(perPlayerMoneyNum)){
        alert('input the Number');
    }
    else{
        alert('select player  first ')
    }
})

document.querySelector('#totalCalculate').addEventListener('click',function(){
    const managerField=document.querySelector('#managerField')
    const managerFieldStr=managerField.value;
    const managerFieldNum=parseInt(managerFieldStr);
    const coachField=document.querySelector('#coachField')
    const coachFieldStr=managerField.value;
    const coachFieldNum=parseInt(coachFieldStr);
    const playerTotal=document.querySelector('#playerTotal');
    const playerTotalNum=parseInt(playerTotal.innerText);
    const total= managerFieldNum + coachFieldNum + playerTotalNum;
    const totalCalculate=document.querySelector('#total');
    totalCalculate.innerText=total;
    


})