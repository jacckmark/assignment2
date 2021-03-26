<template>
  <div class="personPage">
    <h3>Edit {{ personData.name }}</h3>
    <form
      @submit.prevent="editPerson"
      class="text-left col-10 offset-1 col-md-6 offset-md-3 justify-content-center"
    >
      <div class="form-group mt-3">
        <label for="name">Name</label>
        <input
          v-model="personData.name"
          type="text"
          class="form-control"
          placeholder="Enter name"
        />
      </div>
      <div class="form-group">
        <label for="height">Height</label>
        <input
          v-model="personData.height"
          type="text"
          class="form-control"
          placeholder="Enter height"
        />
      </div>
      <div class="form-group">
        <label for="mass">Mass</label>
        <input
          v-model="personData.mass"
          type="text"
          class="form-control"
          placeholder="Enter mass"
        />
      </div>
      <div class="form-group">
        <label for="hair_color">Hair color</label>
        <input
          v-model="personData.hair_color"
          type="text"
          class="form-control"
          placeholder="Enter hair color"
        />
      </div>
      <div class="form-group">
        <label for="skin color">Skin color</label>
        <input
          v-model="personData.skin_color"
          type="text"
          class="form-control"
          placeholder="Enter skin color"
        />
      </div>
      <div class="form-group">
        <label for="eye_color">Eye color</label>
        <input
          v-model="personData.eye_color"
          type="text"
          class="form-control"
          placeholder="Enter eye color"
        />
      </div>
      <div class="form-group">
        <label for="birth_year">Birth year</label>
        <input
          v-model="personData.birth_year"
          type="text"
          class="form-control"
          placeholder="Enter birth year"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input
          v-model="personData.gender"
          type="text"
          class="form-control"
          placeholder="Enter gender"
        />
      </div>
      <div class="mt-4 mb-4 form-group d-flex justify-content-around">
        <BaseButton
          buttonTxt="submit"
          type="submit"
          value="submit"
          buttonType="success"
        />
        <router-link to="/">
          <BaseButton buttonTxt="go back to home" buttonType="primary" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'PersonPage',
    data() {
      return {
        endpoint: "https://swapi.dev/api/people/",
        personData: {}
      }
    },
    props: ["id"],
    beforeRouteEnter(to, from, next) {
      next(async vm => {
        vm.personData = await vm.getPerson(vm.id)
        if (!vm.isPersonEditable) {
          next('/');
        }
      });
    },
    methods: {
      async getPerson(personId) {
        try {
          const response = await this.axios.get(`${this.endpoint}${personId}/`);
          return response.data;
        } catch (err) {
          console.error(err);
        }
      },
      editPerson() {
        console.log('edited person: ', this.personData);
      },
    },
    computed: {
      isPersonEditable() {
        return this.personData.gender === 'male' && this.personData.eye_color === 'blue' && this.personData.birth_year === '19BBY';
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
