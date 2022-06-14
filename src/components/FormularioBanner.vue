<template lang="">
  <div class="formulario">
    <div class="alert alert-success" v-if="banner" role="alert">
      {{ banner }}
    </div>
    <div class="form-group">
      <label for="urlImageBanner" class="p-1">Url Imagen</label>
      <input type="text" v-model="urlImageBanner" class="form-control" />
    </div>
    <div class="form-group">
      <label for="textCaption" class="p-1">Text Caption</label>
      <input type="text" v-model="textCaption" class="form-control" />
    </div>
    <div class="form-group">
      <label for="ordenSlider" class="p-1">Orden Slider</label>
      <input type="text" v-model="ordenSlider" class="form-control" />
    </div>
    <div class="form-group">
      <label for="descripcionImagen">Descripción</label>
      <textarea
        class="form-control"
        v-model="descripcionImagen"
        rows="3"
      ></textarea>
    </div>

    <div class="buttons form-group mt-3">
      <button class="btn btn-success" @click="setBanner()">
        {{ url_id ? "Editar" : "Insertar" }}
      </button>
      <button class="btn btn-primary" @click="this.$router.go(-1)">
        Volver
      </button>
    </div>
  </div>
</template>
<script>
export default {
  beforeMount() {
    this.url_id = this.$route.params.id;
  },

  data() {
    return {
      id: null,
      url_id: null,
      urlImageBanner: null,
      textCaption: null,
      ordenSlider: null,
      descripcionImagen: null,
      banner: null,
    };
  },
  methods: {
    setBanner() {
      let body;
      if (this.url_id) {
        body = {
          id: this.url_id,
          urlImageBanner: this.urlImageBanner,
          textCaption: this.textCaption,
          descripcionImagen: this.descripcionImagen,
          ordenSlider: this.ordenSlider,
        };
        this.updateBanner(body);
      } else {
        body = {
          urlImageBanner: this.urlImageBanner,
          textCaption: this.textCaption,
          descripcionImagen: this.descripcionImagen,
          ordenSlider: this.ordenSlider,
        };
        this.insertBanner(body);
      }
    },
    async updateBanner(body) {
      let url = `http://168.194.207.98:8081/api_banner/put_banner.php`,
        options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
          mode: "cors",
        },
        response;
      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.banner = response;
    },
    async insertBanner(body) {
      let url = `http://168.194.207.98:8081/api_banner/post_banner.php`,
        options = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
          mode: "cors",
        },
        response;

      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.banner = response;
    },
  },
};
</script>

<style scoped>
.formulario {
  table-layout: fixed;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
}
.btn {
  margin: 1px;
}
.buttons {
  text-align: center;
}
</style>
