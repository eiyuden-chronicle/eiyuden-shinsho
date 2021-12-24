<template>
  <section class="section">
    <nav class="navbar is-fixed-bottom level">
      <p
        class="level-item is-size-4 has-text-centered pledges-list"
        @click="showModal"
      >
        該当プレッジ一覧へ（{{ numberOfMatchedPledgeNames }}個）
      </p>

      <div class="modal" :class="{ 'is-active': modalIsShown }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">該当プレッジ</p>
          </header>
          <section class="modal-card-body has-text-left">
            <div id="modal-top-position"></div>
            <div v-if="matchedPledgeNames.length === 0">
              該当プレッジはありません。
            </div>
            <div v-else>
              <div class="block">
                <ul>
                  <div
                    v-for="pledge in matchedPledges"
                    :key="pledge['pledgeName']['english']"
                  >
                    <p class="is-size-5 has-text-weight-bold more-margin">
                      {{ pledge['pledgeName']['japanese'] }}
                      <span class="is-size-6">
                        ({{ pledge['pledgeName']['english'] }})
                      </span>
                    </p>

                    <p class="is-size-6 has-text-weight-bold more-margin">
                      ・支援額 {{ pledge['pledgeMinimumAmount']['japanese'] }}円
                      以上
                    </p>
                    <ul>
                      <div
                        v-for="rewardJapanese in pledge['rewards']['japanese']"
                        :key="rewardJapanese"
                      >
                        <li class="more-margin">・{{ rewardJapanese }}</li>
                      </div>
                    </ul>
                    <br />
                  </div>
                </ul>
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
    </nav>
  </section>
</template>

<script>
// TODO: I wouldn't like to use jQuery...
import jQuery from 'jquery'
const $ = jQuery

