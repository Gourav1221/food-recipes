
 async function getData(url){
     
  try{
    let res = await fetch(url)
    let data = await res.json()
    return data
  }
  catch(er){
      console.log('er:', er)

  }
 }

 function append(data,where){
let arr = data.categories
    
     arr.forEach((el) => {
         let{strCategory,strCategoryThumb,strCategoryDescription} =el
         let div = document.createElement("div")
         //div.setAttribute("class","grow")
         

         let img = document.createElement("img")
         img.src = strCategoryThumb

         let name = document.createElement("h3")
         name.textContent = strCategory

         let des = document.createElement("p")
         des.textContent = strCategoryDescription

         let obj={
            strCategory,
         }

         div.onclick=()=>{
            sho(obj)
         }

         div.append(img,name)

         where.append(div)
     });
 }

 let sho = (data)=>{
    console.log(data)
    localStorage.setItem("localdata",JSON.stringify(data))
    window.location.href="detail.html"
 }

 export { getData,append }