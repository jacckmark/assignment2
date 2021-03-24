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
        endpoint: "https://swapi.dev/api/people/?page=",
        peopleResult: []
      }
    },
    async mounted() {
      this.peopleResult = await this.getAllPeople();
    },
    methods: {
      async getAllPeople() {
        let pageCounter = 1;
        let people = [];
        let lastResult = [];
        do {
          try {
            const response = await this.axios.get(`${this.endpoint}${pageCounter}`);
            const data = response.data;
            lastResult = data;
            data.results.forEach(person => {
              const { name, height, films } = person;
              people.push({ name, height, films });
            });
            pageCounter++;
          } catch (err) {
            console.error(err);
          }
        } while (lastResult.next);
        return people;
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
