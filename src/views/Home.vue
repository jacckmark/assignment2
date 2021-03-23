<template>
  <div class="homePage">
    <h1>Home</h1>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        endpoint: "https://swapi.dev/api/people/",
        peopleResult: []
      }
    },
    async mounted() {
      this.peopleResult = await this.getAllPeople();
    },
    methods: {
      async getAllPeople() {

        try {
          let result = [];
          let url = this.endpoint;
          while (url) {
            const response = await this.axios.get(this.endpoint);
            console.log(response);
            result.push(...response.data.results);
            url = response?.data?.next;
          }
          return result;
        } catch (err) {
          console.log(err);
        }
      }
    },
    computed: {
      peopleList() {
        return this.peopleResult?.results;
      },
      peopleCount() {
        return this.peopleResult?.count;
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
