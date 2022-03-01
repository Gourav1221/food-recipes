
function meals(data,where){
let arr = data.meals
if(arr === null){
    display(where)
}
arr.forEach((el) => {
    let {strMeal,strArea,strInstructions,strMealThumb,strYoutube} = el

    let h3 = document.createElement("h3")
    h3.textContent = strMeal

    let h4 = document.createElement("h4")
    h4.textContent = strArea

    let des = document.createElement("p")
    des.textContent = strInstructions

    let img = document.createElement("img")
    img.src = strMealThumb
    
    let div = document.createElement("div")
    div.style.cursor = "pointer"
    div.onclick = ()=>{
        final(detail_obj)
    }

    let view = document.createElement("p")
    view.textContent = `View Recepie` 

    view.style.color = "blue"
    view.style.textDecoration = "underline"

    let span = document.createElement("div")
    span.append(h3,h4,view)

    let detail_obj={
        strMeal,
        strArea,
        strInstructions,
        strMealThumb,
        strYoutube
    }



    div.append(img,span)
    where.append(div)

});
}

function final(data){
    console.log(data)
    localStorage.setItem("detailslocal",JSON.stringify(data))
    window.location.href="final.html"
}

function display(where){
    let div = document.createElement("h1")
    div.style.textAlign = "center"
    div.textContent = `Sorry ! Currently Unavailable `
    where.append(div)
}
export default meals

