export function pledgeDigitalVersion() {
  return {
    isMatchedWithUserSelection: this.$store.getters['pledges/isDigitalVersion'],
    pledgeName: {
      english: 'Digital Version',
      japanese: 'デジタルバージョン',
    },
    rewards: {
      english: ['yourNameInTheStaffRoll', 'discordRole: Knight, Ranger or Wizard', 'digitalGame', 'betaAccess'],
      japanese: [
        'あなたの名前がスタッフロールに',
        'Discordの称号: Knight, Ranger or Wizard',
        'ダウンロード版ゲーム',
        'ベータアクセス権',
      ],
    },
  }
}
