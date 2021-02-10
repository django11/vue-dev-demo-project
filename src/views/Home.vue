<template>
  <div class="home mb-5">
    <h1 class="my-5">Demo</h1>
    <div class="row">
      <CartComponent :cart="1" key="cart1" @on-item-select="setItem"/>
      <div class="col-md-1">
        <div class="d-flex h-100 my-2 mx-3 flex-md-column justify-content-center align-items-center controls">
          <button class="btn m-1 btn-sm btn-secondary" @click="movieAll(1, 2)">
            »
          </button>
          <button class="btn m-1 btn-sm btn-primary" @click="moveItem(2)">
            ›
          </button>
          <button class="btn m-1 btn-sm btn-primary" @click="moveItem(1)">
            ‹
          </button>
          <button class="btn m-1 btn-sm btn-secondary" @click="movieAll(2, 1)">
            «
          </button>
        </div>
      </div>
      <CartComponent :cart="2" key="cart2" @on-item-select="setItem"/>
    </div>
  </div>
</template>

<script>
import CartComponent from "../components/CartComponent";

export default {
  name: 'Home',
  components: {
    CartComponent
  },
  data() {
    return {
      data() {
        return {
          itemData: null,
        };
      }
    }
  },
  methods: {
    moveItem(toCart) {
      this.$store.dispatch('moveToCart', {'to': toCart, ...this.itemData})
    },
    setItem(data) {
      this.itemData = data;
    },
    movieAll(fromCart, toCart) {
      this.$store.dispatch('moveAll', {'to': toCart, 'from': fromCart})
    }
  },
}
</script>

<style scoped lang="scss">
  .cart-item-list {
    border-radius: 3px;
  }
  .controls {
    button {
      width: 50px;
      font-weight: bold;
      font-size: 20px;
      transform: rotate(90deg);

      @media (min-width: 768px) {
        transform: none;
      }
    }
  }
</style>
