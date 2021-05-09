<template>
  <div>
    <div class="field">
      <label class="label">Item Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Item Name"
          v-model="itemName"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="itemPrice"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateItem">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditItem",
  data() {
    return {
      itemName: "",
      itemPrice: "",
    };
  },
  created: function () {
    this.getItemById();
  },
  methods: {
    // Get Item By Id
    async getItemById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/items/${this.$route.params.id}`
        );
        this.itemName = response.data.item_name;
        this.itemPrice = response.data.item_price;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update item
    async updateItem() {
      try {
        await axios.put(
          `http://localhost:5000/items/${this.$route.params.id}`,
          {
            item_name: this.itemName,
            item_price: this.itemPrice,
          }
        );
        this.itemName = "";
        this.itemPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>