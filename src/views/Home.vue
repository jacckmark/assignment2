<template>
  <div class="homePage">
    <h1>Home</h1>
    <ul>
      <li v-for="(person, index) of peopleResult" :key="index">
        {{ person.name }}
      </li>
    </ul>
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
        // let pageCounter = 1;
        // let people = [];
        // let lastResult = [];
        // do {
        //   try {
        //     const response = await this.axios.get(`${this.endpoint}${pageCounter}`);
        //     const data = response.data;
        //     lastResult = data;
        //     console.log(data);
        //     data.results.forEach(person => {
        //       const { name, height, films } = person;
        //       people.push({ name, height, films });
        //     });
        //     pageCounter++;
        //   } catch (err) {
        //     console.error(err);
        //   }
        // } while (lastResult.next);
        let people = [
          {
            "edited": "2014-12-20T21:17:56.891Z",
            "name": "Luke Skywalker",
            "created": "2014-12-09T13:50:51.644Z",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "172",
            "eye_color": "blue",
            "mass": "77",
            "homeworld": 1,
            "birth_year": "19BBY"
          },
          {
            "edited": "2014-12-20T21:17:50.309Z",
            "name": "C-3PO",
            "created": "2014-12-10T15:10:51.357Z",
            "gender": "n/a",
            "skin_color": "gold",
            "hair_color": "n/a",
            "height": "167",
            "eye_color": "yellow",
            "mass": "75",
            "homeworld": 1,
            "birth_year": "112BBY"
          },
          {
            "edited": "2014-12-20T21:17:50.311Z",
            "name": "R2-D2",
            "created": "2014-12-10T15:11:50.376Z",
            "gender": "n/a",
            "skin_color": "white, blue",
            "hair_color": "n/a",
            "height": "96",
            "eye_color": "red",
            "mass": "32",
            "homeworld": 8,
            "birth_year": "33BBY"
          },
          {
            "edited": "2014-12-20T21:17:50.317Z",
            "name": "Owen Lars",
            "created": "2014-12-10T15:52:14.024Z",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "brown, grey",
            "height": "178",
            "eye_color": "blue",
            "mass": "120",
            "homeworld": 1,
            "birth_year": "52BBY"
          },
          {
            "edited": "2014-12-20T21:17:50.319Z",
            "name": "Beru Whitesun lars",
            "created": "2014-12-10T15:53:41.121Z",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "165",
            "eye_color": "blue",
            "mass": "75",
            "homeworld": 1,
            "birth_year": "47BBY"
          },
          {
            "edited": "2014-12-20T21:17:50.330Z",
            "name": "Wilhuff Tarkin",
            "created": "2014-12-10T16:26:56.138Z",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "auburn, grey",
            "height": "180",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 21,
            "birth_year": "64BBY"
          },
          {
            "edited": "2014-12-20T21:17:50.338Z",
            "name": "Jabba Desilijic Tiure",
            "created": "2014-12-10T17:11:31.638Z",
            "gender": "hermaphrodite",
            "skin_color": "green-tan, brown",
            "hair_color": "n/a",
            "height": "175",
            "eye_color": "orange",
            "mass": "1,358",
            "homeworld": 24,
            "birth_year": "600BBY"
          }];
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
