 
 
 let para = document.getElementById("result")
let id;
async function getfood(){
   try{
    let name = document.getElementById("inp").value

    if(name.length == 1){
        return false;
    }

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let data = await res.json()
    let arr = data.meals
    append(arr)
    
   }
    
   catch(er){
       console.log('er:', er)

   }

}

function append(data){
    document.getElementById("result").textContent = null
    if(data == undefined){
        return false
    }
    data.map((el)=>{
        let {strMeal,strMealThumb,strArea,strInstructions,strYoutube} =el

        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","main")

        maindiv.onclick = function(){

            showdetails(obj)
        }
     
       

        let div = document.createElement("div")
        

        let img = document.createElement("img")
        img.style.height = "100%"
        img.style.width = "40%"
        img.src = strMealThumb

        let tit = document.createElement('p')
        tit.textContent = strMeal

        var obj = {
            strMeal,
            strMealThumb,
            strArea,
            strInstructions,
            strYoutube
        }
    

      
        div.append(tit)

        maindiv.append(img,div)

        para.style.height= "200px"
       para.append(maindiv)
        
    })
}

function debounce(myfnc,delay){

    if(id){
        clearTimeout(id)
    }

   id =  setTimeout(() => {
        myfnc()
    }, delay);
}

function showdetails(data){

    console.log(data)
    localStorage.setItem("details",JSON.stringify(data))
    window.location.href = "debounce.html"
    
}

