export function pledgeDigitalDeluxe() {
  return {
    pledgeName: {
      english: 'Digital Deluxe',
      japanese: 'Digital Deluxe',
    },
    isMatchedWithUserSelection: this.$store.getters['pledges/isDigitalDeluxe'],
    rewards: {
      english: ['yourNameInTheStaffRoll', 'discordRole: Knight, Ranger or Wizard', '2x digitalGame', 'betaAccess'],
      japanese: [
        'あなたの名前がスタッフロールに',
        'Discordの称号: Knight, Ranger or Wizard',
        '2つのダウンロード版ゲーム',
        'ベータアクセス権',
      ],
    },
  }
}
