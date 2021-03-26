<template>
  <div class="homePage container-fluid">
    <div class="row justify-content-around mb-3">
      <ButtonFilter
        @filterAction="filterFemales"
        filterTxt="Female count:"
        :active="activeFilter === 'female'"
        :filteredAmount="femaleCount"
      />
      <ButtonFilter
        @filterAction="filterMales"
        filterTxt="Male count:"
        :active="activeFilter === 'male'"
        :filteredAmount="maleCount"
      />
      <ButtonFilter
        @filterAction="filterOther"
        filterTxt="Other gender count:"
        :active="activeFilter === 'other'"
        :filteredAmount="otherGenderCount"
      />
      <ButtonFilter
        @filterAction="filterAll"
        filterTxt="People count:"
        :active="activeFilter === 'all'"
        :filteredAmount="peopleCount"
      />
    </div>
    <Card
      v-for="(person, index) of peopleCurList"
      class="mb-3"
      :key="index"
      :person="person"
    />
    <div v-if="!isPeopleListEmpty" class="spinner-border text-info"></div>
  </div>
</template>

<script>
  import Card from '@/components/Card';
  import ButtonFilter from '@/components/ButtonFilter';

  export default {
    name: 'HomePage',
    components: {
      Card, ButtonFilter
    },
    data() {
      return {
        endpoint: "https://swapi.dev/api/people/?page=",
        peopleResult: [],
        peopleCurList: [],
        activeFilter: "all"
      }
    },
    async mounted() {
      this.peopleResult = await this.getAllPeople();
      this.peopleCurList = this.peopleResult;
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
              const { name, skin_color, eye_color, birth_year, gender, url } = person;
              people.push({ name, skin_color, eye_color, birth_year, gender, url });
            });
            pageCounter++;
          } catch (err) {
            console.error(err);
          }
        } while (lastResult.next);
        return people;
      },
      filterFemales() {
        this.peopleCurList = this.filteredFemales;
        this.activeFilter = 'female';
      },
      filterMales() {
        this.peopleCurList = this.filteredMales;
        this.activeFilter = 'male';
      },
      filterOther() {
        this.peopleCurList = this.filteredOthers;
        this.activeFilter = 'other';
      },
      filterAll() {
        this.peopleCurList = this.peopleResult;
        this.activeFilter = 'all';
      }
    },
    computed: {
      filteredFemales() {
        return this.peopleResult?.filter(el => el.gender === 'female');
      },
      filteredMales() {
        return this.peopleResult?.filter(el => el.gender === 'male');
      },
      filteredOthers() {
        return this.peopleResult?.filter(el => el.gender !== 'male' && el.gender !== 'female');
      },
      femaleCount() {
        return this.filteredFemales?.length;
      },
      maleCount() {
        return this.filteredMales?.length;
      },
      otherGenderCount() {
        return this.filteredOthers?.length;
      },
      peopleCount() {
        return this.peopleResult?.length;
      },
      peopleFilteredByLetters() {
        const filteredLetters = ['a', 'b', 'c'];
        return this.peopleResult.filter(el => {
          return filteredLetters.some(letter => letter === el.name.charAt(0).toLowerCase())
        })
      },
      isPeopleListEmpty() {
        return this.peopleCurList?.length;
      },
    },
  }
</script>

<style scoped lang="scss">
  .homePage {
    width: 95vw;
  }
  @media (min-width: $br-large) {
    .homePage {
      width: 60vw;
    }
  }
</style>
