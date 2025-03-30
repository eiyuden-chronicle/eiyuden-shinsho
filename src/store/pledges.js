function isTrueOrFalseByRadioButton(value) {
  // Because the return value is via selectbox, value type isn't boolean
  if (value === 'true') return true

  return false
}

function isValidByRadioButton(value, targetRewardisContainedInThePledge) {
  if (targetRewardisContainedInThePledge === true) {
    return value === 'whichever' || isTrueOrFalseByRadioButton(value)
  } else if (targetRewardisContainedInThePledge === false) {
    return value === 'whichever' || !isTrueOrFalseByRadioButton(value)
  }

  return false
}

export default {
  strict: true,
  namespaced: true,
  state: {
    matchedPledges: {},
  },
  getters: {
    isDigitalVersion(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isPhysicalVersion(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // digitalGame is 2-set
    isDoubleDigitalPack(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // physicalGame is 2-set
    isDoublePhysicalPack(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isDigitalAndPhysical(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isBadgeOfHonor(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isMarkOfTheBard(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheVermillion(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheHarmonious(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isOrderOfTheArchivists(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isTrinityOfOrders(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // Squire Category
    isVermillionSquire(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isHarmoniousSquire(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isArchivistSquire(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isTrinitySquire(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // Knight Category
    // jobRewardSet is 2-set
    isVermillionKnight(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isHarmoniousKnight(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isArchivistKnight(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 2-set
    isTrinityKnight(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // Noble Category
    // jobRewardSet is 3-set
    isVermillionNoble(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isHarmoniousNoble(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isArchivistNoble(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is 3-set
    isTrinityNoble(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isNameOfTheSteadfast(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, true) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isIndelibleHand(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, true) &&
        isValidByRadioButton(rewards.teamSignedPoster, true) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isEnduringRequiem(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, true) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isCatTribution(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, true) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isPixelPet(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, true) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isFellowWorldbuilder(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, true) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isEvilsAnvil(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, true) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isAlterEgo(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, true) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is all-set
    isGuildmaster(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // jobRewardSet is all-set
    isReveredGuildmaster(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, true) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isAllraansPantheron(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, true) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isMonument(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 2-set
    isSilverMonument(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 3-set
    isGoldenMonument(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isPieceOfHistory(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 2-set
    isSilverPieceOfHistory(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    // characterFigure is 3-set
    isGoldenPieceOfHistory(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, true) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isDigitalCopyAndDigitalCd(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, true) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isDigitalCopyAndDigitalArtbook(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, true) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isDigitalDeluxe(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, true) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, false) &&
        isValidByRadioButton(rewards.sigilButton, false) &&
        isValidByRadioButton(rewards.ostCd, false) &&
        isValidByRadioButton(rewards.tShirt, false) &&
        isValidByRadioButton(rewards.vinylRecord, false) &&
        isValidByRadioButton(rewards.softcoverArtbook, false) &&
        isValidByRadioButton(rewards.jobRewardSet, false) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, true) &&
        isValidByRadioButton(rewards.digitalArtbook, true) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isFoodForThought(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, true) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isTopTrainer(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, true) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isEsteemedDecorator(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, true) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isHatchItJob(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, true) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isDigYourOwnGrave(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, true) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isABrushWithInfamy(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, false) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, true) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, false)
      ) {
        return true
      }
      return false
    },
    isFishmentStory(_state, _getter, rootState) {
      const rewards = rootState.rewards

      if (
        isValidByRadioButton(rewards.yourNameInTheStaffRoll, true) &&
        isValidByRadioButton(rewards.discordRole, true) &&
        isValidByRadioButton(rewards.digitalGame, false) &&
        isValidByRadioButton(rewards.betaAccess, true) &&
        isValidByRadioButton(rewards.physicalGame, true) &&
        isValidByRadioButton(rewards.sigilButton, true) &&
        isValidByRadioButton(rewards.ostCd, true) &&
        isValidByRadioButton(rewards.tShirt, true) &&
        isValidByRadioButton(rewards.vinylRecord, true) &&
        isValidByRadioButton(rewards.softcoverArtbook, true) &&
        isValidByRadioButton(rewards.jobRewardSet, true) &&
        isValidByRadioButton(rewards.nameInArtbook, false) &&
        isValidByRadioButton(rewards.teamSignedPoster, false) &&
        isValidByRadioButton(rewards.yourNameAsASoldier, false) &&
        isValidByRadioButton(rewards.catInTheGame, false) &&
        isValidByRadioButton(rewards.petInTheGame, false) &&
        isValidByRadioButton(rewards.nameALocation, false) &&
        isValidByRadioButton(rewards.createAnEnemy, false) &&
        isValidByRadioButton(rewards.becomeAnNpc, false) &&
        isValidByRadioButton(rewards.replicaShield, false) &&
        isValidByRadioButton(rewards.visitTheTeam, false) &&
        isValidByRadioButton(rewards.characterFigure, false) &&
        isValidByRadioButton(rewards.digitalCd, false) &&
        isValidByRadioButton(rewards.digitalArtbook, false) &&
        isValidByRadioButton(rewards.becomeAHumanFacedFish, true) &&
        isValidByRadioButton(rewards.becomeAStatue, false) &&
        isValidByRadioButton(rewards.createATownObject, false) &&
        isValidByRadioButton(rewards.nameAnInGameFood, false) &&
        isValidByRadioButton(rewards.nameARivalBeigomaTrainer, false) &&
        isValidByRadioButton(rewards.nameARivalEggleg, false) &&
        isValidByRadioButton(rewards.digYourOwnGrave, false) &&
        isValidByRadioButton(rewards.aBrushWithInfamy, false) &&
        isValidByRadioButton(rewards.humanFacedFishPlushy, true)
      ) {
        return true
      }
      return false
    },
  },
  mutations: {},
}
