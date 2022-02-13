document.addEventListener('DOMContentLoaded', getData);
var allDetails=[];

async function getData(){
    let response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    let data = await response.json();
    allDetails = data ;
    //console.log(allDetails[0].brand);
    let divMain = document.querySelector('#sub')

    allDetails.slice(50,59).forEach(ele =>{
        let divElement =  document.createElement("div");
        divElement.setAttribute("class","container-fluid");
        // divElement.style.width= "300px"
        // divElement.style.height= "300px"
        // divElement.style.borderBlockColor= "red"
        // divElement.style.border = "1px solid red"
        Object.keys(ele).forEach(key=>{
                       if(key === 'brand'){
                let pTage = document.createElement('p');
               // console.log(ele.brand);
                pTage.innerHTML += "<b>BRAND NAME : </b> " + ele.brand;
                divElement.append(pTage);
               // console.log("hai");
            }
            if(key === 'name'){
                let pTag2 = document.createElement('p');
                pTag2.innerHTML += "<b>PRODUCT NAME : </b> " + ele.name;
                divElement.append(pTag2);

            }

            if(key === 'price'){
                let pTag3 = document.createElement('p');
                pTag3.innerHTML += "<b>PRICE OF PRODUCT : $ </b> " + ele.price;
                divElement.append(pTag3);

            }
            if(key === 'image_link'){
                let imgTag = document.createElement('img');
                imgTag.setAttribute("src",`${ele.image_link}`)
                divElement.append(imgTag);
                let brTag = document.createElement('br')
                console.log("br creating");
                divElement.append(brTag);

            }

           
            if(key === 'description'){
                let pTag4 = document.createElement('p');
                pTag4.innerHTML += "<b>DESCRIPTION OF PRODUCT : $ </b> " + ele.description;
                divElement.append(pTag4);

            }
            if(key==='product_link'){
                let aTag= document.createElement('a');
                aTag.setAttribute("href",`${ele.product_link}`);
                aTag.innerHTML += "GET MORE DETAILS";
                divElement.append(aTag);
                let brTag2 = document.createElement('br')
                //console.log("br creating");
                divElement.append(brTag2);

            }

        })
        let hrTag = document.createElement('hr')
        divElement.append(hrTag);
        divMain.append(divElement);
    })

    
        // let divElement =  document.createElement("div");
        // 
        // let pTage = document.createElement('p');
        // pTage.innerText +=  item.brand;
        // divElement.innerHTML += pTage;
        // divMain.append(divElement);
    
    // let divElement =  document.createElement("div");
    // divElement.setAttribute("class","container-fluid");
    // let pTage = document.createElement('p');
    // pTage.innerText +=  allDetails[i].brand;
    // divElement.innerHTML += pTage;
    // divMain.append(divElement);
   

    
    
}
