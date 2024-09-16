<template>
  <div class="cart">
    <h2>Your Cart ({{ cartLength }})</h2>

    <div
      v-if="cartLength < 1"
      class="cart__empty"
    >
      <IconEmptyCart />

      <span> Your added items will appear here </span>
    </div>
    <div v-else>
      <CartItems :readonly="false" />

      <Button
        class="cart__confirm-button"
        type="red"
        block
        @click="confirmOrder"
      >
        Confirm Order
      </Button>
    </div>

    <dialog
      class="order-modal"
      id="orderConfirmModal"
    >
      <ResultOrder @finish-order="finishOrder" />
    </dialog>
  </div>
</template>

<script setup lang="ts">
import useCart from "@/composables/useCart";
import IconEmptyCart from "./icons/IconEmptyCart.vue";
import Button from "./Button.vue";
import ResultOrder from "./ResultOrder.vue";
import { onDeactivated, onMounted } from "vue";
import CartItems from "./CartItems.vue";

const { cartLength, clearCart } = useCart();

function confirmOrder() {
  if ("orderConfirmModal" in window) {
    (window.orderConfirmModal as HTMLDialogElement).showModal();
  }
}

function finishOrder() {
  clearCart();

  if ("orderConfirmModal" in window) {
    (window.orderConfirmModal as HTMLDialogElement).close();
  }
}

function handleDialogClose(event: Event) {
  clearCart();
}

onMounted(() => {
  const dialog = document.querySelector(".orderConfirmModal");

  if (dialog) {
    dialog.addEventListener("close", handleDialogClose);
  }
});

onDeactivated(() => {
  removeEventListener("close", handleDialogClose);
});
</script>

<style scoped>
.cart {
  position: sticky;
  top: 0;
  background-color: white;
  border-radius: 10px;
  padding: 25px 30px;

  h2 {
    color: var(--red);
  }
}

.cart :deep(.cart-item) {
  padding: 20px 0;
  border-bottom: 1px var(--rose-100) solid;
}

.cart :deep(.cart-item):first-child {
  padding-top: 0;
}

.cart__empty {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;

  svg {
    margin-top: 60px;
  }

  span {
    margin-top: 35px;
    font-weight: 700;
  }
}

.cart__confirm-button {
  margin-top: 20px;
}

.order-modal {
  left: 50%;
  top: 20vh;
  padding: 20px;
  transform: translateX(-50%);
  max-width: 590px;
  width: 100%;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
}
</style>
