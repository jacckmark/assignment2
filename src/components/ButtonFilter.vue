<template>
  <BaseButton
    @click="emitFilteringAction"
    :buttonTxt="filterTxt"
    :badgeTxt="filteredAmount"
    :buttonType="active ? 'success' : 'secondary'"
  />
</template>

<script>
  export default {
    name: 'ButtonFilter',
    props: {
      filterTxt: {
        type: String,
        required: true
      },
      filteredAmount: {
        type: Number,
        default: 0
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        filterActive: false
      }
    },
    methods: {
      emitFilteringAction() {
        this.$emit('filterAction');
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
