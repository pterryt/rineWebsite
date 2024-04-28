// backend/models/items.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  itemType: {
    type: DataTypes.ENUM('Armor', 'EtcItem', 'Weapon'),
    allowNull: false
  },
  armor_type: {
    type: DataTypes.ENUM('light', 'heavy', 'magic', 'sigil'),
    allowNull: true
  },
  attack_range: DataTypes.INTEGER,
  bodypart: {
    type: DataTypes.ENUM('rhand', 'lrhand', 'lhand', 'chest', 'legs', 'feet', 'head', 'gloves', 'onepiece', 'rear', 'lear', 'rfinger', 'lfinger', 'neck', 'back', 'underwear', 'hair', 'alldress', 'hair2', 'hairall', 'rbracelet', 'lbracelet', 'deco1', 'waist'),
    allowNull: true
  },
  crystal_count: DataTypes.INTEGER,
  crystal_type: {
    type: DataTypes.ENUM('A', 'B', 'S84', 'C', 'D', 'S', 'S80'),
    allowNull: true
  },
  enchant4_skill: DataTypes.STRING(20),
  equip_reuse_delay: {
    type: DataTypes.ENUM('0', '10', '30', '80'),
    allowNull: true
  },
  etcitem_type: {
    type: DataTypes.ENUM('ARROW', 'POTION', 'SCRL_ENCHANT_WP', 'SCRL_ENCHANT_AM', 'SCROLL', 'RECIPE', 'MATERIAL', 'PET_COLLAR', 'CASTLE_GUARD', 'LOTTO', 'RACE_TICKET', 'DYE', 'SEED', 'CROP', 'MATURECROP', 'HARVEST', 'SEED2', 'TICKET_OF_LORD', 'LURE', 'BLESS_SCRL_ENCHANT_WP', 'BLESS_SCRL_ENCHANT_AM', 'COUPON', 'ELIXIR', 'SCRL_ENCHANT_ATTR', 'BOLT', 'SCRL_INC_ENCHANT_PROP_WP', 'SCRL_INC_ENCHANT_PROP_AM', 'ANCIENT_CRYSTAL_ENCHANT_WP', 'ANCIENT_CRYSTAL_ENCHANT_AM', 'RUNE_SELECT', 'RUNE'),
    allowNull: true
  },
  icon: DataTypes.STRING(100),
  is_droppable: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_freightable: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_magic_weapon: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_oly_restricted: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_questitem: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_sellable: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_stackable: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_tradable: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  is_premium: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  item_skill: DataTypes.STRING(255),
  material: {
    type: DataTypes.ENUM('STEEL', 'FINE_STEEL', 'WOOD', 'BONE', 'BRONZE', 'LEATHER', 'CLOTH', 'FISH', 'GOLD', 'MITHRIL', 'LIQUID', 'ORIHARUKON', 'DAMASCUS', 'ADAMANTAITE', 'BLOOD_STEEL', 'PAPER', 'SILVER', 'CHRYSOLITE', 'CRYSTAL', 'HORN', 'SCALE_OF_DRAGON', 'COTTON', 'DYESTUFF', 'COBWEB', 'RUNE_XP', 'RUNE_SP', 'RUNE_REMOVE_PENALTY'),
    allowNull: true
  },
  mp_consume: DataTypes.INTEGER,
  oncrit_chance: DataTypes.INTEGER,
  oncrit_skill: DataTypes.STRING(50),
  onmagic_chance: DataTypes.INTEGER,
  onmagic_skill: DataTypes.STRING(50),
  price: DataTypes.INTEGER,
  random_damage: DataTypes.INTEGER,
  recipe_id: DataTypes.INTEGER,
  reduced_mp_consume: DataTypes.STRING(10),
  reduced_soulshot: DataTypes.STRING(10),
  reuse_delay: DataTypes.INTEGER,
  shared_reuse_group: DataTypes.INTEGER,
  soulshots: DataTypes.INTEGER,
  spiritshots: DataTypes.INTEGER,
  time: DataTypes.INTEGER,
  unequip_skill: DataTypes.STRING(20),
  useSkillDisTime: DataTypes.INTEGER,
  weapon_type: {
    type: DataTypes.ENUM('SWORD', 'BLUNT', 'DAGGER', 'BOW', 'POLE', 'DUAL', 'ETC', 'FIST', 'DUALFIST', 'FISHINGROD', 'RAPIER', 'ANCIENTSWORD', 'CROSSBOW', 'FLAG', 'OWNTHING', 'DUALDAGGER'),
    allowNull: true
  },
  weight: DataTypes.INTEGER,
  mAtk: DataTypes.INTEGER,
  mDef: DataTypes.INTEGER,
  pAtk: DataTypes.INTEGER,
  pDef: DataTypes.INTEGER,
  sDef: DataTypes.INTEGER,
  pAtkAngle: DataTypes.INTEGER,
  pAtkRange: DataTypes.INTEGER,
  pAtkSpd: DataTypes.INTEGER,
  critRate: DataTypes.INTEGER,
  rShld: DataTypes.INTEGER,
  rEvas: DataTypes.INTEGER,
  accCombat: DataTypes.INTEGER,
  darkRes: DataTypes.INTEGER,
  earthRes: DataTypes.INTEGER,
  fireRes: DataTypes.INTEGER,
  holyPower: DataTypes.INTEGER,
  holyRes: DataTypes.INTEGER,
  maxMp: DataTypes.INTEGER,
  waterRes: DataTypes.INTEGER,
  windRes: DataTypes.INTEGER,
  magicSuccRes: DataTypes.INTEGER,
  for_npc: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: true
  },
  playerType: DataTypes.STRING(55),
  name: DataTypes.STRING(255)
},
{
  tableName: 'items',
  timestamps: false
}
);

Item.associate = function(models) {
  Item.hasOne(models.ItemDescription, {
    foreignKey: 'id',
    as: 'itemDescription'
  });
};

module.exports = Item;
