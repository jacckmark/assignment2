<template>
  <div class="card shadow">
    <div class="row">
      <div class="col-md-3">
        <img :src="personPicUrl" class="card-img-top" alt="person avatar" />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <div class="row">
            <h5 class="card-title" v-if="personName">
              {{ personName }}
            </h5>
            <font-awesome-layers
              class="fa-1x weight-indicator ml-auto mr-5"
              v-if="personBmi"
            >
              <font-awesome-icon
                class="fa-2x scale-icon"
                :icon="['fas', scaleEmoji]"
              />
              <span :class="[`badge-${weightBadgeColor}`, 'badge']">{{
                realAndIdealMassDifference
              }}</span>
            </font-awesome-layers>
          </div>
          <ul class="list-group list-group-flush text-left">
            <li class="list-group-item">skin color: {{ person.skin_color }}</li>
            <li class="list-group-item">eye color: {{ person.eye_color }}</li>
            <li class="list-group-item">birth year: {{ person.birth_year }}</li>
          </ul>
        </div>
        <div class="card-body text-right pt-0 pb-0">
          <BaseButton buttonTxt="edit" buttonType="primary" class="text-left" />
        </div>
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
    methods: {
      isNumPositive(num) {
        return num >= 0;
      }
    },
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
      },
      personName() {
        return this.person?.name;
      },
      personMass() {
        return parseInt(this.person?.mass.replace(/,/g, ''));
      },
      personHeight() {
        return parseInt(this.person?.height.replace(/,/g, '')) / 100;
      },
      personBmi() {
        return isNaN(this.personMass) || isNaN(this.personHeight) ? 0 : this.personMass / (this.personHeight ** 2);
      },
      idealPersonMass() {
        let idealBMI = 21;
        return parseInt(idealBMI * (this.personHeight ** 2));
      },
      realAndIdealMassDifference() {
        return this.personMass - this.idealPersonMass;
      },
      weightBadgeColor() {
        return this.isNumPositive(this.realAndIdealMassDifference) ? 'danger' : 'warning';
      },
      scaleEmoji() {
        if (this.personBmi <= 18) {
          return 'balance-scale-left';
        } else if (this.personBmi <= 25) {
          return 'balance-scale';
        } else {
          return 'balance-scale-right';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    padding: 20px;
    cursor: pointer;
    &:hover {
      transform: rotate(0deg);
      animation: rotate-animation 0.82s infinite;
    }
    .card-img-top {
      width: 150px;
    }
    .card-body {
      .weight-indicator {
        .scale-icon {
          position: relative;
        }
        .badge {
          position: absolute;
          top: -5px;
          left: 40px;
        }
      }
    }
  }
</style>
