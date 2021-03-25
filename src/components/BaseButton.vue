<template>
  <button type="button" class="btn btn-secondary">
    {{ buttonTxt }}
    <span v-if="badgeTxt" class="badge badge-light">{{ badgeTxt }}</span>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      buttonTxt: {
        type: String,
        required: true
      },
      badgeTxt: {
        type: [String, Number]
      }
    },
  }
</script>

<style scoped lang="scss">
</style>
