// Helmets
IDRegistry.genItemID("helmetMilitary");
Item.createArmorItem("helmetMilitary", "Military Helmet", {name: "helmet_military"}, {type: "helmet", armor: 5, durability: 149, texture: "armor/helmet_military.png"});

IDRegistry.genItemID("helmetAltyn");
Item.createArmorItem("helmetAltyn", "Altyn Helmet", {name: "helmet_altyn"}, {type: "helmet", armor: 7, durability: 149, texture: "armor/helmet_altyn.png"});

IDRegistry.genItemID("helmetOpsCore");
Item.createArmorItem("helmetOpsCore", "OPS CORE Helmet", {name: "helmet_ops_core"}, {type: "helmet", armor: 7, durability: 149, texture: "armor/helmet_ops_core.png"});

IDRegistry.genItemID("helmetShch1");
Item.createArmorItem("helmetShch1", "Shch 1", {name: "helmet_shch_1"}, {type: "helmet", armor: 7, durability: 149, texture: "armor/helmet_shch_1.png"});


// Body Armor
IDRegistry.genItemID("chestplateBKZ6");
Item.createArmorItem("chestplateBKZ6", "BKZ-6 Body Armor", {name: "chestplate_bkz_6"}, {type: "chestplate", armor: 15, durability: 149, texture: "armor/chestplate_bkz_6.png"});

IDRegistry.genItemID("chestplateIOTVgen3");
Item.createArmorItem("chestplateIOTVgen3", "IOTV gen3 Body Armor", {name: "chestplate_iotv_gen3"}, {type: "chestplate", armor: 15, durability: 149, texture: "armor/chestplate_iotv_gen3.png"});

IDRegistry.genItemID("chestplate6B43");
Item.createArmorItem("chestplate6B43", "6B43 Body Armor", {name: "chestplate_6b34"}, {type: "chestplate", armor: 15, durability: 149, texture: "armor/chestplate_6b34.png"});

IDRegistry.genItemID("chestplateSplinterVest");
Item.createArmorItem("chestplateSplinterVest", "Splinter vest", {name: "chestplate_splinter_vest"}, {type: "chestplate", armor: 15, durability: 149, texture: "armor/chestplate_splinter_vest.png"});


// Leggings
IDRegistry.genItemID("leggingsPantsArmy");
Item.createArmorItem("leggingsPantsArmy", "Army Pants", {name: "pants_army"}, {type: "leggings", armor: 15, durability: 149, texture: "armor/pants_army.png"});


// Boots
IDRegistry.genItemID("bootsArmy");
Item.createArmorItem("bootsArmy", "Army Boots", {name: "boots_army"}, {type: "boots", armor: 15, durability: 149, texture: "armor/boots_army.png"});


// Exoskeleton
IDRegistry.genItemID("helmetExo");
IDRegistry.genItemID("chestplateExo");
IDRegistry.genItemID("leggingsExo");
IDRegistry.genItemID("bootsExo");

Item.createArmorItem("helmetExo", "Exo Helmet", {name: "helmet_exo"}, {type: "helmet", armor: 100, durability: 1000, texture: "armor/exo_1.png"});
Item.createArmorItem("chestplateExo", "Exo Chestplate", {name: "chestplate_exo"}, {type: "chestplate", armor: 100, durability: 1000, texture: "armor/exo_1.png"});
Item.createArmorItem("leggingsExo", "Exo Leggings", {name: "leggings_exo"}, {type: "leggings", armor: 100, durability: 1000, texture: "armor/exo_2.png"});
Item.createArmorItem("bootsExo", "Exo Boots", {name: "boots_exo"}, {type: "boots", armor: 100, durability: 1000, texture: "armor/exo_1.png"});

var armorExo = [ItemID.helmetExo, ItemID.chestplateExo, ItemID.leggingsExo, ItemID.bootsExo];


// Can armor
IDRegistry.genItemID("helmetCan");
IDRegistry.genItemID("chestplateCan");
IDRegistry.genItemID("leggingsCan");
IDRegistry.genItemID("bootsCan");

Item.createArmorItem("helmetCan", "Can Helmet", {name: "helmet_can"}, {type: "helmet", armor: 2, durability: 160, texture: "armor/can_1.png"});
Item.createArmorItem("chestplateCan", "Can Chestplate", {name: "chestplate_can"}, {type: "chestplate", armor: 5, durability: 235, texture: "armor/can_1.png"});
Item.createArmorItem("leggingsCan", "Can Leggings", {name: "leggings_can"}, {type: "leggings", armor: 4, durability: 220, texture: "armor/can_2.png"});
Item.createArmorItem("bootsCan", "Can Boots", {name: "boots_can"}, {type: "boots", armor: 2, durability: 190, texture: "armor/can_1.png"});

RecipiesManager.addShaped({id: ItemID.helmetCan, count: 1, data: 0}, [
     "aaa",
     "a a",
     "   "
], ['a', ItemID.can, 0]);

RecipiesManager.addShaped({id: ItemID.chestplateCan, count: 1, data: 0}, [
     "a a",
     "aaa",
     "aaa"
], ['a', ItemID.can, 0]);

RecipiesManager.addShaped({id: ItemID.leggingsCan, count: 1, data: 0}, [
     "a a",
     "a a",
     "a a"
], ['a', ItemID.can, 0]);

RecipiesManager.addShaped({id: ItemID.bootsCan, count: 1, data: 0}, [
     "   ",
     "a a",
     "a a"
], ['a', ItemID.can, 0]);


// Cardboard Box
IDRegistry.genItemID("chestplateCardboard");
Item.createArmorItem("chestplateCardboard", "Cardboard Box", {name: "chestplate_cardboard"}, {type: "chestplate", armor: 1, durability: 15, texture: "armor/chestplate_cardboard.png"});
