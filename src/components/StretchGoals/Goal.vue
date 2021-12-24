<template>
  <div>
    <h5>達成額: {{ amount }}万ドル</h5>
    <ul>
      <li>うふふ</li>
      <li>あはは</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    amount: {
      type: String,
      default: '0',
      required: false,
    },
    descriptions: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
}
</script>

<style scoped></style>
