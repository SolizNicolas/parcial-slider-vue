<template>
  <div v-if="banners.length > 0">
    <div class="slideshow-container">
      <div>
        <div class="numbertext">{{ selector + 1 }} / {{ banners.length }}</div>
        <img
          :src="banners[selector].urlImageBanner"
          style="width: 1000px; height: 600px"
          alt="Image"
        />
        <div class="text">
          {{ banners[selector].textCaption }}
          <br />{{ banners[selector].descripcionImagen }}
        </div>
      </div>
      <a class="prev" @click="moveSlide(-1)">❮</a>
      <a class="next" @click="moveSlide(1)">❯</a>
    </div>
  </div>
  <br />
  <div style="text-align: center">
    <span
      v-for="(banner, index) in banners"
      :key="banner.id"
      class="dot"
      @click="selector = index"
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [],
      selector: 0,
    };
  },

  methods: {
    moveSlide(n) {
      if (this.selector + n === this.banners.length) this.selector = 0;
      else if (this.selector + n === -1)
        this.selector = this.banners.length - 1;
      else this.selector += n;
    },

    async getBanners() {
      let url = "http://168.194.207.98:8081/api_banner/get_banners.php",
        options = {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        },
        response;

      try {
        response = await fetch(url, options);
        response = await response.json();
        this.banners = response;
      } catch (e) {
        console.log(e);
      }
    },
  },

  beforeMount() {
    this.getBanners();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 18px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 16px;
  padding: 8px 12px;
  font-weight: bold;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
</style>
