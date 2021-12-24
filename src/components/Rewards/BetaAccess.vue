<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            ベータ版をプレイできる
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
              v-model="betaAccess"
              native-value="true"
              type="is-success"
              class="column"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>全プレッジに含まれます</span>
            </b-radio-button>
          </b-field>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': modalIsShown }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">ベータ版をプレイできる</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <ul>
              <li>開発途中のベータ版をプレイすることができます</li>
              <li>
                戦闘シーンなどを体験できる以外にも、ゲームをより良いものに仕上げるためのフィードバックを送って頂けます
              </li>
              <li>提供プラットフォームは PC (Steam) のみです</li>
            </ul>
            <img
              src="/images/beta_access.jpg"
              alt="ベータ版プレイ権"
              title="ベータ版プレイ権"
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
    betaAccess: {
      get() {
        return this.$store.state.rewards.betaAccess
      },
      set(value) {
        this.$store.commit('rewards/setBetaAccess', value)
      },
    },
  },
  watch: {
    betaAccess: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
