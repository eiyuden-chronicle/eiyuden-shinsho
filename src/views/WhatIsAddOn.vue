<template>
  <div id="page-top">
    <Header />
    <Title />

    <br />
    <button class="button is-rounded">
      <router-link to="/" class="has-text-weight-bold is-size-5"
        >トップページへ戻る</router-link
      >
    </button>
    <br />
    <br />

    <Abstract />
    <Conclusion />
    <ListByImage />
    <Detail />
    <References />

    <Bottom />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Abstract from '@/components/WhatIsAddOn/Abstract'
import Bottom from '@/components/WhatIsAddOn/Bottom'
import Conclusion from '@/components/WhatIsAddOn/Conclusion'
import Detail from '@/components/WhatIsAddOn/Detail'
import ListByImage from '@/components/WhatIsAddOn/ListByImage'
import References from '@/components/WhatIsAddOn/References'
import Title from '@/components/WhatIsAddOn/Title'

export default {
  name: 'WhatIsAddOn',
  components: {
    Header,
    Title,
    Bottom,
    Abstract,
    Conclusion,
    ListByImage,
    Detail,
    References,
  },
}
</script>

<style scoped>
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
