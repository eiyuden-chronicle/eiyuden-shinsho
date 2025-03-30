<template>
  <div>
    <Header />
    <Title />

    <RewardsCategory category-name="「アドオン」について" />
    <Addons />

    <RewardsCategory category-name="全プレ" />
    <YourNameInTheStaffRoll />
    <DiscordRole />
    <BetaAccess />

    <RewardsCategory category-name="ゲーム本体" />
    <PhysicalGame />
    <DigitalGame />

    <RewardsCategory category-name="グッズ" />
    <SigilButton />
    <TShirt />
    <JobRewardSet />
    <CharacterFigure />
    <ReplicaShield />
    <TeamSignedPoster />

    <RewardsCategory category-name="サントラ" />
    <OstCd />
    <DigitalCd />
    <VinylRecord />

    <RewardsCategory category-name="アートブック" />
    <SoftcoverArtbook />
    <DigitalArtbook />

    <RewardsCategory category-name="名前" />
    <NameInArtbook />
    <YourNameAsASoldier />
    <NameARivalBeigomaTrainer />
    <NameARivalEggleg />
    <NameAnInGameFood />
    <DigYourOwnGrave />

    <RewardsCategory category-name="その他" />
    <CreateATownObject />
    <ABrushWithInfamy />
    <VisitTheTeam />
    <HumanFacedFishPlushy />
    <BecomeAHumanFacedFish />

    <RewardsCategory category-name="規定数終了" />
    <CatInTheGame />
    <BecomeAStatue />
    <NameALocation />
    <CreateAnEnemy />
    <BecomeAnNpc />
    <PetInTheGame />

    <NavBar />

    <Bottom />
    <br />
  </div>
</template>

<script>
import Addons from '@/components/Addons'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import ABrushWithInfamy from '@/components/Rewards/ABrushWithInfamy'
import BecomeAHumanFacedFish from '@/components/Rewards/BecomeAHumanFacedFish'
import BecomeAStatue from '@/components/Rewards/BecomeAStatue'
import BecomeAnNpc from '@/components/Rewards/BecomeAnNpc'
import BetaAccess from '@/components/Rewards/BetaAccess'
import CatInTheGame from '@/components/Rewards/CatInTheGame'
import RewardsCategory from '@/components/Rewards/Category'
import CharacterFigure from '@/components/Rewards/CharacterFigure'
import CreateATownObject from '@/components/Rewards/CreateATownObject'
import CreateAnEnemy from '@/components/Rewards/CreateAnEnemy'
import DigYourOwnGrave from '@/components/Rewards/DigYourOwnGrave'
import DigitalArtbook from '@/components/Rewards/DigitalArtbook'
import DigitalCd from '@/components/Rewards/DigitalCd'
import DigitalGame from '@/components/Rewards/DigitalGame'
import DiscordRole from '@/components/Rewards/DiscordRole'
import HumanFacedFishPlushy from '@/components/Rewards/HumanFacedFishPlushy'
import JobRewardSet from '@/components/Rewards/JobRewardSet'
import NameALocation from '@/components/Rewards/NameALocation'
import NameARivalBeigomaTrainer from '@/components/Rewards/NameARivalBeigomaTrainer'
import NameARivalEggleg from '@/components/Rewards/NameARivalEggleg'
import NameAnInGameFood from '@/components/Rewards/NameAnInGameFood'
import NameInArtbook from '@/components/Rewards/NameInArtbook'
import OstCd from '@/components/Rewards/OstCd'
import PetInTheGame from '@/components/Rewards/PetInTheGame'
import PhysicalGame from '@/components/Rewards/PhysicalGame'
import ReplicaShield from '@/components/Rewards/ReplicaShield'
import SigilButton from '@/components/Rewards/SigilButton'
import SoftcoverArtbook from '@/components/Rewards/SoftcoverArtbook'
import TShirt from '@/components/Rewards/TShirt'
import TeamSignedPoster from '@/components/Rewards/TeamSignedPoster'
import VinylRecord from '@/components/Rewards/VinylRecord'
import VisitTheTeam from '@/components/Rewards/VisitTheTeam'
import YourNameAsASoldier from '@/components/Rewards/YourNameAsASoldier'
import YourNameInTheStaffRoll from '@/components/Rewards/YourNameInTheStaffRoll'
import Title from '@/components/RewardsGyakuhiki/Title'
import Bottom from '@/components/WhatIsAddOn/Bottom'

export default {
  name: 'WhatIsAddOn',
  components: {
    Header,
    Title,
    Bottom,
    YourNameInTheStaffRoll,
    DiscordRole,
    DigitalGame,
    BetaAccess,
    PhysicalGame,
    SigilButton,
    OstCd,
    TShirt,
    VinylRecord,
    SoftcoverArtbook,
    JobRewardSet,
    NameInArtbook,
    TeamSignedPoster,
    YourNameAsASoldier,
    CatInTheGame,
    PetInTheGame,
    NameALocation,
    CreateAnEnemy,
    BecomeAnNpc,
    ReplicaShield,
    VisitTheTeam,
    CharacterFigure,
    DigitalCd,
    DigitalArtbook,
    BecomeAHumanFacedFish,
    BecomeAStatue,
    CreateATownObject,
    NameAnInGameFood,
    NameARivalBeigomaTrainer,
    NameARivalEggleg,
    DigYourOwnGrave,
    ABrushWithInfamy,
    HumanFacedFishPlushy,
    NavBar,
    RewardsCategory,
    Addons,
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
