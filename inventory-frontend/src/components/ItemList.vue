<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in datas" :key="data.item_id">
          <td>{{ data.item_name }}</td>
          <td>{{ data.item_price }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: data.item_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteItem(data.item_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ItemList",
  data() {
    return {
      datas: [],
    };
  },
 
  created() {
    this.getItems();
  },
 
  methods: {
    // Get All Items
    async getItems() {
      try {
        const response = await axios.get("http://localhost:5000/items");
        this.datas = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Item
    async deleteItem(id) {
      try {
        await axios.delete(`http://localhost:5000/items/${id}`);
        this.getItems();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>