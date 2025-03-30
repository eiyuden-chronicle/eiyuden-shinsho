<template>
  <div>
    <Header />
    <Title />
    <AccessCounter />
    <CurrentDateTime />

    <CrowdFundingIsEnd />
    <PleaseCheckScrapbox />
    <UpdateInfo />
    <TitleNotification />

    <Bottom />
  </div>
</template>

<script>
import AccessCounter from '@/components/AccessCounter'
import Bottom from '@/components/Bottom'
import CrowdFundingIsEnd from '@/components/CrowdFundingIsEnd'
import CurrentDateTime from '@/components/CurrentDateTime'
import Header from '@/components/Header'
import PleaseCheckScrapbox from '@/components/PleaseCheckScrapbox'
import Title from '@/components/Title'
import TitleNotification from '@/components/TitleNotification'
import UpdateInfo from '@/components/UpdateInfo'

export default {
  name: 'Home',
  components: {
    Header,
    TitleNotification,
    UpdateInfo,
    Title,
    AccessCounter,
    Bottom,
    CurrentDateTime,
    CrowdFundingIsEnd,
    PleaseCheckScrapbox,
  },
  created: function () {
    // Initialize
    this.$store.commit('rewards/setAllRewardsState')
  },
}
</script>

<style>
body {
  background-color: #79cafd;
  overflow-x: hidden;
}

section.section {
  padding: 15px;
}

.b-radio.radio {
  border-radius: 100px;
}

.page-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
}

.kochira-he-dozo {
  cursor: pointer;
  cursor: hand;
}
</style>
