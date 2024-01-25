let i = 1;
let inputForm = document.querySelector('#inputtxt');
let Register = document.querySelector("#btnReg");
let listbox = document.querySelector('#Lists');

Register.addEventListener("click",function(){
    let regtext = document.createElement('p');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('Type', "checkbox");
    checkbox.setAttribute('id', `itemsbtn${i}`);
    

    let Labels = document.createElement('label');
    listbox.append(Labels);
    Labels.append(checkbox);
    Labels.append(regtext);
    Labels.setAttribute('id','items');
    Labels.setAttribute('for',`itemsbtn${i}`);
    
    regtext.setAttribute('id','itemsText');
    i++;
    let Deletebtn = document.createElement('button');
    Deletebtn.innerText = 'Delete!'
    Labels.append(Deletebtn);
    Deletebtn.setAttribute('id','Deletebtn')
   regtext.innerText = inputForm.value;
})

 listbox.addEventListener('click',function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
    }
})