<template>
    <div class="cart col-md-5">
        <input class="form-control my-2"
               type="text"
               placeholder="Search for items in cart"
               v-model="searchItem">

        <input class="form-control my-2"
               type="text"
               placeholder="Add to cart (press enter)"
               v-model="itemToAdd"
               @keyup.enter="addToCart">

        <div class="cart-item-list border mt-3">
            <p class="mb-0 cursor-pointer"
               :class="[selectedItem === cartItem ? 'selected-item': '']"
               v-for="(cartItem, index) in cartList" :key="index" @click="selectItem(cart, cartItem)">
                {{ cartItem }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartComponent",
        props: {
            cart: {
                type: Number,
                required: true
            }
        },
        data() {
          return {
              selectedItem: null,
              itemToAdd: '',
              searchItem: '',
              items: [],
          }
        },
        methods: {
            selectItem(cart, item) {
                this.selectedItem = item;
                this.$emit('on-item-select', {'cart': cart, 'item': item});
            },
            addToCart() {
                if(this.itemToAdd.length > 0) {
                    this.$store.dispatch('addToCart', {'cart': this.cart, 'item': this.itemToAdd});
                    this.itemToAdd = '';
                }
            }
        },
        computed: {
            cartList() {
                return this.$store.getters["getCartItems"][this.cart].filter(item =>
                    item.includes(this.searchItem)
                );
            },
        }
    }
</script>

<style scoped lang="scss">
    .border {
        border-radius: 3px;
    }
    .cart-item-list {
        min-height: 250px;
    }
    .selected-item {
        background-color: cornflowerblue;
    }
    .cursor-pointer {
        cursor: pointer;
    }
</style>

