<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Imagen</th>
          <th scope="col">Text Caption</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(banner, index) in banners" :key="banner.id">
          <th scope="row">{{ banner.id }}</th>
          <td><img class="imagen" :src="banner.urlImageBanner" /></td>
          <td>{{ banner.textCaption }}</td>
          <td>
            <a :href="'/editar/' + banner.id" class="btn btn-success">Editar</a>
          </td>
          <td>
            <button
              class="btn btn-warning"
              @click="deleteBanner(banner.id, index)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [],
    };
  },

  methods: {
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
    async deleteBanner(id, index) {
      let url = `http://168.194.207.98:8081/api_banner/delete_banner.php?id=${id}`,
        options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        },
        response;
      try {
        response = await fetch(url, options);
      } catch (e) {
        console.log(e);
      }
      if (response.status === 200) {
        this.banners.splice(index, 1);
      }
    },
  },

  beforeMount() {
    this.getBanners();
  },
};
</script>

<style scoped>
.table {
  table-layout: fixed;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.imagen {
  height: 50px;
  width: 80px;
}
</style>