export default {
  data: () => {
    return {
      modalIsShown: false,
      closeButtonIsPressed: false,
    }
  },
  computed: {
    matchedPledges: function () {
      return this.allPledges().filter(
        pledge =>
          pledge['isMatchedWithUserSelection'] === true &&
          pledge['isAvailable'],
      )
    },
    matchedPledgeNames: function () {
      return this.matchedPledges.map(pledge => pledge['pledgeName'])
    },
    numberOfMatchedPledgeNames: function () {
      return this.matchedPledgeNames.length
    },
  },
  methods: {
    moveToTopPositionInModal() {
      const targetPosition = $('#modal-top-position').position()
      $('.modal-card-body').animate({ scrollTop: targetPosition.top }, 0)
    },
    showModal() {
      this.closeButtonIsPressed = false
      this.modalIsShown = true
    },
    pushCloseButton() {
      // TODO: If values aren't changed, keep a position
      this.moveToTopPositionInModal()

      this.closeButtonIsPressed = true
      this.modalIsShown = false
    },
    allPledges: function () {
      return [
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDigitalVersion'],
          isAvailable: true,
          pledgeName: {
            english: 'Digital Version',
            japanese: 'デジタルバージョン',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '4,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              'digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'ダウンロード版のゲーム',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isPhysicalVersion'],
          isAvailable: true,
          pledgeName: {
            english: 'Physical Version',
            japanese: 'フィジカルバージョン',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '6,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              'digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDoubleDigitalPack'],
          isAvailable: true,
          pledgeName: {
            english: 'Double Digital Pack',
            japanese: 'ダブル・デジタルパック',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '7,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              '2x betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる x 2',
              'ダウンロード版のゲーム x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDoublePhysicalPack'],
          isAvailable: true,
          pledgeName: {
            english: 'Double Physical Pack',
            japanese: 'ダブル・フィジカルパック',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '11,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x physicalGame',
              '2x betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる x 2',
              'パッケージ版のゲーム x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDigitalAndPhysical'],
          isAvailable: true,
          pledgeName: {
            english: 'Digital & Physical',
            japanese: 'デジタル＆フィジカル',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '9,400',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              'digitalGame',
              'physicalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'ダウンロード版のゲーム',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isBadgeOfHonor'],
          isAvailable: true,
          pledgeName: {
            english: 'Badge of Honor',
            japanese: 'バッジ・オブ・オナー',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '7,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'ダウンロード版のゲーム',
              '缶バッジ',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isMarkOfTheBard'],
          isAvailable: true,
          pledgeName: {
            english: 'Mark of the Bard',
            japanese: 'マーク・オブ・ザ・バード',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '10,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isOrderOfTheVermillion'],
          isAvailable: true,
          pledgeName: {
            english: 'Order of the Vermillion',
            japanese: 'オーダー・オブ・ザ・バーミリオン',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '15,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isOrderOfTheHarmonious'],
          isAvailable: true,
          pledgeName: {
            english: 'Order of the Harmonious',
            japanese: 'オーダー・オブ・ザ・ハーモニアス',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '15,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'サントラ（アナログレコード版）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isOrderOfTheArchivists'],
          isAvailable: true,
          pledgeName: {
            english: 'Order of the Archivists',
            japanese: 'オーダー・オブ・ザ・アーキビスト',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '15,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'アートブック（紙の印刷版）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTrinityOfOrders'],
          isAvailable: true,
          pledgeName: {
            english: 'Trinity of Orders',
            japanese: 'トリニティ・オブ・オーダーズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '25,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isVermillionSquire'],
          isAvailable: false,
          pledgeName: {
            english: 'Vermillion Squire',
            japanese: 'バーミリオン・スクワイア',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '???',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isVermillionSquire'],
          isAvailable: true,
          pledgeName: {
            english: 'Vermilion Squire Re-redux',
            japanese: 'バーミリオン・スクワイア・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '25,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              '「ジョブ」をテーマにしたグッズ x 1',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isHarmoniousSquire'],
          isAvailable: false,
          pledgeName: {
            english: 'Harmonious Squire',
            japanese: 'ハーモニアス・スクワイア',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isHarmoniousSquire'],
          isAvailable: true,
          pledgeName: {
            english: 'Harmonious Squire Redux',
            japanese: 'ハーモニアス・スクワイア・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '22,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'サントラ（アナログレコード版）',
              '「ジョブ」をテーマにしたグッズ x 1',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isArchivistSquire'],
          isAvailable: false,
          pledgeName: {
            english: 'Archivist Squire',
            japanese: 'アーキビスト・スクワイア',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isArchivistSquire'],
          isAvailable: true,
          pledgeName: {
            english: 'Archivist Squire Returns',
            japanese: 'アーキビスト・スクワイア・リターンズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '30,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTrinitySquire'],
          isAvailable: false,
          pledgeName: {
            english: 'Trinity Squire',
            japanese: 'トリニティ・スクワイア',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTrinitySquire'],
          isAvailable: true,
          pledgeName: {
            english: 'Trinity Squire Re-redux',
            japanese: 'トリニティ・スクワイア・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '38,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isVermillionKnight'],
          isAvailable: false,
          pledgeName: {
            english: 'Vermillion Knight',
            japanese: 'バーミリオン・ナイト',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isVermillionKnight'],
          isAvailable: true,
          pledgeName: {
            english: 'Vermillion Knight Redux',
            japanese: 'バーミリオン・ナイト・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '27,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              '「ジョブ」をテーマにしたグッズ x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isHarmoniousKnight'],
          isAvailable: true,
          pledgeName: {
            english: 'Harmonious Knight',
            japanese: 'ハーモニアス・ナイト',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '25,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'サントラ（アナログレコード版）',
              '「ジョブ」をテーマにしたグッズ x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isArchivistKnight'],
          isAvailable: false,
          pledgeName: {
            english: 'Archivist Knight',
            japanese: 'アーキビスト・ナイト',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isArchivistKnight'],
          isAvailable: true,
          pledgeName: {
            english: 'Archivist Knight Re-redux',
            japanese: 'アーキビスト・ナイト・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '32,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTrinityKnight'],
          isAvailable: false,
          pledgeName: {
            english: 'Trinity Knight',
            japanese: 'トリニティ・ナイト',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTrinityKnight'],
          isAvailable: true,
          pledgeName: {
            english: 'Trinity Knight Redux',
            japanese: 'トリニティ・ナイト・リダックス',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '40,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isVermillionNoble'],
          isAvailable: true,
          pledgeName: {
            english: 'Vermillion Noble',
            japanese: 'バーミリオン・ノーブル',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '37,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              '「ジョブ」をテーマにしたグッズ x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isHarmoniousNoble'],
          isAvailable: true,
          pledgeName: {
            english: 'Harmonious Noble',
            japanese: 'ハーモニアス・ノーブル',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '37,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'サントラ（アナログレコード版）',
              '「ジョブ」をテーマにしたグッズ x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isArchivistNoble'],
          isAvailable: false,
          pledgeName: {
            english: 'Archivist Noble',
            japanese: 'アーキビスト・ノーブル',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '37,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isArchivistNoble'],
          isAvailable: true,
          pledgeName: {
            english: 'Archivist Noble Redux',
            japanese: 'アーキビスト・ノーブル・リダックス',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '41,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTrinityNoble'],
          isAvailable: false,
          pledgeName: {
            english: 'Trinity Noble',
            japanese: 'トリニティ・ノーブル',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTrinityNoble'],
          isAvailable: true,
          pledgeName: {
            english: 'Trinity Noble Redux',
            japanese: 'トリニティ・ノーブル・リダックス',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '52,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isNameOfTheSteadfast'],
          isAvailable: true,
          pledgeName: {
            english: 'Name of the Steadfast',
            japanese: 'ネーム・オブ・ザ・ステッドファスト',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '50,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              'アートブックへの名前の掲載',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isIndelibleHand'],
          isAvailable: true,
          pledgeName: {
            english: 'Indelible Hand',
            japanese: 'インデリブル・ハンド',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '75,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              'アートブックへの名前の掲載',
              '開発チームのサイン入りポスター',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isEnduringRequiem'],
          isAvailable: false,
          pledgeName: {
            english: 'Enduring Requiem',
            japanese: 'エンデューイング・レクイエム',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '兵士の一人として登場できる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isEnduringRequiem'],
          isAvailable: true,
          pledgeName: {
            english: 'Enduring Requiem Redux',
            japanese: 'エンデューイング・レクイエム・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '115,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '兵士の一人として登場できる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isCatTribution'],
          isAvailable: false,
          pledgeName: {
            english: 'Cat-tribution',
            japanese: 'キャット・トリビューション',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters['pledges/isPixelPet'],
          isAvailable: false,
          pledgeName: {
            english: 'Pixel Pet',
            japanese: 'ピクセル・ペット',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters['pledges/isPixelPet'],
          isAvailable: false,
          pledgeName: {
            english: 'Pixel Pet Re-redux',
            japanese: 'ピクセル・ペット・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '200,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              'ネコ以外のペットを登場させられる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isFellowWorldbuilder'],
          isAvailable: false,
          pledgeName: {
            english: 'Fellow Worldbuilder',
            japanese: 'フェロー・ワールドビルダー',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isEvilsAnvil'],
          isAvailable: false,
          pledgeName: {
            english: "Evil's Anvil",
            japanese: 'イビルズ・アンビル',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters['pledges/isAlterEgo'],
          isAvailable: false,
          pledgeName: {
            english: 'Alter Ego',
            japanese: 'アルター・エゴ',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGuildmaster'],
          isAvailable: true,
          pledgeName: {
            english: 'Guildmaster',
            japanese: 'ギルドマスター',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '500,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'ダウンロード版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ（全種類）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isReveredGuildmaster'],
          isAvailable: true,
          pledgeName: {
            english: 'Revered Guildmaster',
            japanese: 'リビアド・ギルドマスター',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '750,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'ダウンロード版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ（全種類）',
              'レプリカの盾',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isAllraansPantheron'],
          isAvailable: true,
          pledgeName: {
            english: "Allraan's Pantheon",
            japanese: 'オールラーンズ・パンテオン',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '750,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ（全種類）',
              'フィギュア x 3',
              '開発チームのサイン入りポスター',
              'アートブックへの名前の掲載',
              '開発チームと1日過ごせる',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters['pledges/isMonument'],
          isAvailable: false,
          pledgeName: {
            english: 'Monument',
            japanese: 'モニュメント',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters['pledges/isMonument'],
          isAvailable: true,
          pledgeName: {
            english: 'Monument Returns',
            japanese: 'モニュメント・リターンズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '40,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'フィギュア',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isSilverMonument'],
          isAvailable: false,
          pledgeName: {
            english: 'Silver Monument',
            japanese: 'シルバー・モニュメント',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '40,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isSilverMonument'],
          isAvailable: false,
          pledgeName: {
            english: 'Silver Monument Redux',
            japanese: 'シルバー・モニュメント・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '44,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'フィギュア x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isSilverMonument'],
          isAvailable: false,
          pledgeName: {
            english: 'Silver Monument Re-redux',
            japanese: 'シルバー・モニュメント・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '50,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'フィギュア x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isSilverMonument'],
          isAvailable: true,
          pledgeName: {
            english: 'Silver Monument Returns',
            japanese: 'シルバー・モニュメント・リターンズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '60,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'フィギュア x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGoldenMonument'],
          isAvailable: false,
          pledgeName: {
            english: 'Golden Monument',
            japanese: 'ゴールデン・モニュメント',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGoldenMonument'],
          isAvailable: true,
          pledgeName: {
            english: 'Golden Monument Re-redux',
            japanese: 'ゴールデン・モニュメント・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '65,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'フィギュア x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGoldenMonument'],
          isAvailable: false,
          pledgeName: {
            english: 'Golden Monument Returns',
            japanese: 'ゴールデン・モニュメント・リターンズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '75,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'フィギュア x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGoldenMonument'],
          isAvailable: true,
          pledgeName: {
            english: 'Golden Monument Final',
            japanese: 'ゴールデン・モニュメント・ファイナル',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '90,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              'フィギュア x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isPieceOfHistory'],
          isAvailable: false,
          pledgeName: {
            english: 'Piece of History',
            japanese: 'ピース・オブ・ヒストリー',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isPieceOfHistory'],
          isAvailable: true,
          pledgeName: {
            english: 'Piece of History Re-redux',
            japanese: 'ピース・オブ・ヒストリー・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '42,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '「ジョブ」をテーマにしたグッズ x 1',
              'フィギュア',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isPieceOfHistory'],
          isAvailable: true,
          pledgeName: {
            english: 'Piece of History Returns',
            japanese: 'ピース・オブ・ヒストリー・リターンズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '50,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '「ジョブ」をテーマにしたグッズ x 1',
              'フィギュア',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isSilverPieceOfHistory'],
          isAvailable: false,
          pledgeName: {
            english: 'Silver Piece of History',
            japanese: 'シルバー・ピース・オブ・ヒストリー',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isSilverPieceOfHistory'],
          isAvailable: true,
          pledgeName: {
            english: 'Silver Piece of History Re-redux',
            japanese: 'シルバー・ピース・オブ・ヒストリー・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '60,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '「ジョブ」をテーマにしたグッズ x 1',
              'フィギュア x 2',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGoldenPieceOfHistory'],
          isAvailable: false,
          pledgeName: {
            english: 'Golden Piece of History',
            japanese: 'ゴールデン・ピース・オブ・ヒストリー',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGoldenPieceOfHistory'],
          isAvailable: false,
          pledgeName: {
            english: 'Golden Piece of History Re-redux',
            japanese: 'ゴールデン・ピース・オブ・ヒストリー・リ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '80,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '「ジョブ」をテーマにしたグッズ x 1',
              'フィギュア x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isGoldenPieceOfHistory'],
          isAvailable: true,
          pledgeName: {
            english: 'Golden Piece of History Returns',
            japanese: 'ゴールデン・ピース・オブ・ヒストリー・リターンズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '95,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '「ジョブ」をテーマにしたグッズ x 1',
              'フィギュア x 3',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDigitalCopyAndDigitalCd'],
          isAvailable: true,
          pledgeName: {
            english: 'Digital and Digital OST',
            japanese: 'デジタル＆デジタルOST',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '6,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'ダウンロード版のゲーム',
              'サントラ（ダウンロード版）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDigitalCopyAndDigitalArtbook'],
          isAvailable: true,
          pledgeName: {
            english: 'Digital & Digital Artbook',
            japanese: 'デジタル＆デジタルアートブック',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '7,500',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'ダウンロード版のゲーム',
              'アートブック（電子書籍版）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDigitalDeluxe'],
          isAvailable: true,
          pledgeName: {
            english: 'Digital Deluxe',
            japanese: 'デジタルデラックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '10,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'ダウンロード版のゲーム',
              'サントラ（ダウンロード版）',
              'アートブック（電子書籍版）',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isFoodForThought'],
          isAvailable: false,
          pledgeName: {
            english: 'Food for Thought',
            japanese: 'フード・フォー・ソート',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '150,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '食材を命名できる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isFoodForThought'],
          isAvailable: true,
          pledgeName: {
            english: 'Food for Thought Redux',
            japanese: 'フード・フォー・ソート・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '165,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '食材を命名できる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTopTrainer'],
          isAvailable: true,
          pledgeName: {
            english: 'Top Trainer',
            japanese: 'トップ・トレーナー',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '200,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              'ベーゴマでのライバルキャラの名前を付けられる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isTopTrainer'],
          isAvailable: true,
          pledgeName: {
            english: 'Top Trainer Redux',
            japanese: 'トップ・トレーナー・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '225,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              'ベーゴマでのライバルキャラの名前を付けられる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isEsteemedDecorator'],
          isAvailable: true,
          pledgeName: {
            english: 'Esteemed Decorator Redux',
            japanese: 'エスティームド・デコレーター・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '225,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '街のオブジェを作ることができる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isHatchItJob'],
          isAvailable: true,
          pledgeName: {
            english: 'Hatch-It Job',
            japanese: 'ハッチット ジョブ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '200,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '「エッグホースレース」に登場するライバルのエッグホースに名前を付けられる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDigYourOwnGrave'],
          isAvailable: false,
          pledgeName: {
            english: 'Dig Your Own Grave',
            japanese: 'ディグ・ユア・オウン・グレイブ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '150,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '墓に自分の名前を掘れる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isDigYourOwnGrave'],
          isAvailable: true,
          pledgeName: {
            english: 'Dig Your Own Grave Redux',
            japanese: 'ディグ・ユア・オウン・グレイブ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '200,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '墓に自分の名前を掘れる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isABrushWithInfamy'],
          isAvailable: true,
          pledgeName: {
            english: 'A Brush With Infamy',
            japanese: 'ア・ブラッシュ・ウイズ・インファミイ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '300,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '自分の肖像画が作れる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isABrushWithInfamy'],
          isAvailable: true,
          pledgeName: {
            english: 'A Brush With Infamy Redux',
            japanese: 'ア・ブラッシュ・ウイズ・インファミイ・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '400,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '自分の肖像画が作れる',
            ],
          },
        },
        {
          isMatchedWithUserSelection:
            this.$store.getters['pledges/isFishmentStory'],
          isAvailable: true,
          pledgeName: {
            english: 'Fishment Story Redux',
            japanese: 'フィッシュメント・ストーリー・リダックス',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '500,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロールへの名前の掲載',
              'Discordでの「肩書き」取得',
              'ベータ版をプレイできる',
              'パッケージ版のゲーム',
              '缶バッジ',
              'サントラ（CD版）',
              'Tシャツ',
              'サントラ（アナログレコード版）',
              'アートブック（紙の印刷版）',
              '「ジョブ」をテーマにしたグッズ x 1',
              '人面魚として登場できる',
              'あなたの顔をした人面魚のぬいぐるみ（10個のボイス入り）',
            ],
          },
        },
      ]
    },
  },
}
</script>

<style>
.level-item {
  margin: 10px;
}

.move-button-to-right {
  justify-content: flex-end;
}

.pledges-list {
  cursor: pointer;
  cursor: hand;
}

.more-margin {
  padding: 1px 1px 4px 1px;
}
</style>
