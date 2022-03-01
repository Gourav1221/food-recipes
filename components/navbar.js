function navbar(){
    return `<div id="logo">
    <div><i class="fas fa-bars"></i></div>
    <div><i class="fas fa-mobile-alt"></i></div>
  </div>
  <div id="zom"><img src="https://dog55574plkkx.cloudfront.net/storelogo/web/zomato_new.png" alt=""></div>
  <div id="home">
    <div>
      <div class="select">
        <p class="input">Home</p>
        <input type="hidden" name="some_name_to_form" />
        <div class="hidden">
          <p value="id_2" id ="big">Sign in</p>
          <p value="id_3" id = "small">Sign up</p>
        </div>
      </div>
    </div>

   
    <div class="pa" id="day">Meals of the DaY</div>
  </div>`
}
export default navbar