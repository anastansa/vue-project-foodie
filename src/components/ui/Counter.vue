<template>
  <div class="counter__box">
    <div
      class="counter__quantity-minus"
      @click="decreaseNum"
    />
    <div class="counter__quantity">
      {{ number }}
    </div>
    <div
      class="counter__quantity-plus"
      @click="increaseNum"
    />
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'Counter',
  props: {
    quantity: {
      type: Number,
      required: true,
    }
  },
  emits: ['increaseNum', 'decreaseNum'],
  setup(props, { emit }) {
    const number = ref(props.quantity)

    const increaseNum = () => {
      number.value++
      emit('increaseNum', number.value)
    }
    const decreaseNum = () => {
      if (number.value > 1) {
        number.value--
      } else {
        number.value = 1
      }
      emit('decreaseNum', number.value)
    }

    return {
      number,
      increaseNum,
      decreaseNum
    }
  },
}
</script>

<style lang="scss" scoped>

.counter__box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  .counter__quantity {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 17px;
    font-weight: 300;
  }

  .counter__quantity-minus {
    position: relative;

    width: 33px;
    height: 33px;
    border: 1px solid #4f4f4f;
    border-radius: 8px;

    background: #4f4f4f;
    cursor: pointer;

    &::before {
      position: absolute;
      content: "";
      display: block;
      width: 12px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #fff;
    }

    &:hover {
      background: transparent;
      transition: all .4s ease;

      &::before {
        border: 1px solid #4f4f4f;
      }
    }
  }

  .counter__quantity-plus {
    position: relative;

    width: 33px;
    height: 33px;
    border: 1px solid #4f4f4f;
    border-radius: 8px;

    background: #4f4f4f;
    cursor: pointer;

    &::before {
      position: absolute;
      content: "";
      display: block;
      width: 12px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #fff;
    }

    &::after {
      position: absolute;
      content: "";
      display: block;
      height: 12px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #fff;
    }

    &:hover {
      background: transparent;
      transition: all .4s ease;

      &::before {
        border: 1px solid #4f4f4f;
      }

      &::after {
        border: 1px solid #4f4f4f;
      }
    }
  }
}

@media(max-width: 512px) {
  .counter__box {
    .counter__quantity-minus {
      width: 28px;
      height: 28px;
    }

    .counter__quantity-plus {
      width: 28px;
      height: 28px;
    }
    .counter__quantity {
      font-size: 15px;
    }
  }
}
</style>
