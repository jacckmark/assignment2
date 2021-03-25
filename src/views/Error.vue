<template>
  <div class="errorPage">
    <div class="content">
      <h3>
        You have made some mistake when typing url, this route does not exist...
      </h3>
      <img src="@/assets/images/error.jpg" alt="" />
      <router-link to="/" class="mt-4">
        <BaseButton buttonTxt="go back to home" buttonType="primary" />
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ErrorPage'
  }
</script>

<style scoped lang="scss">
  .errorPage {
    display: flex;
    width: 100%;
    justify-content: center;
    .content {
      flex-direction: column;
      display: flex;
      width: 80vw;
    }
  }
  @media (min-width: $br-medium) {
    .errorPage .content {
      width: 60vw;
    }
  }
  @media (min-width: $br-large) {
    .errorPage .content {
      width: 40vw;
    }
  }
</style>
