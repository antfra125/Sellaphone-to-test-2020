<template>
  <div class="picker">
    <div class="phone">
      <img
        src="https://d2wsh2n0xua73e.cloudfront.net/wp-content/uploads/2019/04/iPhone-11-Concept-9.jpg"
      />
      <section>
        <h2>iPhone Z</h2>
        <ul>
          <li>Semitransparent telefon</li>
          <li>5G ready</li>
          <li>Handhållare</li>
        </ul>
      </section>
      <input type="radio" v-model="phone" name="phone" value="200" placeholder="Phone" />
    </div>
    <div class="phone">
      <img
        src="https://images.techhive.com/images/idge/imported/imageapi/2015/01/14/17/011011-iphoney5-2-100546391-gallery.idge.jpg"
      />
      <section>
        <h2>iPhone G</h2>
        <ul>
          <li>Armbandstelefon</li>
          <li>Projicerad skärm</li>
          <li>Virtual touch</li>
        </ul>
      </section>
      <input type="radio" v-model="phone" name="phone" value="250" placeholder="Phone" />
    </div>
    <div class="phone">
      <img src="http://www.newsmobile.in/wp-content/uploads/2017/06/iPhone1.jpg" />
      <section>
        <h2>iPhone Mini</h2>
        <ul>
          <li>Retrodesign</li>
          <li>Face recognition</li>
          <li>Handhållare</li>
        </ul>
      </section>
      <input type="radio" v-model="phone" name="phone" value="110" placeholder="Phone" />
    </div>
    <div class="phone">
      <img
        src="http://cdn.images.express.co.uk/img/dynamic/59/590x/secondary/update-samsung-gear-s3-android-wear-google-801981.jpg"
      />
      <section>
        <h2>Samsung Wear</h2>
        <ul>
          <li>Look cool</li>
          <li>Feel hot</li>
          <li>Arm-processor</li>
        </ul>
      </section>
      <input type="radio" v-model="phone" name="phone" value="200" placeholder="Phone" />
    </div>
    <div class="phone">
      <img src="http://thefoxisblack.com/blogimages//samsung-display-centric-world.jpg" />
      <section>
        <h2>iDrink Nokia</h2>
        <ul>
          <li>Smakinterface</li>
          <li>Tungstyrd</li>
          <li>No more cool-aid</li>
        </ul>
      </section>
      <input type="radio" v-model="phone" name="phone" value="100" placeholder="Phone" />
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    phone:{
      get(){
        return this.$store.state.phone
      },
      set(value){
        this.$store.commit('setPhone', value)
        this.$store.commit('updateTotal')
      }
    }
  }
}
</script>