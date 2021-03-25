<template>
  <button
    type="button"
    @click="btnClicked"
    :class="['btn', `btn-${buttonType}`]"
  >
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
      },
      buttonType: {
        type: String,
        default: "secondary"
      }
    },
    methods: {
      btnClicked() {
        this.$emit('click');
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
