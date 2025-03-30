<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <h1 class="title">アドオン詳細</h1>
        </div>
      </div>
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <div class="content has-text-left">
            <br />
            <p>各アドオンの詳細は次の通りです。</p>
            <DigitalVersion />
            <PhysicalVersion />
            <SteelBook />
            <ChibiCharaFigures />
            <Snappies />
            <ClothMap />
            <CollectorCards />
            <BackerHero />
            <CompanionGame />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BackerHero from '@/components/WhatIsAddOn/ItemDetail/BackerHero'
import ChibiCharaFigures from '@/components/WhatIsAddOn/ItemDetail/ChibiCharaFigures'
import ClothMap from '@/components/WhatIsAddOn/ItemDetail/ClothMap'
import CollectorCards from '@/components/WhatIsAddOn/ItemDetail/CollectorCards'
import CompanionGame from '@/components/WhatIsAddOn/ItemDetail/CompanionGame'
import DigitalVersion from '@/components/WhatIsAddOn/ItemDetail/DigitalVersion'
import PhysicalVersion from '@/components/WhatIsAddOn/ItemDetail/PhysicalVersion'
import Snappies from '@/components/WhatIsAddOn/ItemDetail/Snappies'
import SteelBook from '@/components/WhatIsAddOn/ItemDetail/SteelBook'

export default {
  name: 'WhatIsAddOn',
  components: {
    DigitalVersion,
    SteelBook,
    ChibiCharaFigures,
    Snappies,
    ClothMap,
    PhysicalVersion,
    CollectorCards,
    BackerHero,
    CompanionGame,
  },
}
</script>

<style scoped>
.columns {
  margin: 1px;
}

.column {
  padding: 1px;
}
</style>
