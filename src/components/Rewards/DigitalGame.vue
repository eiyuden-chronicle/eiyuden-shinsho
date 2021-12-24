<template>
  <section id="digital-game" class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            ダウンロード版ゲーム
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
              v-model="digitalGame"
              native-value="true"
              type="is-success"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="digitalGame"
              native-value="whichever"
              type="is-info"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <span>どちらでも</span>
            </b-radio-button>
            <b-radio-button
              v-model="digitalGame"
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
          <p class="modal-card-title">ダウンロード版ゲーム</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <ul>
              <li>お手軽にプレイできるダウンロード版のゲームです</li>
              <li>
                対応プラットフォームは以下の通りです
                <ul>
                  <li>PlayStation 4</li>
                  <li>PlayStation 5</li>
                  <li>Xbox One</li>
                  <li>Xbox Series X</li>
                  <li>次世代 Nintendo ハード（発表が無ければ現行の Switch）</li>
                  <li>PC</li>
                </ul>
              </li>
            </ul>
            <img
              src="/images/digital_copy.jpg"
              alt="DL版ゲーム"
              title="DL版ゲーム"
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
    digitalGame: {
      get() {
        return this.$store.state.rewards.digitalGame
      },
      set(value) {
        this.$store.commit('rewards/setDigitalGame', value)
      },
    },
  },
  watch: {
    digitalGame: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
