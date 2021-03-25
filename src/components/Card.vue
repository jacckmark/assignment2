<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="personPicUrl" class="card-img-top" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">This is some text within a card body.</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      person: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        avatarsEndpoint: 'https://avatars.dicebear.com/api/'
      }
    },
    mounted() { },
    computed: {
      personGender() {
        let otherGenders = ['n/a', 'hermaphrodite', 'none'];
        return otherGenders.some(gender => gender === this.person.gender) ? 'identicon' : this.person.gender.toLowerCase();
      },
      personPicUrl() {
        return `${this.avatarsEndpoint}${this.personGender}/${this.personId}.svg`
      },
      personId() {
        let match = this.person?.url?.match(/\/(?<id>[0-9]+?)\/$/);
        return match?.groups?.id || '0';
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
