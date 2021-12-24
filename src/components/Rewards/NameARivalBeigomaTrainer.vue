<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            ベーゴマのライバルの命名
            <span @click="showModal" class="kochira-he-dozo"
              ><b-icon icon="help-circle-outline" size="is-middle"></b-icon
            ></span>
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <b-field class="columns">
            <b-radio-button
              v-model="nameARivalBeigomaTrainer"
              native-value="true"
              type="is-success"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="nameARivalBeigomaTrainer"
              native-value="whichever"
              type="is-info"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <span>どちらでも</span>
            </b-radio-button>
            <b-radio-button
              v-model="nameARivalBeigomaTrainer"
              native-value="false"
              type="is-danger"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <b-icon icon="close"></b-icon>
              <span>なし</span>
            </b-radio-button>
          </b-field>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': modalIsShown }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">ベーゴマのライバルの命名</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <ul>
              <li>
                ミニゲームである「ベーゴマ」でライバルとなるキャラの名前を付けることができます
              </li>
              <li>
                あなたがオールラーン大陸一のベーゴマ使いとなろうとする道のりにこのライバルが立ちはだかってきます
              </li>
            </ul>
            <img
              src="/images/name_a_rival_beigoma_trainer.png"
              alt="ベーゴマライバル命名権"
              title="ベーゴマライバル命名権"
            />
          </div>
        </section>
        <footer class="modal-card-foot move-button-to-right">
          <button class="button is-success" @click="pushCloseButton">
            閉じる
          </button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      modalIsShown: false,
      closeButtonIsPressed: false,
    }
  },
  methods: {
    showModal() {
      this.closeButtonIsPressed = false
      this.modalIsShown = true
    },
    pushCloseButton() {
      this.closeButtonIsPressed = true
      this.modalIsShown = false
    },
  },
  computed: {
    nameARivalBeigomaTrainer: {
      get() {
        return this.$store.state.rewards.nameARivalBeigomaTrainer
      },
      set(value) {
        this.$store.commit('rewards/setNameARivalBeigomaTrainer', value)
      },
    },
  },
  watch: {
    nameARivalBeigomaTrainer: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
