

function appendlast(data,where){
let arr = data.meals
console.log('arr:', arr)
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

    // let iframe = document.createElement("iframe")
    // iframe.src = strYoutube
    // iframe.width = "300px"
    // iframe.height = "200px"

    let p = document.createElement("a")
    p.href =  strYoutube
    p.textContent = `Click here to watch Recepie`
    p.style.color ="blue"
    console.log('p:', p)
    let maindiv = document.createElement("div")

    var div = document.createElement("div")
  


    var text = document.createElement("div")
    div.append(img)
    text.append(h3,h4,des,p)
    maindiv.append(div,text)

    where.append(maindiv)


});
}

export default appendlast
