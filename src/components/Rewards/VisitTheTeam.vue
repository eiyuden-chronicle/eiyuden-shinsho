<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            開発チームと一日を過ごせる
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
              v-model="visitTheTeam"
              native-value="true"
              type="is-success"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="visitTheTeam"
              native-value="whichever"
              type="is-info"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <span>どちらでも</span>
            </b-radio-button>
            <b-radio-button
              v-model="visitTheTeam"
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
          <p class="modal-card-title">開発チームと一日を過ごせる</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <ul>
              <li>
                開発チームと一緒に広大な東京の街で一日を過ごすことができます
              </li>
              <li>
                気ままに素敵な一日を過ごし、サイン入りグッズを頂いたりしちゃいましょう
              </li>
              <li>旅費や宿泊費はご負担ください</li>
            </ul>
            <img
              src="/images/visit_the_team.png"
              alt="開発チーム面会権"
              title="開発チーム面会権"
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
    visitTheTeam: {
      get() {
        return this.$store.state.rewards.visitTheTeam
      },
      set(value) {
        this.$store.commit('rewards/setVisitTheTeam', value)
      },
    },
  },
  watch: {
    visitTheTeam: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
