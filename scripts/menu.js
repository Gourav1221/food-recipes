

let img = ["https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0","https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528","https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg","https://foodhistoria.com/wp-content/uploads/2020/04/WBC_7095.jpg"]

let imagesof = document.createElement("img")
 imagesof.src = img[0]
 document.getElementById("slide").append(imagesof)

 let i = 1;

 setInterval(function(){
     if(i == img.length){
         i = 0
     }
     imagesof.src = img[i]
     document.getElementById("slide").append(imagesof)
     i++;

 },3500)
