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

    <Bottom />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Abstract from '@/components/StretchGoals/Abstract'
import Bottom from '@/components/StretchGoals/Bottom'
import Conclusion from '@/components/StretchGoals/Conclusion'
import Title from '@/components/StretchGoals/Title'

export default {
  name: 'StretchGoals',
  components: {
    Header,
    Title,
    Bottom,
    Abstract,
    Conclusion,
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
