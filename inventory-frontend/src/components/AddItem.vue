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
      <button class="button is-success" @click="saveItem">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddItem",
  data() {
    return {
      itemName: "",
      itemPrice: "",
    };
  },
  methods: {
    // Create New item
    async saveItem() {
      try {
        await axios.post("http://localhost:5000/items", {
          item_name: this.itemName,
          item_price: this.itemPrice,
        });
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