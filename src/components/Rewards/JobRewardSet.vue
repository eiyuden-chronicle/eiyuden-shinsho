<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <p class="is-size-5 has-text-weight-bold">
            「ジョブ」ごとのグッズ
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
              v-model="jobRewardSet"
              native-value="true"
              type="is-success"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <b-icon icon="check" size="is-small"></b-icon>
              <span>ほしい</span>
            </b-radio-button>
            <b-radio-button
              v-model="jobRewardSet"
              native-value="whichever"
              type="is-info"
              class="column is-4-mobile is-4-tablet is-4-desktop"
            >
              <span>どちらでも</span>
            </b-radio-button>
            <b-radio-button
              v-model="jobRewardSet"
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
          <p class="modal-card-title">「ジョブ」ごとのグッズ</p>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="content">
            <ul>
              <li>「百英雄伝」に登場する「ジョブ」をテーマにしたグッズです</li>
              <li>
                「ジョブ」ごとにグッズが異なり、その中から希望するグッズを選びます
              </li>
              <li>
                プレッジによっては複数の「ジョブ」のグッズ選択することが可能で、その際には同じ「ジョブ」のグッズを複数個選ぶこともできます
              </li>
            </ul>
            <h4>「ジョブ」ごとの「グッズ」一覧</h4>
            <div class="content">
              <h5>「シェフ」のグッズ</h5>
              <ul>
                <li>エプロン</li>
                <li>電子版のレシピ</li>
              </ul>
              <img
                src="/images/job_reward_chef.jpg"
                alt="「シェフ】グッズ"
                title="「シェフ」グッズ"
              />
            </div>
            <div class="content">
              <h5>「画家」のグッズ</h5>
              <ul>
                <li>キャラのステッカー</li>
                <li>ゲームのポスター</li>
              </ul>
              <img
                src="/images/job_reward_painter.jpg"
                alt="「画家」グッズ"
                title="「画家」グッズ"
              />
            </div>
            <div class="content">
              <h5>「宝石商」のグッズ</h5>
              <ul>
                <li>エナメルのピンパッジ3つ</li>
              </ul>
              <img
                src="/images/job_reward_jeweler_3_chars.png"
                alt="「宝石商」グッズ"
                title="「宝石商」グッズ"
              />
            </div>
            <div class="content">
              <h5>「脚本家」のグッズ</h5>
              <ul>
                <li>2冊の冊子からなるグッズ</li>
                <li>1. シナリオが記載された本</li>
                <li>
                  2. ゲームやクリエイターについて記載されているパンフレット
                </li>
              </ul>
              <img
                src="/images/job_reward_playwright.jpg"
                alt="「脚本家」グッズ"
                title="「脚本家」グッズ"
              />
            </div>
            <div class="content">
              <h5>「鍛冶屋」のグッズ</h5>
              <ul>
                <li>ノアの武器のレプリカ</li>
                <li>サイズは 1/16</li>
              </ul>
              <img
                src="/images/job_reward_blacksmith.jpg"
                alt="「鍛冶屋」グッズ"
                title="「鍛冶屋」グッズ"
              />
            </div>
            <div class="content">
              <h5>「農家」のグッズ</h5>
              <ul>
                <li>何でも詰め込めるトートバッグ</li>
                <li>日々の出来事を記録できる冒険日誌</li>
              </ul>
              <img
                src="/images/job_reward_farmer_2nd_edition.jpg"
                alt="「農家」グッズ"
                title="「農家」グッズ"
              />
            </div>
            <div class="content">
              <h5>「芸術家」のグッズ</h5>
              <ul>
                <li>「百英雄伝」のメインキャラが描かれたアクリルスタンド</li>
              </ul>
              <img
                src="/images/job_reward_curator.jpg"
                alt="「芸術家」グッズ"
                title="「芸術家」グッズ"
              />
            </div>
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
    jobRewardSet: {
      get() {
        return this.$store.state.rewards.jobRewardSet
      },
      set(value) {
        this.$store.commit('rewards/setJobRewardSet', value)
      },
    },
  },
  watch: {
    jobRewardSet: function () {
      this.$store.commit('rewards/setAllRewardsState')
    },
  },
}
</script>
