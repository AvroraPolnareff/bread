export interface Weapon {
  icon: string
  riven_type: string
  url_name: string
  item_name: string
  id: string
  icon_format: string
  thumb: string
  group: string
}

export interface WeaponAttribute {
  exclusive_to: string[] | null
  url_name: string
  id: string
  positive_is_negative: boolean
  prefix: string
  effect: string
  suffix: string
  group: string
}

export const weaponAttributes: WeaponAttribute[] = [
  {
    "exclusive_to": null,
    "url_name": "damage_vs_grineer",
    "id": "5c5ca81a96e8d2003834fe65",
    "positive_is_negative": false,
    "prefix": "Argi",
    "effect": "Damage vs. Grineer",
    "suffix": "Con",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "multishot",
    "id": "5c5ca81a96e8d2003834fe76",
    "positive_is_negative": false,
    "prefix": "Sati",
    "effect": "Multishot",
    "suffix": "Can",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "punch_through",
    "id": "5c5ca81a96e8d2003834fe78",
    "positive_is_negative": false,
    "prefix": "Lexi",
    "effect": "Punch Through",
    "suffix": "Nok",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "puncture_damage",
    "id": "5c5ca81a96e8d2003834fe79",
    "positive_is_negative": false,
    "prefix": "Insi",
    "effect": "Puncture Damage",
    "suffix": "Cak",
    "group": "default"
  },
  {
    "exclusive_to": [
      "shotgun",
      "rifle",
      "pistol",
      "kitgun"
    ],
    "url_name": "reload_speed",
    "id": "5c5ca81a96e8d2003834fe7a",
    "positive_is_negative": false,
    "prefix": "Feva",
    "effect": "Reload Speed",
    "suffix": "Tak",
    "group": "default"
  },
  {
    "exclusive_to": [
      "melee",
      "zaw"
    ],
    "url_name": "range",
    "id": "5c5ca81a96e8d2003834fe7b",
    "positive_is_negative": false,
    "prefix": "Locti",
    "effect": "Range",
    "suffix": "Tor",
    "group": "melee"
  },
  {
    "exclusive_to": null,
    "url_name": "slash_damage",
    "id": "5c5ca81a96e8d2003834fe7c",
    "positive_is_negative": false,
    "prefix": "Sci",
    "effect": "Slash Damage",
    "suffix": "Sus",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "damage_vs_corpus",
    "id": "5c5ca81a96e8d2003834fe64",
    "positive_is_negative": false,
    "prefix": "Manti",
    "effect": "Damage vs. Corpus",
    "suffix": "Tron",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "damage_vs_infested",
    "id": "5c5ca81a96e8d2003834fe66",
    "positive_is_negative": false,
    "prefix": "Pura",
    "effect": "Damage vs. Infested",
    "suffix": "Ada",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "electric_damage",
    "id": "5c5ca81a96e8d2003834fe6f",
    "positive_is_negative": false,
    "prefix": "Vexi",
    "effect": "Electric Damage",
    "suffix": "Tio",
    "group": "default"
  },
  {
    "exclusive_to": [
      "melee",
      "zaw"
    ],
    "url_name": "finisher_damage",
    "id": "5c5ca81a96e8d2003834fe71",
    "positive_is_negative": false,
    "prefix": "Exi",
    "effect": "Finisher Damage",
    "suffix": "Cta",
    "group": "melee"
  },
  {
    "exclusive_to": null,
    "url_name": "fire_rate_/_attack_speed",
    "id": "5c5ca81a96e8d2003834fe72",
    "positive_is_negative": false,
    "prefix": "Croni",
    "effect": "Fire Rate / Attack Speed",
    "suffix": "Dra",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "impact_damage",
    "id": "5c5ca81a96e8d2003834fe74",
    "positive_is_negative": false,
    "prefix": "Magna",
    "effect": "Impact Damage",
    "suffix": "Ton",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "toxin_damage",
    "id": "5c5ca81a96e8d2003834fe77",
    "positive_is_negative": false,
    "prefix": "Toxi",
    "effect": "Toxin Damage",
    "suffix": "Tox",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "status_duration",
    "id": "5c5ca81a96e8d2003834fe7e",
    "positive_is_negative": false,
    "prefix": "Deci",
    "effect": "Status Duration",
    "suffix": "Des",
    "group": "default"
  },
  {
    "exclusive_to": [
      "shotgun",
      "rifle",
      "pistol",
      "kitgun"
    ],
    "url_name": "ammo_maximum",
    "id": "5c5ca81a96e8d2003834fe63",
    "positive_is_negative": false,
    "prefix": "Ampi",
    "effect": "Ammo Maximum",
    "suffix": "Bin",
    "group": "default"
  },
  {
    "exclusive_to": [
      "shotgun",
      "rifle",
      "pistol",
      "kitgun"
    ],
    "url_name": "recoil",
    "id": "5c5ca81a96e8d2003834fe7f",
    "positive_is_negative": true,
    "prefix": "Zeti",
    "effect": "Recoil",
    "suffix": "Mag",
    "group": "default"
  },
  {
    "exclusive_to": [
      "shotgun",
      "rifle",
      "pistol",
      "kitgun"
    ],
    "url_name": "zoom",
    "id": "5c5ca81a96e8d2003834fe80",
    "positive_is_negative": false,
    "prefix": "Hera",
    "effect": "Zoom",
    "suffix": "Lis",
    "group": "default"
  },
  {
    "exclusive_to": [
      "melee",
      "zaw"
    ],
    "url_name": "channeling_damage",
    "id": "5c5ca81a96e8d2003834fe68",
    "positive_is_negative": false,
    "prefix": "Para",
    "effect": "Initial combo",
    "suffix": "Um",
    "group": "melee"
  },
  {
    "exclusive_to": [
      "melee",
      "zaw"
    ],
    "url_name": "channeling_efficiency",
    "id": "5c5ca81a96e8d2003834fe69",
    "positive_is_negative": false,
    "prefix": "Forti",
    "effect": "Melee combo efficiency",
    "suffix": "Us",
    "group": "melee"
  },
  {
    "exclusive_to": null,
    "url_name": "critical_chance",
    "id": "5c5ca81a96e8d2003834fe6b",
    "positive_is_negative": false,
    "prefix": "Crita",
    "effect": "Critical Chance",
    "suffix": "Cron",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "critical_damage",
    "id": "5c5ca81a96e8d2003834fe6d",
    "positive_is_negative": false,
    "prefix": "Acri",
    "effect": "Critical Damage",
    "suffix": "Tis",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "base_damage_/_melee_damage",
    "id": "5c5ca81a96e8d2003834fe6e",
    "positive_is_negative": false,
    "prefix": "Visi",
    "effect": "Base Damage / Melee Damage",
    "suffix": "Ata",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "heat_damage",
    "id": "5c5ca81a96e8d2003834fe70",
    "positive_is_negative": false,
    "prefix": "Igni",
    "effect": "Heat Damage",
    "suffix": "Pha",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "projectile_speed",
    "id": "5c5ca81a96e8d2003834fe73",
    "positive_is_negative": false,
    "prefix": "Conci",
    "effect": "Projectile speed",
    "suffix": "Nak",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "magazine_capacity",
    "id": "5c5ca81a96e8d2003834fe75",
    "positive_is_negative": false,
    "prefix": "Arma",
    "effect": "Magazine Capacity",
    "suffix": "Tin",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "status_chance",
    "id": "5c5ca81a96e8d2003834fe7d",
    "positive_is_negative": false,
    "prefix": "Hexa",
    "effect": "Status Chance",
    "suffix": "Dex",
    "group": "default"
  },
  {
    "exclusive_to": null,
    "url_name": "cold_damage",
    "id": "5c5ca81a96e8d2003834fe67",
    "positive_is_negative": false,
    "prefix": "Geli",
    "effect": "Cold Damage",
    "suffix": "Do",
    "group": "default"
  },
  {
    "exclusive_to": [
      "melee",
      "zaw"
    ],
    "url_name": "combo_duration",
    "id": "5c5ca81a96e8d2003834fe6a",
    "positive_is_negative": false,
    "prefix": "Tempi",
    "effect": "Combo Duration",
    "suffix": "Nem",
    "group": "melee"
  },
  {
    "exclusive_to": [
      "melee",
      "zaw"
    ],
    "url_name": "critical_chance_on_slide_attack",
    "id": "5c5ca81a96e8d2003834fe6c",
    "positive_is_negative": false,
    "prefix": "Pleci",
    "effect": "Critical Chance on Slide Attack",
    "suffix": "Nent",
    "group": "melee"
  },
  {
    "exclusive_to": null,
    "url_name": "none",
    "id": "5c9b5aa521e5dd37ff842013",
    "positive_is_negative": false,
    "prefix": "Noni",
    "effect": "None",
    "suffix": "Non",
    "group": "top"
  },
  {
    "exclusive_to": [
      "melee",
      "zaw"
    ],
    "url_name": "chance_to_gain_extra_combo_count",
    "id": "5dd001d3ff08fd0214d29be2",
    "positive_is_negative": false,
    "prefix": "Laci",
    "effect": "Chance to gain extra Combo Count",
    "suffix": "Nus",
    "group": "melee"
  }
]

export const weapons : Weapon[] = [
  {
    "icon": "icons/en/argonak.39fc2b8728117c8c7cc81370cd216ba2.png",
    "riven_type": "rifle",
    "url_name": "argonak",
    "item_name": "Argonak",
    "id": "5c5ca81696e8d2003834fd62",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/argonak.39fc2b8728117c8c7cc81370cd216ba2.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/ballistica.178b8ec4820bbc01daa7ed321ef0890f.png",
    "riven_type": "pistol",
    "url_name": "ballistica",
    "item_name": "Ballistica",
    "id": "5c5ca81696e8d2003834fdb7",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/ballistica.178b8ec4820bbc01daa7ed321ef0890f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/castanas.5cc83e4f12ce19559e2bfe6e0f0f1935.png",
    "riven_type": "pistol",
    "url_name": "castanas",
    "item_name": "Castanas",
    "id": "5c5ca81696e8d2003834fdbb",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/castanas.5cc83e4f12ce19559e2bfe6e0f0f1935.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/cestra.d37e157c149f8aa72194797d5175677d.png",
    "riven_type": "pistol",
    "url_name": "cestra",
    "item_name": "Cestra",
    "id": "5c5ca81696e8d2003834fdbc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cestra.d37e157c149f8aa72194797d5175677d.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/dual_toxocyst.c983c3cbfd781dec1226c09e5157ef13.png",
    "riven_type": "pistol",
    "url_name": "dual_toxocyst",
    "item_name": "Dual Toxocyst",
    "id": "5c5ca81696e8d2003834fdc1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_toxocyst.c983c3cbfd781dec1226c09e5157ef13.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/hikou.193c15fbaf82f2391dc78cc7d64cf16f.png",
    "riven_type": "pistol",
    "url_name": "hikou",
    "item_name": "Hikou",
    "id": "5c5ca81696e8d2003834fdc7",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/hikou.193c15fbaf82f2391dc78cc7d64cf16f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/hystrix.c4771631ef9eb250562012fbf407d439.png",
    "riven_type": "pistol",
    "url_name": "hystrix",
    "item_name": "Hystrix",
    "id": "5c5ca81696e8d2003834fdc8",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/hystrix.c4771631ef9eb250562012fbf407d439.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/knell.9a97c9771a12c761b115a2db54c82481.png",
    "riven_type": "pistol",
    "url_name": "knell",
    "item_name": "Knell",
    "id": "5c5ca81696e8d2003834fdc9",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/knell.9a97c9771a12c761b115a2db54c82481.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/kohmak.eb021126188f25d7e5d136e10a35f6b5.png",
    "riven_type": "shotgun",
    "url_name": "kohmak",
    "item_name": "Kohmak",
    "id": "5c5ca81696e8d2003834fdca",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kohmak.eb021126188f25d7e5d136e10a35f6b5.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/kraken.8a24a27094e9102e359200fdffe3fab7.png",
    "riven_type": "pistol",
    "url_name": "kraken",
    "item_name": "Kraken",
    "id": "5c5ca81696e8d2003834fdcb",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kraken.8a24a27094e9102e359200fdffe3fab7.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/kulstar.92736ca911a3b84f99bc9e50f24369f0.png",
    "riven_type": "pistol",
    "url_name": "kulstar",
    "item_name": "Kulstar",
    "id": "5c5ca81696e8d2003834fdcc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kulstar.92736ca911a3b84f99bc9e50f24369f0.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/kunai.4ebd6a5b7383356584c275fbdf34c9e3.png",
    "riven_type": "pistol",
    "url_name": "kunai",
    "item_name": "Kunai",
    "id": "5c5ca81696e8d2003834fdcd",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kunai.4ebd6a5b7383356584c275fbdf34c9e3.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/lex.7f92c6b8ee87ab528af27c1821fdbb9f.png",
    "riven_type": "pistol",
    "url_name": "lex",
    "item_name": "Lex",
    "id": "5c5ca81696e8d2003834fdcf",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/lex.7f92c6b8ee87ab528af27c1821fdbb9f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/marelok.71aee4b391af97aa2376fe28d24fdf26.png",
    "riven_type": "pistol",
    "url_name": "marelok",
    "item_name": "Marelok",
    "id": "5c5ca81696e8d2003834fdd1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/marelok.71aee4b391af97aa2376fe28d24fdf26.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/broken_scepter.9412cd26613aca64d75a63330b444d31.png",
    "riven_type": "melee",
    "url_name": "broken_scepter",
    "item_name": "Broken Scepter",
    "id": "5c5ca81696e8d2003834fdf2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/broken_scepter.9412cd26613aca64d75a63330b444d31.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_zoren.200bb76dd57b17d1c9da6c21645fd42c.png",
    "riven_type": "melee",
    "url_name": "dual_zoren",
    "item_name": "Dual Zoren",
    "id": "5c5ca81696e8d2003834fe0b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_zoren.200bb76dd57b17d1c9da6c21645fd42c.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ether_daggers.c431b1f0b63ade4bea3cd6ab5a27bd03.png",
    "riven_type": "melee",
    "url_name": "ether_daggers",
    "item_name": "Ether Daggers",
    "id": "5c5ca81696e8d2003834fe0d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ether_daggers.c431b1f0b63ade4bea3cd6ab5a27bd03.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ether_reaper.3eca2ba4f605744704c3c6b1b8a8cf8b.png",
    "riven_type": "melee",
    "url_name": "ether_reaper",
    "item_name": "Ether Reaper",
    "id": "5c5ca81696e8d2003834fe0e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ether_reaper.3eca2ba4f605744704c3c6b1b8a8cf8b.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ether_sword.d12cfe31514386723ebda1e804ca33c9.png",
    "riven_type": "melee",
    "url_name": "ether_sword",
    "item_name": "Ether Sword",
    "id": "5c5ca81696e8d2003834fe0f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ether_sword.d12cfe31514386723ebda1e804ca33c9.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/fang.e9cd7e9f9a5c2ffb3b2a84485d9a34af.png",
    "riven_type": "melee",
    "url_name": "fang",
    "item_name": "Fang",
    "id": "5c5ca81696e8d2003834fe10",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/fang.e9cd7e9f9a5c2ffb3b2a84485d9a34af.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/fragor.6b5c0c6d32b7f2d3a0576e7a0c28accb.png",
    "riven_type": "melee",
    "url_name": "fragor",
    "item_name": "Fragor",
    "id": "5c5ca81696e8d2003834fe11",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/fragor.6b5c0c6d32b7f2d3a0576e7a0c28accb.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/furax.3192073e79805e28de48aded8faf2f2c.png",
    "riven_type": "melee",
    "url_name": "furax",
    "item_name": "Furax",
    "id": "5c5ca81696e8d2003834fe12",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/furax.3192073e79805e28de48aded8faf2f2c.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/galatine.46969364e23ff22f2463e4479ef38b24.png",
    "riven_type": "melee",
    "url_name": "galatine",
    "item_name": "Galatine",
    "id": "5c5ca81696e8d2003834fe13",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/galatine.46969364e23ff22f2463e4479ef38b24.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/gazal_machete.a9fc381acf6ba7519b812cf9f4e8954b.png",
    "riven_type": "melee",
    "url_name": "gazal_machete",
    "item_name": "Gazal Machete",
    "id": "5c5ca81696e8d2003834fe14",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/gazal_machete.a9fc381acf6ba7519b812cf9f4e8954b.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/gram.ab64eb4736d2acb63202cb34a320183e.png",
    "riven_type": "melee",
    "url_name": "gram",
    "item_name": "Gram",
    "id": "5c5ca81696e8d2003834fe16",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/gram.ab64eb4736d2acb63202cb34a320183e.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/guandao.68b20f3b44eb7bf103ed74b7a6219966.png",
    "riven_type": "melee",
    "url_name": "guandao",
    "item_name": "Guandao",
    "id": "5c5ca81696e8d2003834fe17",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/guandao.68b20f3b44eb7bf103ed74b7a6219966.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/gunsen.381adede029c793f0dfd7c90963089a5.png",
    "riven_type": "melee",
    "url_name": "gunsen",
    "item_name": "Gunsen",
    "id": "5c5ca81696e8d2003834fe18",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/gunsen.381adede029c793f0dfd7c90963089a5.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/heat_dagger.1284a42f3ca7d49b6e1dc11a96559bc8.png",
    "riven_type": "melee",
    "url_name": "heat_dagger",
    "item_name": "Heat Dagger",
    "id": "5c5ca81696e8d2003834fe1b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/heat_dagger.1284a42f3ca7d49b6e1dc11a96559bc8.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/heliocor.49fc1b3f6c4e4a550a15ad7c96885195.png",
    "riven_type": "melee",
    "url_name": "heliocor",
    "item_name": "Heliocor",
    "id": "5c5ca81696e8d2003834fe1d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/heliocor.49fc1b3f6c4e4a550a15ad7c96885195.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/jat_kittag.37688018eac638eff7502f4389055926.png",
    "riven_type": "melee",
    "url_name": "jat_kittag",
    "item_name": "Jat Kittag",
    "id": "5c5ca81696e8d2003834fe1f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/jat_kittag.37688018eac638eff7502f4389055926.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/sonicor.c2e7aba399d4ba904c4a4f83a75e9bd7.png",
    "riven_type": "pistol",
    "url_name": "sonicor",
    "item_name": "Sonicor",
    "id": "5c5ca81696e8d2003834fdd8",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sonicor.c2e7aba399d4ba904c4a4f83a75e9bd7.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/dual_skana.26ab111b35fe5cf8c76f1c484fae1fa2.png",
    "riven_type": "melee",
    "url_name": "dual_skana",
    "item_name": "Dual Skana",
    "id": "5c5ca81696e8d2003834fe0a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_skana.26ab111b35fe5cf8c76f1c484fae1fa2.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/jaw_sword.949c3646fad591912dc12df78f946c3f.png",
    "riven_type": "melee",
    "url_name": "jaw_sword",
    "item_name": "Jaw Sword",
    "id": "5c5ca81696e8d2003834fe21",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/jaw_sword.949c3646fad591912dc12df78f946c3f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/karyst.6c88b8b1ffdd6dbd5e71d1443ddd8bb2.png",
    "riven_type": "melee",
    "url_name": "karyst",
    "item_name": "Karyst",
    "id": "5c5ca81696e8d2003834fe23",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/karyst.6c88b8b1ffdd6dbd5e71d1443ddd8bb2.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kesheg.fd223dc1c378610f8b550900bb2545c2.png",
    "riven_type": "melee",
    "url_name": "kesheg",
    "item_name": "Kesheg",
    "id": "5c5ca81696e8d2003834fe24",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kesheg.fd223dc1c378610f8b550900bb2545c2.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kestrel.6486807517934177d97c300326ff0c10.png",
    "riven_type": "melee",
    "url_name": "kestrel",
    "item_name": "Kestrel",
    "id": "5c5ca81696e8d2003834fe25",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kestrel.6486807517934177d97c300326ff0c10.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kronsh.affe607fb84379769f756a2409cbf0b6.png",
    "riven_type": "zaw",
    "url_name": "kronsh",
    "item_name": "Kronsh",
    "id": "5c5ca81696e8d2003834fe29",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kronsh.affe607fb84379769f756a2409cbf0b6.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/lecta.d6de28d017ed55fc6f5ee90db6e2c621.png",
    "riven_type": "melee",
    "url_name": "lecta",
    "item_name": "Lecta",
    "id": "5c5ca81696e8d2003834fe2b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/lecta.d6de28d017ed55fc6f5ee90db6e2c621.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/machete.b871c145d37c3fdde5715fe80524101f.png",
    "riven_type": "melee",
    "url_name": "machete",
    "item_name": "Machete",
    "id": "5c5ca81696e8d2003834fe2d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/machete.b871c145d37c3fdde5715fe80524101f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/magistar.3e7a9bed8a7c19ca24351b7a291ff6e7.png",
    "riven_type": "melee",
    "url_name": "magistar",
    "item_name": "Magistar",
    "id": "5c5ca81696e8d2003834fe2e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/magistar.3e7a9bed8a7c19ca24351b7a291ff6e7.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/mewan.96388512f768a99763561d0a410f62c5.png",
    "riven_type": "zaw",
    "url_name": "mewan",
    "item_name": "Mewan",
    "id": "5c5ca81696e8d2003834fe2f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/mewan.96388512f768a99763561d0a410f62c5.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/mios.da75e577f209d8954d9b44c80994f32e.png",
    "riven_type": "melee",
    "url_name": "mios",
    "item_name": "Mios",
    "id": "5c5ca81696e8d2003834fe30",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/mios.da75e577f209d8954d9b44c80994f32e.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/rabvee.a99b8ff88268ccd1a827bcacdd48fecf.png",
    "riven_type": "zaw",
    "url_name": "rabvee",
    "item_name": "Rabvee",
    "id": "5c5ca81696e8d2003834fe41",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/rabvee.a99b8ff88268ccd1a827bcacdd48fecf.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/war.7273eef3bc28b2a6455ab57cbfb46006.png",
    "riven_type": "melee",
    "url_name": "war",
    "item_name": "War",
    "id": "5c5ca81696e8d2003834fe59",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/war.7273eef3bc28b2a6455ab57cbfb46006.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/artax.8a047393bd65e561eab11d568aa46c13.png",
    "riven_type": "rifle",
    "url_name": "artax",
    "item_name": "Artax",
    "id": "5c5ca81696e8d2003834fe5b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/artax.8a047393bd65e561eab11d568aa46c13.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/burst_laser.a8d766d42aed74e71e246da778345604.png",
    "riven_type": "pistol",
    "url_name": "burst_laser",
    "item_name": "Burst Laser",
    "id": "5c5ca81696e8d2003834fe5c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/burst_laser.a8d766d42aed74e71e246da778345604.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/deth_machine_rifle.996e6635b08ca2b916b00c3004c904b4.png",
    "riven_type": "rifle",
    "url_name": "deth_machine_rifle",
    "item_name": "Deth Machine Rifle",
    "id": "5c5ca81696e8d2003834fe5e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/deth_machine_rifle.996e6635b08ca2b916b00c3004c904b4.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/laser_rifle.1be6c8b6ae0b5d7067871992fac7cfdd.png",
    "riven_type": "rifle",
    "url_name": "laser_rifle",
    "item_name": "Laser Rifle",
    "id": "5c5ca81696e8d2003834fe5f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/laser_rifle.1be6c8b6ae0b5d7067871992fac7cfdd.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/stinger.c06e66fa90e9b3ae8949992459763beb.png",
    "riven_type": "rifle",
    "url_name": "stinger",
    "item_name": "Stinger",
    "id": "5c5ca81696e8d2003834fe60",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/stinger.c06e66fa90e9b3ae8949992459763beb.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/vulklok.afb2dead96611511849d92327fc00996.png",
    "riven_type": "rifle",
    "url_name": "vulklok",
    "item_name": "Vulklok",
    "id": "5c5ca81696e8d2003834fe62",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/vulklok.afb2dead96611511849d92327fc00996.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/catchmoon.971ee1945ce27bc5bb644d1937581191.png",
    "riven_type": "kitgun",
    "url_name": "catchmoon",
    "item_name": "Catchmoon",
    "id": "5ced51decd3f0b0098a3862c",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/catchmoon.971ee1945ce27bc5bb644d1937581191.128x128.png",
    "group": "kitgun"
  },
  {
    "icon": "icons/en/tombfinger.41a16c13af6ffc11463bbbc1668a1d38.png",
    "riven_type": "kitgun",
    "url_name": "tombfinger",
    "item_name": "Tombfinger",
    "id": "5ced51e0cd3f0b0098a3862e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tombfinger.41a16c13af6ffc11463bbbc1668a1d38.128x128.png",
    "group": "kitgun"
  },
  {
    "icon": "icons/en/gaze.94b19cdca4569789b6c1d51a1da91cdc.png",
    "riven_type": "kitgun",
    "url_name": "gaze",
    "item_name": "Gaze",
    "id": "5ced51e2cd3f0b0098a3862f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/gaze.94b19cdca4569789b6c1d51a1da91cdc.128x128.png",
    "group": "kitgun"
  },
  {
    "icon": "icons/en/nagantaka.4ee86a7c5a800796a22e94e584577628.png",
    "riven_type": "rifle",
    "url_name": "nagantaka",
    "item_name": "Nagantaka",
    "id": "5cf5724d9597e1019b1678c5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/nagantaka.4ee86a7c5a800796a22e94e584577628.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/ocucor.c3f776ad9924de2782e8c0d36be4e5b4.png",
    "riven_type": "pistol",
    "url_name": "ocucor",
    "item_name": "Ocucor",
    "id": "5cf5724e9597e1019b1678c6",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ocucor.c3f776ad9924de2782e8c0d36be4e5b4.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/falcor.83897b2d4fbcbd312c70be4e25ea3b92.png",
    "riven_type": "melee",
    "url_name": "falcor",
    "item_name": "Falcor",
    "id": "5cf5724f9597e1019b1678c7",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/falcor.83897b2d4fbcbd312c70be4e25ea3b92.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/paracesis.bdc3b22813168a460ed1b82fc33c3139.png",
    "riven_type": "melee",
    "url_name": "paracesis",
    "item_name": "Paracesis",
    "id": "5cf572509597e1019b1678c8",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/paracesis.bdc3b22813168a460ed1b82fc33c3139.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/pupacyst.e81790fba493f2bfbe96184c7cc7064d.png",
    "riven_type": "melee",
    "url_name": "pupacyst",
    "item_name": "Pupacyst",
    "id": "5cf572509597e1019b1678c9",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/pupacyst.e81790fba493f2bfbe96184c7cc7064d.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/exergis.c9432d140c7138d21b9c275ba54eeecc.png",
    "riven_type": "shotgun",
    "url_name": "exergis",
    "item_name": "Exergis",
    "id": "5cf572529597e1019b1678ca",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/exergis.c9432d140c7138d21b9c275ba54eeecc.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/plinx.cf7698c478e44f83968e66f21a1558ae.png",
    "riven_type": "pistol",
    "url_name": "plinx",
    "item_name": "Plinx",
    "id": "5cf572529597e1019b1678cb",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/plinx.cf7698c478e44f83968e66f21a1558ae.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/korrudo.2f569c1c1ba03172278a5f3e88358aed.png",
    "riven_type": "melee",
    "url_name": "korrudo",
    "item_name": "Korrudo",
    "id": "5cf572529597e1019b1678cc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/korrudo.2f569c1c1ba03172278a5f3e88358aed.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/fulmin.f2e4fae730960f6c0617577ea0f496ad.png",
    "riven_type": "rifle",
    "url_name": "fulmin",
    "item_name": "Fulmin",
    "id": "5cf572539597e1019b1678cd",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/fulmin.f2e4fae730960f6c0617577ea0f496ad.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/cobra_and_crane.41a0914a2e6890b42e7ab2175a8d9c1c.png",
    "riven_type": "melee",
    "url_name": "cobra_and_crane",
    "item_name": "Cobra & Crane",
    "id": "5cf572549597e1019b1678ce",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cobra_and_crane.41a0914a2e6890b42e7ab2175a8d9c1c.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/battacor.141ff25ce24ea93a83a523dda7e94011.png",
    "riven_type": "rifle",
    "url_name": "battacor",
    "item_name": "Battacor",
    "id": "5cf572549597e1019b1678cf",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/battacor.141ff25ce24ea93a83a523dda7e94011.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/komorex.a6b6018eca915e11179a2bf29b55d3ea.png",
    "riven_type": "rifle",
    "url_name": "komorex",
    "item_name": "Komorex",
    "id": "5cf572549597e1019b1678d0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/komorex.a6b6018eca915e11179a2bf29b55d3ea.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/arca_plasmor.d992b822673f559b9b678ba1a7343002.png",
    "riven_type": "shotgun",
    "url_name": "arca_plasmor",
    "item_name": "Arca Plasmor",
    "id": "5c5ca81696e8d2003834fd61",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/arca_plasmor.d992b822673f559b9b678ba1a7343002.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/cyanex.286f84f86986ce93a3a47f5fee6ee18d.png",
    "riven_type": "pistol",
    "url_name": "cyanex",
    "item_name": "Cyanex",
    "id": "5cf572559597e1019b1678d2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cyanex.286f84f86986ce93a3a47f5fee6ee18d.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/galvacord.2140990c96c2fdd29ffeaec8279094f1.png",
    "riven_type": "melee",
    "url_name": "galvacord",
    "item_name": "Galvacord",
    "id": "5cf572579597e1019b1678d4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/galvacord.2140990c96c2fdd29ffeaec8279094f1.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/tatsu.7c620e4ccaf9d3c7ee56d8156c77d09f.png",
    "riven_type": "melee",
    "url_name": "tatsu",
    "item_name": "Tatsu",
    "id": "5cf572579597e1019b1678d5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tatsu.7c620e4ccaf9d3c7ee56d8156c77d09f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/cyngas.06e5a46f3d3b985ce51c8154c0325088.png",
    "riven_type": "rifle",
    "url_name": "cyngas",
    "item_name": "Cyngas",
    "id": "5cfe91738be64500e4430cdc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cyngas.06e5a46f3d3b985ce51c8154c0325088.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/larkspur.dd276ff94db2ebbc9cc778ee03db8d71.png",
    "riven_type": "rifle",
    "url_name": "larkspur",
    "item_name": "Larkspur",
    "id": "5cfe91748be64500e4430cdd",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/larkspur.dd276ff94db2ebbc9cc778ee03db8d71.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/imperator.ca5c50909c6e4d40fc93fa5e9a525897.png",
    "riven_type": "rifle",
    "url_name": "imperator",
    "item_name": "Imperator",
    "id": "5cfe91768be64500e4430cde",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/imperator.ca5c50909c6e4d40fc93fa5e9a525897.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/corvas.2eb50d3296c78f3875e5e95f45fac275.png",
    "riven_type": "rifle",
    "url_name": "corvas",
    "item_name": "Corvas",
    "id": "5cfe91788be64500e4430cdf",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/corvas.2eb50d3296c78f3875e5e95f45fac275.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/phaedra.990089ecdb2751f628e24bfe0493059e.png",
    "riven_type": "rifle",
    "url_name": "phaedra",
    "item_name": "Phaedra",
    "id": "5cfe91798be64500e4430ce1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/phaedra.990089ecdb2751f628e24bfe0493059e.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/grattler.1332aad0c83155f87a1caeac7bb93fc4.png",
    "riven_type": "rifle",
    "url_name": "grattler",
    "item_name": "Grattler",
    "id": "5cfe917a8be64500e4430ce2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/grattler.1332aad0c83155f87a1caeac7bb93fc4.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/dual_decurion.c38ff4f5a6e811f42c54fd0d15144942.png",
    "riven_type": "rifle",
    "url_name": "dual_decurion",
    "item_name": "Dual Decurion",
    "id": "5cfe917d8be64500e4430ce4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_decurion.c38ff4f5a6e811f42c54fd0d15144942.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/astilla.a172d60ec9a6cfe760c408f6a66fbbd4.png",
    "riven_type": "shotgun",
    "url_name": "astilla",
    "item_name": "Astilla",
    "id": "5c5ca81696e8d2003834fd63",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/astilla.a172d60ec9a6cfe760c408f6a66fbbd4.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/attica.d75ddb584fa9ea3cd44f20c09e121cda.png",
    "riven_type": "rifle",
    "url_name": "attica",
    "item_name": "Attica",
    "id": "5c5ca81696e8d2003834fd64",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/attica.d75ddb584fa9ea3cd44f20c09e121cda.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/baza.e6765564311125de7ff2d24fa1c5f6cc.png",
    "riven_type": "rifle",
    "url_name": "baza",
    "item_name": "Baza",
    "id": "5c5ca81696e8d2003834fd65",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/baza.e6765564311125de7ff2d24fa1c5f6cc.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/boar.9b6d1ef6c217e48180e3702ab0d4e6c8.png",
    "riven_type": "shotgun",
    "url_name": "boar",
    "item_name": "Boar",
    "id": "5c5ca81696e8d2003834fd66",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/boar.9b6d1ef6c217e48180e3702ab0d4e6c8.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/boltor.b00dd8933257acaab1936c88e345edfc.png",
    "riven_type": "rifle",
    "url_name": "boltor",
    "item_name": "Boltor",
    "id": "5c5ca81696e8d2003834fd67",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/boltor.b00dd8933257acaab1936c88e345edfc.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/braton.139748d7e02e1d7370a0641ec81f4e2a.png",
    "riven_type": "rifle",
    "url_name": "braton",
    "item_name": "Braton",
    "id": "5c5ca81696e8d2003834fd68",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/braton.139748d7e02e1d7370a0641ec81f4e2a.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/corinth.1c30d611482746b4c0a4ef2d83be750c.png",
    "riven_type": "shotgun",
    "url_name": "corinth",
    "item_name": "Corinth",
    "id": "5c5ca81696e8d2003834fd6d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/corinth.1c30d611482746b4c0a4ef2d83be750c.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/ferrox.5a29b2afc0382ce4f85d78dc9d086c2c.png",
    "riven_type": "rifle",
    "url_name": "ferrox",
    "item_name": "Ferrox",
    "id": "5c5ca81696e8d2003834fd72",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ferrox.5a29b2afc0382ce4f85d78dc9d086c2c.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/flux_rifle.715baa0ac2fcaa3d16a41c7622ad86ac.png",
    "riven_type": "rifle",
    "url_name": "flux_rifle",
    "item_name": "Flux Rifle",
    "id": "5c5ca81696e8d2003834fd73",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/flux_rifle.715baa0ac2fcaa3d16a41c7622ad86ac.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/hek.01deb97da07d4680bf7db7111d6fb533.png",
    "riven_type": "shotgun",
    "url_name": "hek",
    "item_name": "Hek",
    "id": "5c5ca81696e8d2003834fd79",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/hek.01deb97da07d4680bf7db7111d6fb533.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/ogris.9155e81ec783c0afd68646499883b17c.png",
    "riven_type": "rifle",
    "url_name": "ogris",
    "item_name": "Ogris",
    "id": "5c5ca81696e8d2003834fd86",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ogris.9155e81ec783c0afd68646499883b17c.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/paracyst.c81528e565a7651b7a7d809e9a8f2974.png",
    "riven_type": "rifle",
    "url_name": "paracyst",
    "item_name": "Paracyst",
    "id": "5c5ca81696e8d2003834fd89",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/paracyst.c81528e565a7651b7a7d809e9a8f2974.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/supra.f1e9cbaf71eff60771de3aa57a9596f4.png",
    "riven_type": "rifle",
    "url_name": "supra",
    "item_name": "Supra",
    "id": "5c5ca81696e8d2003834fd98",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/supra.f1e9cbaf71eff60771de3aa57a9596f4.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/tenora.19b00a342112d86c188adc35be697eda.png",
    "riven_type": "rifle",
    "url_name": "tenora",
    "item_name": "Tenora",
    "id": "5c5ca81696e8d2003834fd9b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tenora.19b00a342112d86c188adc35be697eda.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/tiberon.d3bd3db70fcc6bd97713419f1ac222e3.png",
    "riven_type": "rifle",
    "url_name": "tiberon",
    "item_name": "Tiberon",
    "id": "5c5ca81696e8d2003834fd9d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tiberon.d3bd3db70fcc6bd97713419f1ac222e3.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/aklex.800394d7e0f24986229130ea22dfa4e7.png",
    "riven_type": "pistol",
    "url_name": "aklex",
    "item_name": "Aklex",
    "id": "5c5ca81696e8d2003834fdad",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/aklex.800394d7e0f24986229130ea22dfa4e7.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/akmagnus.71b5c604b03e3afd601d3d1ec5d116a3.png",
    "riven_type": "pistol",
    "url_name": "akmagnus",
    "item_name": "Akmagnus",
    "id": "5c5ca81696e8d2003834fdae",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akmagnus.71b5c604b03e3afd601d3d1ec5d116a3.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/aksomati.7f420cc90ae6ef6d8130c9475dc50274.png",
    "riven_type": "pistol",
    "url_name": "aksomati",
    "item_name": "Aksomati",
    "id": "5c5ca81696e8d2003834fdaf",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/aksomati.7f420cc90ae6ef6d8130c9475dc50274.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/akstiletto.2532b4ad6207e99496ac4a84021a9ad3.png",
    "riven_type": "pistol",
    "url_name": "akstiletto",
    "item_name": "Akstiletto",
    "id": "5c5ca81696e8d2003834fdb0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akstiletto.2532b4ad6207e99496ac4a84021a9ad3.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/akvasto.efa0bb0ef386af5bbb36fedc9a9e77eb.png",
    "riven_type": "pistol",
    "url_name": "akvasto",
    "item_name": "Akvasto",
    "id": "5c5ca81696e8d2003834fdb1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akvasto.efa0bb0ef386af5bbb36fedc9a9e77eb.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/akzani.cdef36c1271e3298d65d24b43646f1cf.png",
    "riven_type": "pistol",
    "url_name": "akzani",
    "item_name": "Akzani",
    "id": "5c5ca81696e8d2003834fdb2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akzani.cdef36c1271e3298d65d24b43646f1cf.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/angstrum.8a8e60fea990e087f5075a5ad0027d1f.png",
    "riven_type": "pistol",
    "url_name": "angstrum",
    "item_name": "Angstrum",
    "id": "5c5ca81696e8d2003834fdb3",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/angstrum.8a8e60fea990e087f5075a5ad0027d1f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/atomos.2f3af350060d4b7ff4adae2b12f97b0a.png",
    "riven_type": "pistol",
    "url_name": "atomos",
    "item_name": "Atomos",
    "id": "5c5ca81696e8d2003834fdb5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/atomos.2f3af350060d4b7ff4adae2b12f97b0a.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/azima.8bb80c4b17a8fcbde5ef298c463d84e2.png",
    "riven_type": "pistol",
    "url_name": "azima",
    "item_name": "Azima",
    "id": "5c5ca81696e8d2003834fdb6",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/azima.8bb80c4b17a8fcbde5ef298c463d84e2.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/bolto.b5acc3cca68e54f8b45cb68288a63000.png",
    "riven_type": "pistol",
    "url_name": "bolto",
    "item_name": "Bolto",
    "id": "5c5ca81696e8d2003834fdb8",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/bolto.b5acc3cca68e54f8b45cb68288a63000.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/brakk.db24dd1bc4fe5bba11129bbbfc9de5b7.png",
    "riven_type": "shotgun",
    "url_name": "brakk",
    "item_name": "Brakk",
    "id": "5c5ca81696e8d2003834fdb9",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/brakk.db24dd1bc4fe5bba11129bbbfc9de5b7.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/bronco.c0b39eda7929fefbe5cf7e377c603c3f.png",
    "riven_type": "shotgun",
    "url_name": "bronco",
    "item_name": "Bronco",
    "id": "5c5ca81696e8d2003834fdba",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/bronco.c0b39eda7929fefbe5cf7e377c603c3f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/despair.dcdb6297c9579cb1457bd0b8d46dc52e.png",
    "riven_type": "pistol",
    "url_name": "despair",
    "item_name": "Despair",
    "id": "5c5ca81696e8d2003834fdbe",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/despair.dcdb6297c9579cb1457bd0b8d46dc52e.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/dual_cestra.c55565d7154d20796cbea06fc66a928f.png",
    "riven_type": "pistol",
    "url_name": "dual_cestra",
    "item_name": "Dual Cestra",
    "id": "5c5ca81696e8d2003834fdc0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_cestra.c55565d7154d20796cbea06fc66a928f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/euphona_prime.6a18cc50c57ac13c3203e872baf85a8d.png",
    "riven_type": "shotgun",
    "url_name": "euphona_prime",
    "item_name": "Euphona Prime",
    "id": "5c5ca81696e8d2003834fdc3",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/euphona_prime.6a18cc50c57ac13c3203e872baf85a8d.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/furis.f2d9baed7db3eb0b5c9659ecee5cebe2.png",
    "riven_type": "pistol",
    "url_name": "furis",
    "item_name": "Furis",
    "id": "5c5ca81696e8d2003834fdc4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/furis.f2d9baed7db3eb0b5c9659ecee5cebe2.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/fusilai.dfe658fc2b5297fc495fd28be23ffd70.png",
    "riven_type": "pistol",
    "url_name": "fusilai",
    "item_name": "Fusilai",
    "id": "5c5ca81696e8d2003834fdc5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/fusilai.dfe658fc2b5297fc495fd28be23ffd70.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/lato.75f74069daf8fed3d9397afe96a976a0.png",
    "riven_type": "pistol",
    "url_name": "lato",
    "item_name": "Lato",
    "id": "5c5ca81696e8d2003834fdce",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/lato.75f74069daf8fed3d9397afe96a976a0.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/magnus.25f6050dc34973f444d1c6ea54487d5e.png",
    "riven_type": "pistol",
    "url_name": "magnus",
    "item_name": "Magnus",
    "id": "5c5ca81696e8d2003834fdd0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/magnus.25f6050dc34973f444d1c6ea54487d5e.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/ack_and_brunt.f5852c315691d80106e0ba42fb82f668.png",
    "riven_type": "melee",
    "url_name": "ack_and_brunt",
    "item_name": "Ack & Brunt",
    "id": "5c5ca81696e8d2003834fde9",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ack_and_brunt.f5852c315691d80106e0ba42fb82f668.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/amphis.6ba40d253046114ead767591eb74d88b.png",
    "riven_type": "melee",
    "url_name": "amphis",
    "item_name": "Amphis",
    "id": "5c5ca81696e8d2003834fdea",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/amphis.6ba40d253046114ead767591eb74d88b.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/anku.a7e5df1e6b599334e2fe014f14062cf0.png",
    "riven_type": "melee",
    "url_name": "anku",
    "item_name": "Anku",
    "id": "5c5ca81696e8d2003834fdeb",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/anku.a7e5df1e6b599334e2fe014f14062cf0.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ankyros.56404bf846a2eeea24245932f1897a30.png",
    "riven_type": "melee",
    "url_name": "ankyros",
    "item_name": "Ankyros",
    "id": "5c5ca81696e8d2003834fdec",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ankyros.56404bf846a2eeea24245932f1897a30.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/arca_titron.bd711749b9917222c85fea4b60376d45.png",
    "riven_type": "melee",
    "url_name": "arca_titron",
    "item_name": "Arca Titron",
    "id": "5c5ca81696e8d2003834fded",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/arca_titron.bd711749b9917222c85fea4b60376d45.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/atterax.79855f62aaa825e425eed6f36b687aa5.png",
    "riven_type": "melee",
    "url_name": "atterax",
    "item_name": "Atterax",
    "id": "5c5ca81696e8d2003834fdee",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/atterax.79855f62aaa825e425eed6f36b687aa5.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/balla.9e49720865f76d3a6b591ad2712a3afb.png",
    "riven_type": "zaw",
    "url_name": "balla",
    "item_name": "Balla",
    "id": "5c5ca81696e8d2003834fdef",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/balla.9e49720865f76d3a6b591ad2712a3afb.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/bo.52ac556f0b623ced5cc7e489a7c6d060.png",
    "riven_type": "melee",
    "url_name": "bo",
    "item_name": "Bo",
    "id": "5c5ca81696e8d2003834fdf0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/bo.52ac556f0b623ced5cc7e489a7c6d060.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/boltace.79a692a1f7d1f9b1251de0719403ab1f.png",
    "riven_type": "melee",
    "url_name": "boltace",
    "item_name": "Boltace",
    "id": "5c5ca81696e8d2003834fdf1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/boltace.79a692a1f7d1f9b1251de0719403ab1f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/broken_war.79aea5cde8a32f0cdb77bc19b5d1e9a5.png",
    "riven_type": "melee",
    "url_name": "broken_war",
    "item_name": "Broken War",
    "id": "5c5ca81696e8d2003834fdf3",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/broken_war.79aea5cde8a32f0cdb77bc19b5d1e9a5.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/cassowar.978e20cb98bf63a3d059c5883a99c3e6.png",
    "riven_type": "melee",
    "url_name": "cassowar",
    "item_name": "Cassowar",
    "id": "5c5ca81696e8d2003834fdf4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cassowar.978e20cb98bf63a3d059c5883a99c3e6.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/caustacyst.1fb1dcd615381cbf7823f0471311c1fe.png",
    "riven_type": "melee",
    "url_name": "caustacyst",
    "item_name": "Caustacyst",
    "id": "5c5ca81696e8d2003834fdf5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/caustacyst.1fb1dcd615381cbf7823f0471311c1fe.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ceramic_dagger.f32d32062b09723f6481fa1d8e79f5c2.png",
    "riven_type": "melee",
    "url_name": "ceramic_dagger",
    "item_name": "Ceramic Dagger",
    "id": "5c5ca81696e8d2003834fdf6",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ceramic_dagger.f32d32062b09723f6481fa1d8e79f5c2.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/cerata.a844799b207aaddaa4d4542bbffaee71.png",
    "riven_type": "melee",
    "url_name": "cerata",
    "item_name": "Cerata",
    "id": "5c5ca81696e8d2003834fdf7",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cerata.a844799b207aaddaa4d4542bbffaee71.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/cronus.f32d32062b09723f6481fa1d8e79f5c2.png",
    "riven_type": "melee",
    "url_name": "cronus",
    "item_name": "Cronus",
    "id": "5c5ca81696e8d2003834fdf8",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cronus.f32d32062b09723f6481fa1d8e79f5c2.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_raza.36dfb4b0a9c567d3cb8505501381b62b.png",
    "riven_type": "melee",
    "url_name": "dual_raza",
    "item_name": "Dual Raza",
    "id": "5c5ca81696e8d2003834fe09",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_raza.36dfb4b0a9c567d3cb8505501381b62b.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/endura.7c0cbf05f44774e720900848d2333767.png",
    "riven_type": "melee",
    "url_name": "endura",
    "item_name": "Endura",
    "id": "5c5ca81696e8d2003834fe0c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/endura.7c0cbf05f44774e720900848d2333767.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/glaive.7b1c251b4f1fcc0afe64ce5233a39891.png",
    "riven_type": "melee",
    "url_name": "glaive",
    "item_name": "Glaive",
    "id": "5c5ca81696e8d2003834fe15",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/glaive.7b1c251b4f1fcc0afe64ce5233a39891.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/halikar.2836e85660670e0b7faf4ee5e31ed435.png",
    "riven_type": "melee",
    "url_name": "halikar",
    "item_name": "Halikar",
    "id": "5c5ca81696e8d2003834fe19",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/halikar.2836e85660670e0b7faf4ee5e31ed435.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/hate.1e4354f5dbd630a1809478ea19ca740d.png",
    "riven_type": "melee",
    "url_name": "hate",
    "item_name": "Hate",
    "id": "5c5ca81696e8d2003834fe1a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/hate.1e4354f5dbd630a1809478ea19ca740d.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/heat_sword.37ec8d825dc0fbc83d951149ff3ba8b6.png",
    "riven_type": "melee",
    "url_name": "heat_sword",
    "item_name": "Heat Sword",
    "id": "5c5ca81696e8d2003834fe1c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/heat_sword.37ec8d825dc0fbc83d951149ff3ba8b6.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/hirudo.a056a643f7582517371f13a8cf0243ed.png",
    "riven_type": "melee",
    "url_name": "hirudo",
    "item_name": "Hirudo",
    "id": "5c5ca81696e8d2003834fe1e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/hirudo.a056a643f7582517371f13a8cf0243ed.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/jat_kusar.1b8964cd6faa0ed9a27c39eb5e5d795f.png",
    "riven_type": "melee",
    "url_name": "jat_kusar",
    "item_name": "Jat Kusar",
    "id": "5c5ca81696e8d2003834fe20",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/jat_kusar.1b8964cd6faa0ed9a27c39eb5e5d795f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/mire.4bc449120b1046c370d6fbca3b3c5f2a.png",
    "riven_type": "melee",
    "url_name": "mire",
    "item_name": "Mire",
    "id": "5c5ca81696e8d2003834fe31",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/mire.4bc449120b1046c370d6fbca3b3c5f2a.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/nami_skyla.29176d53b6ce46afda32cdc292b391ad.png",
    "riven_type": "melee",
    "url_name": "nami_skyla",
    "item_name": "Nami Skyla",
    "id": "5c5ca81696e8d2003834fe32",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/nami_skyla.29176d53b6ce46afda32cdc292b391ad.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/nami_solo.daf0c2684b5d12b9e8ca2ff0958b405d.png",
    "riven_type": "melee",
    "url_name": "nami_solo",
    "item_name": "Nami Solo",
    "id": "5c5ca81696e8d2003834fe33",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/nami_solo.daf0c2684b5d12b9e8ca2ff0958b405d.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/nikana.ded47e934d4f2051d9a89bcf017cdfca.png",
    "riven_type": "melee",
    "url_name": "nikana",
    "item_name": "Nikana",
    "id": "5c5ca81696e8d2003834fe34",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/nikana.ded47e934d4f2051d9a89bcf017cdfca.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ninkondi.390943b9c551749e19d348e2e8950ae1.png",
    "riven_type": "melee",
    "url_name": "ninkondi",
    "item_name": "Ninkondi",
    "id": "5c5ca81696e8d2003834fe35",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ninkondi.390943b9c551749e19d348e2e8950ae1.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/obex.40b015303d936acebc71e5430dd85367.png",
    "riven_type": "melee",
    "url_name": "obex",
    "item_name": "Obex",
    "id": "5c5ca81696e8d2003834fe36",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/obex.40b015303d936acebc71e5430dd85367.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ohma.44487796f209ddbbc355edcf60619800.png",
    "riven_type": "melee",
    "url_name": "ohma",
    "item_name": "Ohma",
    "id": "5c5ca81696e8d2003834fe37",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ohma.44487796f209ddbbc355edcf60619800.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/okina.46be8af0b880aa60168c0988ad64ea19.png",
    "riven_type": "melee",
    "url_name": "okina",
    "item_name": "Okina",
    "id": "5c5ca81696e8d2003834fe38",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/okina.46be8af0b880aa60168c0988ad64ea19.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ooltha.e13df69ef5130d9335f2bd364599ae86.png",
    "riven_type": "zaw",
    "url_name": "ooltha",
    "item_name": "Ooltha",
    "id": "5c5ca81696e8d2003834fe39",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ooltha.e13df69ef5130d9335f2bd364599ae86.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/orthos.7e3529cd44b8e270233180b907f72a1d.png",
    "riven_type": "melee",
    "url_name": "orthos",
    "item_name": "Orthos",
    "id": "5c5ca81696e8d2003834fe3a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/orthos.7e3529cd44b8e270233180b907f72a1d.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/orvius.dfeabc5bbe31c5c3f253d8a20f2a40b2.png",
    "riven_type": "melee",
    "url_name": "orvius",
    "item_name": "Orvius",
    "id": "5c5ca81696e8d2003834fe3b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/orvius.dfeabc5bbe31c5c3f253d8a20f2a40b2.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/pangolin_sword.f47fec884e189d952e37d6b184901eb9.png",
    "riven_type": "melee",
    "url_name": "pangolin_sword",
    "item_name": "Pangolin Sword",
    "id": "5c5ca81696e8d2003834fe3c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/pangolin_sword.f47fec884e189d952e37d6b184901eb9.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/plague_keewar.b5e3ceedb8d0ff5ed2defa788e484805.png",
    "riven_type": "zaw",
    "url_name": "plague_keewar",
    "item_name": "Plague Keewar",
    "id": "5c5ca81696e8d2003834fe3d",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/plague_keewar.b5e3ceedb8d0ff5ed2defa788e484805.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/plague_kripath.00191263224f5e5d1ed7957631073fa6.png",
    "riven_type": "zaw",
    "url_name": "plague_kripath",
    "item_name": "Plague Kripath",
    "id": "5c5ca81696e8d2003834fe3e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/plague_kripath.00191263224f5e5d1ed7957631073fa6.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/plasma_sword.89dee5321cc774df8fbbd818b844e193.png",
    "riven_type": "melee",
    "url_name": "plasma_sword",
    "item_name": "Plasma Sword",
    "id": "5c5ca81696e8d2003834fe3f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/plasma_sword.89dee5321cc774df8fbbd818b844e193.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/prova.81054da7c6c20e79abd36521923fa925.png",
    "riven_type": "melee",
    "url_name": "prova",
    "item_name": "Prova",
    "id": "5c5ca81696e8d2003834fe40",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/prova.81054da7c6c20e79abd36521923fa925.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/reaper_prime.37f8e5051fe8730227c6df1c68a7445b.png",
    "riven_type": "melee",
    "url_name": "reaper_prime",
    "item_name": "Reaper Prime",
    "id": "5c5ca81696e8d2003834fe42",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/reaper_prime.37f8e5051fe8730227c6df1c68a7445b.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/redeemer.b39a80a47d3b0df5056bd07b5e277af8.png",
    "riven_type": "melee",
    "url_name": "redeemer",
    "item_name": "Redeemer",
    "id": "5c5ca81696e8d2003834fe43",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/redeemer.b39a80a47d3b0df5056bd07b5e277af8.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/ripkas.71a1f4cadb1fd39eee36642ca8189ef9.png",
    "riven_type": "melee",
    "url_name": "ripkas",
    "item_name": "Ripkas",
    "id": "5c5ca81696e8d2003834fe44",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ripkas.71a1f4cadb1fd39eee36642ca8189ef9.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/sarpa.12468314201edd826d524da9116695de.png",
    "riven_type": "melee",
    "url_name": "sarpa",
    "item_name": "Sarpa",
    "id": "5c5ca81696e8d2003834fe45",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sarpa.12468314201edd826d524da9116695de.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/scindo.2a8908be0b93b22e469de09c17a97d66.png",
    "riven_type": "melee",
    "url_name": "scindo",
    "item_name": "Scindo",
    "id": "5c5ca81696e8d2003834fe46",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/scindo.2a8908be0b93b22e469de09c17a97d66.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/scoliac.6703c0d6787801aa4e743570e345e268.png",
    "riven_type": "melee",
    "url_name": "scoliac",
    "item_name": "Scoliac",
    "id": "5c5ca81696e8d2003834fe47",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/scoliac.6703c0d6787801aa4e743570e345e268.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/sepfahn.c445d087b86e821d11ee009a627429e6.png",
    "riven_type": "zaw",
    "url_name": "sepfahn",
    "item_name": "Sepfahn",
    "id": "5c5ca81696e8d2003834fe48",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sepfahn.c445d087b86e821d11ee009a627429e6.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/serro.acb5f8ff71e74cd25d277e1a1dbefcb5.png",
    "riven_type": "melee",
    "url_name": "serro",
    "item_name": "Serro",
    "id": "5c5ca81696e8d2003834fe49",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/serro.acb5f8ff71e74cd25d277e1a1dbefcb5.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/shaku.dc15c1d78e22da3fede6f6ab3c5bef47.png",
    "riven_type": "melee",
    "url_name": "shaku",
    "item_name": "Shaku",
    "id": "5c5ca81696e8d2003834fe4a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/shaku.dc15c1d78e22da3fede6f6ab3c5bef47.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/sheev.e083af0166692228641af774856fd04b.png",
    "riven_type": "melee",
    "url_name": "sheev",
    "item_name": "Sheev",
    "id": "5c5ca81696e8d2003834fe4b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sheev.e083af0166692228641af774856fd04b.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/sibear.316a35a05e38b1826e5cf5056b4cb946.png",
    "riven_type": "melee",
    "url_name": "sibear",
    "item_name": "Sibear",
    "id": "5c5ca81696e8d2003834fe4c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sibear.316a35a05e38b1826e5cf5056b4cb946.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/sigma_and_octantis.ba55ee8f63accecc063aa87c0d04ad17.png",
    "riven_type": "melee",
    "url_name": "sigma_and_octantis",
    "item_name": "Sigma & Octantis",
    "id": "5c5ca81696e8d2003834fe4d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sigma_and_octantis.ba55ee8f63accecc063aa87c0d04ad17.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/silva_and_aegis.67594c1a2048db8a396756c0e4b63054.png",
    "riven_type": "melee",
    "url_name": "silva_and_aegis",
    "item_name": "Silva & Aegis",
    "id": "5c5ca81696e8d2003834fe4e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/silva_and_aegis.67594c1a2048db8a396756c0e4b63054.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/skana.5b98dcf4cb92f1d6fab21a56d365fcc0.png",
    "riven_type": "melee",
    "url_name": "skana",
    "item_name": "Skana",
    "id": "5c5ca81696e8d2003834fe4f",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/skana.5b98dcf4cb92f1d6fab21a56d365fcc0.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/skiajati.545f2b491838bd12a8dc2d4fa9d8f1e9.png",
    "riven_type": "melee",
    "url_name": "skiajati",
    "item_name": "Skiajati",
    "id": "5c5ca81696e8d2003834fe50",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/skiajati.545f2b491838bd12a8dc2d4fa9d8f1e9.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/sydon.85d4c0918503f427164dbc69d27d9443.png",
    "riven_type": "melee",
    "url_name": "sydon",
    "item_name": "Sydon",
    "id": "5c5ca81696e8d2003834fe51",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sydon.85d4c0918503f427164dbc69d27d9443.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/tekko.8c0daa853f7d5cbfdceef3fe3d8ecb01.png",
    "riven_type": "melee",
    "url_name": "tekko",
    "item_name": "Tekko",
    "id": "5c5ca81696e8d2003834fe52",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tekko.8c0daa853f7d5cbfdceef3fe3d8ecb01.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/tipedo.3231886049a74dae17e5fa0e2992c54f.png",
    "riven_type": "melee",
    "url_name": "tipedo",
    "item_name": "Tipedo",
    "id": "5c5ca81696e8d2003834fe53",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tipedo.3231886049a74dae17e5fa0e2992c54f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/tonbo.4a9b061a66674a4ccdf65c794c0df0eb.png",
    "riven_type": "melee",
    "url_name": "tonbo",
    "item_name": "Tonbo",
    "id": "5c5ca81696e8d2003834fe54",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tonbo.4a9b061a66674a4ccdf65c794c0df0eb.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/twin_basolk.a6e398dafc2dcf1e2b4e2516ae08af06.png",
    "riven_type": "melee",
    "url_name": "twin_basolk",
    "item_name": "Twin Basolk",
    "id": "5c5ca81696e8d2003834fe55",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/twin_basolk.a6e398dafc2dcf1e2b4e2516ae08af06.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/twin_krohkur.15144cd22c339ffc5f0226c260f95a91.png",
    "riven_type": "melee",
    "url_name": "twin_krohkur",
    "item_name": "Twin Krohkur",
    "id": "5c5ca81696e8d2003834fe56",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/twin_krohkur.15144cd22c339ffc5f0226c260f95a91.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/amprex.96d41f4e6b7c4f8483f90c44683ba2bf.png",
    "riven_type": "rifle",
    "url_name": "amprex",
    "item_name": "Amprex",
    "id": "5c5ca81696e8d2003834fd60",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/amprex.96d41f4e6b7c4f8483f90c44683ba2bf.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/burston.2aa5358640a76f5a43f11b4254560311.png",
    "riven_type": "rifle",
    "url_name": "burston",
    "item_name": "Burston",
    "id": "5c5ca81696e8d2003834fd69",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/burston.2aa5358640a76f5a43f11b4254560311.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/buzlok.505769cecc7314d13d236e6227be8c26.png",
    "riven_type": "rifle",
    "url_name": "buzlok",
    "item_name": "Buzlok",
    "id": "5c5ca81696e8d2003834fd6a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/buzlok.505769cecc7314d13d236e6227be8c26.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/cernos.6ea49e65e339e10cc84409e7dcb02cef.png",
    "riven_type": "rifle",
    "url_name": "cernos",
    "item_name": "Cernos",
    "id": "5c5ca81696e8d2003834fd6b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cernos.6ea49e65e339e10cc84409e7dcb02cef.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/convectrix.5b6ad3c7b9c59e7de5130bac9588315c.png",
    "riven_type": "shotgun",
    "url_name": "convectrix",
    "item_name": "Convectrix",
    "id": "5c5ca81696e8d2003834fd6c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/convectrix.5b6ad3c7b9c59e7de5130bac9588315c.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/daikyu.8ae5a0a469eadd60b5a755d76a317dff.png",
    "riven_type": "rifle",
    "url_name": "daikyu",
    "item_name": "Daikyu",
    "id": "5c5ca81696e8d2003834fd6e",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/daikyu.8ae5a0a469eadd60b5a755d76a317dff.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/dera.d2e71b091f5b5a62a6a11a6846dc924e.png",
    "riven_type": "rifle",
    "url_name": "dera",
    "item_name": "Dera",
    "id": "5c5ca81696e8d2003834fd6f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dera.d2e71b091f5b5a62a6a11a6846dc924e.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/drakgoon.6b8dfef7ac875fa49f3418254b9a0d2b.png",
    "riven_type": "shotgun",
    "url_name": "drakgoon",
    "item_name": "Drakgoon",
    "id": "5c5ca81696e8d2003834fd70",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/drakgoon.6b8dfef7ac875fa49f3418254b9a0d2b.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/dread.c1bc8cbd36a8ff069e4388607a9d1ee6.png",
    "riven_type": "rifle",
    "url_name": "dread",
    "item_name": "Dread",
    "id": "5c5ca81696e8d2003834fd71",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/dread.c1bc8cbd36a8ff069e4388607a9d1ee6.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/glaxion.ef97d7dd12728d34ea7ed50100c197b0.png",
    "riven_type": "rifle",
    "url_name": "glaxion",
    "item_name": "Glaxion",
    "id": "5c5ca81696e8d2003834fd74",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/glaxion.ef97d7dd12728d34ea7ed50100c197b0.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/gorgon.322fd818e70763de4ba6bf3334c498fd.png",
    "riven_type": "rifle",
    "url_name": "gorgon",
    "item_name": "Gorgon",
    "id": "5c5ca81696e8d2003834fd75",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/gorgon.322fd818e70763de4ba6bf3334c498fd.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/grakata.cc349001047e5445675581a53cf4a30f.png",
    "riven_type": "rifle",
    "url_name": "grakata",
    "item_name": "Grakata",
    "id": "5c5ca81696e8d2003834fd76",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/grakata.cc349001047e5445675581a53cf4a30f.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/grinlok.d4946bece8cf876693fb748649e1e72b.png",
    "riven_type": "rifle",
    "url_name": "grinlok",
    "item_name": "Grinlok",
    "id": "5c5ca81696e8d2003834fd77",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/grinlok.d4946bece8cf876693fb748649e1e72b.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/harpak.948d1817c05097ff14a16639dbcd5bb2.png",
    "riven_type": "rifle",
    "url_name": "harpak",
    "item_name": "Harpak",
    "id": "5c5ca81696e8d2003834fd78",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/harpak.948d1817c05097ff14a16639dbcd5bb2.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/hema.4cc3a2ff4a815c7dfdb07a514a883b82.png",
    "riven_type": "rifle",
    "url_name": "hema",
    "item_name": "Hema",
    "id": "5c5ca81696e8d2003834fd7a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/hema.4cc3a2ff4a815c7dfdb07a514a883b82.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/hind.c12777c936ceac97a065a03a655a750e.png",
    "riven_type": "rifle",
    "url_name": "hind",
    "item_name": "Hind",
    "id": "5c5ca81696e8d2003834fd7b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/hind.c12777c936ceac97a065a03a655a750e.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/ignis.5b4369035d619c37fed2ecbdafb7594a.png",
    "riven_type": "rifle",
    "url_name": "ignis",
    "item_name": "Ignis",
    "id": "5c5ca81696e8d2003834fd7c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/ignis.5b4369035d619c37fed2ecbdafb7594a.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/javlok.c389afeba8aac67aadb738377bdb4ec8.png",
    "riven_type": "rifle",
    "url_name": "javlok",
    "item_name": "Javlok",
    "id": "5c5ca81696e8d2003834fd7d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/javlok.c389afeba8aac67aadb738377bdb4ec8.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/karak.bbe0d895125d9c2b3b612c34a5e611f3.png",
    "riven_type": "rifle",
    "url_name": "karak",
    "item_name": "Karak",
    "id": "5c5ca81696e8d2003834fd7e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/karak.bbe0d895125d9c2b3b612c34a5e611f3.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/kohm.361a454b487f45e05ef7c884a6a0dad2.png",
    "riven_type": "shotgun",
    "url_name": "kohm",
    "item_name": "Kohm",
    "id": "5c5ca81696e8d2003834fd7f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kohm.361a454b487f45e05ef7c884a6a0dad2.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/lanka.fc41509b5224da3e9fd0dd1b149133cf.png",
    "riven_type": "rifle",
    "url_name": "lanka",
    "item_name": "Lanka",
    "id": "5c5ca81696e8d2003834fd80",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/lanka.fc41509b5224da3e9fd0dd1b149133cf.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/latron.80c8dcc71e135db8e2fb398c0204d1be.png",
    "riven_type": "rifle",
    "url_name": "latron",
    "item_name": "Latron",
    "id": "5c5ca81696e8d2003834fd81",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/latron.80c8dcc71e135db8e2fb398c0204d1be.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/lenz.c503188d5decb7208a86975a77881152.png",
    "riven_type": "rifle",
    "url_name": "lenz",
    "item_name": "Lenz",
    "id": "5c5ca81696e8d2003834fd82",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/lenz.c503188d5decb7208a86975a77881152.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/miter.6685ee070afd0ae6e10eff755ba6898b.png",
    "riven_type": "rifle",
    "url_name": "miter",
    "item_name": "Miter",
    "id": "5c5ca81696e8d2003834fd83",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/miter.6685ee070afd0ae6e10eff755ba6898b.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/mutalist_cernos.de5bd437b72e9c95f7cbc845769fbdfe.png",
    "riven_type": "rifle",
    "url_name": "mutalist_cernos",
    "item_name": "Mutalist Cernos",
    "id": "5c5ca81696e8d2003834fd84",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/mutalist_cernos.de5bd437b72e9c95f7cbc845769fbdfe.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/mutalist_quanta.1bf95233f395adc4a44c46a23ed08c68.png",
    "riven_type": "rifle",
    "url_name": "mutalist_quanta",
    "item_name": "Mutalist Quanta",
    "id": "5c5ca81696e8d2003834fd85",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/mutalist_quanta.1bf95233f395adc4a44c46a23ed08c68.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/opticor.5add59f5ba98aa6384eea9d7052943bf.png",
    "riven_type": "rifle",
    "url_name": "opticor",
    "item_name": "Opticor",
    "id": "5c5ca81696e8d2003834fd87",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/opticor.5add59f5ba98aa6384eea9d7052943bf.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/panthera.ee862561bf473b65df9fa58fbeaaa795.png",
    "riven_type": "rifle",
    "url_name": "panthera",
    "item_name": "Panthera",
    "id": "5c5ca81696e8d2003834fd88",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/panthera.ee862561bf473b65df9fa58fbeaaa795.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/paris.644a8cdf6a49b88e7df042cbac294e15.png",
    "riven_type": "rifle",
    "url_name": "paris",
    "item_name": "Paris",
    "id": "5c5ca81696e8d2003834fd8a",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/paris.644a8cdf6a49b88e7df042cbac294e15.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/penta.2d713f1bdcad43f90dd5691a8bb775e7.png",
    "riven_type": "rifle",
    "url_name": "penta",
    "item_name": "Penta",
    "id": "5c5ca81696e8d2003834fd8b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/penta.2d713f1bdcad43f90dd5691a8bb775e7.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/phage.b0f3d7bd8b8f38805a316b46f00eb8fb.png",
    "riven_type": "shotgun",
    "url_name": "phage",
    "item_name": "Phage",
    "id": "5c5ca81696e8d2003834fd8c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/phage.b0f3d7bd8b8f38805a316b46f00eb8fb.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/phantasma.f98d17ed4134d5528ed7f21429ef6006.png",
    "riven_type": "shotgun",
    "url_name": "phantasma",
    "item_name": "Phantasma",
    "id": "5c5ca81696e8d2003834fd8d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/phantasma.f98d17ed4134d5528ed7f21429ef6006.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/quanta.a1b49d5f5d5c3c46b7f0cd130369559a.png",
    "riven_type": "rifle",
    "url_name": "quanta",
    "item_name": "Quanta",
    "id": "5c5ca81696e8d2003834fd8e",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/quanta.a1b49d5f5d5c3c46b7f0cd130369559a.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/quartakk.3c94922cd929ce60e3a6acbb6a47bea9.png",
    "riven_type": "rifle",
    "url_name": "quartakk",
    "item_name": "Quartakk",
    "id": "5c5ca81696e8d2003834fd8f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/quartakk.3c94922cd929ce60e3a6acbb6a47bea9.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/rubico.19654c8831d70f150f84be3f69b35a15.png",
    "riven_type": "rifle",
    "url_name": "rubico",
    "item_name": "Rubico",
    "id": "5c5ca81696e8d2003834fd90",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/rubico.19654c8831d70f150f84be3f69b35a15.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/scourge.055569ef8aba07d2c53fc3f82390c482.png",
    "riven_type": "rifle",
    "url_name": "scourge",
    "item_name": "Scourge",
    "id": "5c5ca81696e8d2003834fd91",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/scourge.055569ef8aba07d2c53fc3f82390c482.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/simulor.b04c9a58fcb0b4802d67f39c5fc52732.png",
    "riven_type": "rifle",
    "url_name": "simulor",
    "item_name": "Simulor",
    "id": "5c5ca81696e8d2003834fd92",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/simulor.b04c9a58fcb0b4802d67f39c5fc52732.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/snipetron.fc41509b5224da3e9fd0dd1b149133cf.png",
    "riven_type": "rifle",
    "url_name": "snipetron",
    "item_name": "Snipetron",
    "id": "5c5ca81696e8d2003834fd93",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/snipetron.fc41509b5224da3e9fd0dd1b149133cf.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/sobek.9835bb100ba5988d4aeb812230ab767a.png",
    "riven_type": "shotgun",
    "url_name": "sobek",
    "item_name": "Sobek",
    "id": "5c5ca81696e8d2003834fd94",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sobek.9835bb100ba5988d4aeb812230ab767a.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/soma.cdaf834f3db92d51d4452ce8f9aee19c.png",
    "riven_type": "rifle",
    "url_name": "soma",
    "item_name": "Soma",
    "id": "5c5ca81696e8d2003834fd95",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/soma.cdaf834f3db92d51d4452ce8f9aee19c.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/stradavar.e69dd79f2dc691327e6f5475c032e09c.png",
    "riven_type": "rifle",
    "url_name": "stradavar",
    "item_name": "Stradavar",
    "id": "5c5ca81696e8d2003834fd96",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/stradavar.e69dd79f2dc691327e6f5475c032e09c.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/strun.e8cc2909f474436bb2573b8ba7ff43b7.png",
    "riven_type": "shotgun",
    "url_name": "strun",
    "item_name": "Strun",
    "id": "5c5ca81696e8d2003834fd97",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/strun.e8cc2909f474436bb2573b8ba7ff43b7.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/sybaris.5216e20cbf612b67bbe22a6c7c6b107e.png",
    "riven_type": "rifle",
    "url_name": "sybaris",
    "item_name": "Sybaris",
    "id": "5c5ca81696e8d2003834fd99",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sybaris.5216e20cbf612b67bbe22a6c7c6b107e.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/synapse.8f3428d652e080644e9a3028081f4acd.png",
    "riven_type": "rifle",
    "url_name": "synapse",
    "item_name": "Synapse",
    "id": "5c5ca81696e8d2003834fd9a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/synapse.8f3428d652e080644e9a3028081f4acd.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/tetra.f86faf40614dc3d227cdd7766b27fddc.png",
    "riven_type": "rifle",
    "url_name": "tetra",
    "item_name": "Tetra",
    "id": "5c5ca81696e8d2003834fd9c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tetra.f86faf40614dc3d227cdd7766b27fddc.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/tigris.7ce83c14bb12c7baee7429c095e54374.png",
    "riven_type": "shotgun",
    "url_name": "tigris",
    "item_name": "Tigris",
    "id": "5c5ca81696e8d2003834fd9e",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tigris.7ce83c14bb12c7baee7429c095e54374.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/tonkor.18f437094ffdd53edc96e46d72eb7b59.png",
    "riven_type": "rifle",
    "url_name": "tonkor",
    "item_name": "Tonkor",
    "id": "5c5ca81696e8d2003834fd9f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tonkor.18f437094ffdd53edc96e46d72eb7b59.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/torid.44456f26160f4ece65656c524c4692fe.png",
    "riven_type": "rifle",
    "url_name": "torid",
    "item_name": "Torid",
    "id": "5c5ca81696e8d2003834fda0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/torid.44456f26160f4ece65656c524c4692fe.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/vectis.439c24184ddd098ca33ba897be1b3fa9.png",
    "riven_type": "rifle",
    "url_name": "vectis",
    "item_name": "Vectis",
    "id": "5c5ca81696e8d2003834fda1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/vectis.439c24184ddd098ca33ba897be1b3fa9.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/veldt.1b5734a7f3f0935019d296accad86136.png",
    "riven_type": "rifle",
    "url_name": "veldt",
    "item_name": "Veldt",
    "id": "5c5ca81696e8d2003834fda2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/veldt.1b5734a7f3f0935019d296accad86136.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/vulkar.cd244ebd97bf1ef69ed49b756d07665f.png",
    "riven_type": "rifle",
    "url_name": "vulkar",
    "item_name": "Vulkar",
    "id": "5c5ca81696e8d2003834fda3",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/vulkar.cd244ebd97bf1ef69ed49b756d07665f.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/zarr.ab172f2a4dac5c140772ba2ac675b614.png",
    "riven_type": "rifle",
    "url_name": "zarr",
    "item_name": "Zarr",
    "id": "5c5ca81696e8d2003834fda4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/zarr.ab172f2a4dac5c140772ba2ac675b614.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/zenith.031d3559d3575fa5f23d17f1fd2cacb9.png",
    "riven_type": "rifle",
    "url_name": "zenith",
    "item_name": "Zenith",
    "id": "5c5ca81696e8d2003834fda5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/zenith.031d3559d3575fa5f23d17f1fd2cacb9.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/zhuge.69a6b4bcee465c6b3332ddb4d6d29e19.png",
    "riven_type": "rifle",
    "url_name": "zhuge",
    "item_name": "Zhuge",
    "id": "5c5ca81696e8d2003834fda6",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/zhuge.69a6b4bcee465c6b3332ddb4d6d29e19.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/acrid.def858b7d99e216a123d8af9a4f3663c.png",
    "riven_type": "pistol",
    "url_name": "acrid",
    "item_name": "Acrid",
    "id": "5c5ca81696e8d2003834fda7",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/acrid.def858b7d99e216a123d8af9a4f3663c.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/afuris.836b9b7a1ea7cceeacf42f929d33ad3f.png",
    "riven_type": "pistol",
    "url_name": "afuris",
    "item_name": "Afuris",
    "id": "5c5ca81696e8d2003834fda8",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/afuris.836b9b7a1ea7cceeacf42f929d33ad3f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/akbolto.ba66cf8e6481671a1a69057b78ed74e8.png",
    "riven_type": "pistol",
    "url_name": "akbolto",
    "item_name": "Akbolto",
    "id": "5c5ca81696e8d2003834fda9",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akbolto.ba66cf8e6481671a1a69057b78ed74e8.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/akbronco.cc3f95412fa414ddd87a90c63240928f.png",
    "riven_type": "shotgun",
    "url_name": "akbronco",
    "item_name": "Akbronco",
    "id": "5c5ca81696e8d2003834fdaa",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akbronco.cc3f95412fa414ddd87a90c63240928f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/akjagara.8d4087f177bb51d5b4fd5d3ac89ea78e.png",
    "riven_type": "pistol",
    "url_name": "akjagara",
    "item_name": "Akjagara",
    "id": "5c5ca81696e8d2003834fdab",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akjagara.8d4087f177bb51d5b4fd5d3ac89ea78e.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/aklato.fb4fd2557ee8190c747b8a21fc130f86.png",
    "riven_type": "pistol",
    "url_name": "aklato",
    "item_name": "Aklato",
    "id": "5c5ca81696e8d2003834fdac",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/aklato.fb4fd2557ee8190c747b8a21fc130f86.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/arca_scisco.8f53fed9eb4af8089fd98846bc365ca4.png",
    "riven_type": "pistol",
    "url_name": "arca_scisco",
    "item_name": "Arca Scisco",
    "id": "5c5ca81696e8d2003834fdb4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/arca_scisco.8f53fed9eb4af8089fd98846bc365ca4.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/cycron.8c415cf09d5a258677c3f42d9477c0ee.png",
    "riven_type": "pistol",
    "url_name": "cycron",
    "item_name": "Cycron",
    "id": "5c5ca81696e8d2003834fdbd",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cycron.8c415cf09d5a258677c3f42d9477c0ee.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/detron.0d820dd8bfa6d4a9369456594232e0b6.png",
    "riven_type": "shotgun",
    "url_name": "detron",
    "item_name": "Detron",
    "id": "5c5ca81696e8d2003834fdbf",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/detron.0d820dd8bfa6d4a9369456594232e0b6.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/embolist.19e333826e9f646df007efc7778a373e.png",
    "riven_type": "pistol",
    "url_name": "embolist",
    "item_name": "Embolist",
    "id": "5c5ca81696e8d2003834fdc2",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/embolist.19e333826e9f646df007efc7778a373e.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/gammacor.6d4b35b6390c9dcf97ac45c7082f4999.png",
    "riven_type": "pistol",
    "url_name": "gammacor",
    "item_name": "Gammacor",
    "id": "5c5ca81696e8d2003834fdc6",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/gammacor.6d4b35b6390c9dcf97ac45c7082f4999.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/nukor.d4bffded3de6af3f2d6e420bd9e6a948.png",
    "riven_type": "pistol",
    "url_name": "nukor",
    "item_name": "Nukor",
    "id": "5c5ca81696e8d2003834fdd2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/nukor.d4bffded3de6af3f2d6e420bd9e6a948.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/pandero.e21b74806853bf80e2b3ca9fc4bdc635.png",
    "riven_type": "pistol",
    "url_name": "pandero",
    "item_name": "Pandero",
    "id": "5c5ca81696e8d2003834fdd3",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/pandero.e21b74806853bf80e2b3ca9fc4bdc635.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/pox.7ee16999c33c310ac4c87c8a31f6c551.png",
    "riven_type": "pistol",
    "url_name": "pox",
    "item_name": "Pox",
    "id": "5c5ca81696e8d2003834fdd4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/pox.7ee16999c33c310ac4c87c8a31f6c551.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/pyrana.76c730b1909750965e34b2ca2e12da81.png",
    "riven_type": "shotgun",
    "url_name": "pyrana",
    "item_name": "Pyrana",
    "id": "5c5ca81696e8d2003834fdd5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/pyrana.76c730b1909750965e34b2ca2e12da81.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/seer.d6955128cc55ac9fce8eda2b8674712a.png",
    "riven_type": "pistol",
    "url_name": "seer",
    "item_name": "Seer",
    "id": "5c5ca81696e8d2003834fdd6",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/seer.d6955128cc55ac9fce8eda2b8674712a.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/sicarus.630099456411a4fc42c99708f1208200.png",
    "riven_type": "pistol",
    "url_name": "sicarus",
    "item_name": "Sicarus",
    "id": "5c5ca81696e8d2003834fdd7",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sicarus.630099456411a4fc42c99708f1208200.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/spectra.2d58d17ca4cad3d43d7e373294a6c7ce.png",
    "riven_type": "pistol",
    "url_name": "spectra",
    "item_name": "Spectra",
    "id": "5c5ca81696e8d2003834fdd9",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/spectra.2d58d17ca4cad3d43d7e373294a6c7ce.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/spira.ba156097272dd7bf205ff6cc49015c43.png",
    "riven_type": "pistol",
    "url_name": "spira",
    "item_name": "Spira",
    "id": "5c5ca81696e8d2003834fdda",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/spira.ba156097272dd7bf205ff6cc49015c43.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/staticor.7f88069ac20fd028ff8c5d3bc8cd8057.png",
    "riven_type": "pistol",
    "url_name": "staticor",
    "item_name": "Staticor",
    "id": "5c5ca81696e8d2003834fddb",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/staticor.7f88069ac20fd028ff8c5d3bc8cd8057.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/stubba.6d4ac00860e711de12a9c746113fe987.png",
    "riven_type": "pistol",
    "url_name": "stubba",
    "item_name": "Stubba",
    "id": "5c5ca81696e8d2003834fddc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/stubba.6d4ac00860e711de12a9c746113fe987.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/stug.dc2ff3e23d19a9c4657316879ed40033.png",
    "riven_type": "pistol",
    "url_name": "stug",
    "item_name": "Stug",
    "id": "5c5ca81696e8d2003834fddd",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/stug.dc2ff3e23d19a9c4657316879ed40033.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/talons.a4e7d6091b69a8e27d9bb572c58df3ff.png",
    "riven_type": "pistol",
    "url_name": "talons",
    "item_name": "Talons",
    "id": "5c5ca81696e8d2003834fdde",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/talons.a4e7d6091b69a8e27d9bb572c58df3ff.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/twin_grakatas.02ca4e72db844e9787bb834dffaba710.png",
    "riven_type": "pistol",
    "url_name": "twin_grakatas",
    "item_name": "Twin Grakatas",
    "id": "5c5ca81696e8d2003834fddf",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/twin_grakatas.02ca4e72db844e9787bb834dffaba710.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/twin_gremlins.36127609f284a9c973fcedd340d45187.png",
    "riven_type": "pistol",
    "url_name": "twin_gremlins",
    "item_name": "Twin Gremlins",
    "id": "5c5ca81696e8d2003834fde0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/twin_gremlins.36127609f284a9c973fcedd340d45187.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/twin_kohmak.358010434239192a9d8adfa3c3a85333.png",
    "riven_type": "shotgun",
    "url_name": "twin_kohmak",
    "item_name": "Twin Kohmak",
    "id": "5c5ca81696e8d2003834fde1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/twin_kohmak.358010434239192a9d8adfa3c3a85333.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/twin_rogga.0b8d505d6436e04c8a99c1ccf99ac3da.png",
    "riven_type": "shotgun",
    "url_name": "twin_rogga",
    "item_name": "Twin Rogga",
    "id": "5c5ca81696e8d2003834fde2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/twin_rogga.0b8d505d6436e04c8a99c1ccf99ac3da.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/twin_vipers.1c0e4335bf0f64303f2e469cfa10022b.png",
    "riven_type": "pistol",
    "url_name": "twin_vipers",
    "item_name": "Twin Vipers",
    "id": "5c5ca81696e8d2003834fde3",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/twin_vipers.1c0e4335bf0f64303f2e469cfa10022b.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/tysis.9d80f73358c18d058b92787dd54d704d.png",
    "riven_type": "pistol",
    "url_name": "tysis",
    "item_name": "Tysis",
    "id": "5c5ca81696e8d2003834fde4",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tysis.9d80f73358c18d058b92787dd54d704d.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/vasto.cab25e30e10e1a8d9fbe3a487bd7b9f2.png",
    "riven_type": "pistol",
    "url_name": "vasto",
    "item_name": "Vasto",
    "id": "5c5ca81696e8d2003834fde5",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/vasto.cab25e30e10e1a8d9fbe3a487bd7b9f2.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/viper.9da1c64daaf6ee8ab90d81cfb7f5598d.png",
    "riven_type": "pistol",
    "url_name": "viper",
    "item_name": "Viper",
    "id": "5c5ca81696e8d2003834fde6",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/viper.9da1c64daaf6ee8ab90d81cfb7f5598d.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/zakti.41680477b8d0d79382d677e328336031.png",
    "riven_type": "pistol",
    "url_name": "zakti",
    "item_name": "Zakti",
    "id": "5c5ca81696e8d2003834fde7",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/zakti.41680477b8d0d79382d677e328336031.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/zylok.fa578a9c8fa46de167ff200523b6276c.png",
    "riven_type": "pistol",
    "url_name": "zylok",
    "item_name": "Zylok",
    "id": "5c5ca81696e8d2003834fde8",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/zylok.fa578a9c8fa46de167ff200523b6276c.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/cyath.9be1cfd6ca29427512ee0efe203aba4d.png",
    "riven_type": "zaw",
    "url_name": "cyath",
    "item_name": "Cyath",
    "id": "5c5ca81696e8d2003834fdf9",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cyath.9be1cfd6ca29427512ee0efe203aba4d.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/dakra_prime.34da279951b92713480d09bdbf7104b7.png",
    "riven_type": "melee",
    "url_name": "dakra_prime",
    "item_name": "Dakra Prime",
    "id": "5c5ca81696e8d2003834fdfa",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dakra_prime.34da279951b92713480d09bdbf7104b7.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dark_dagger.bbd0865d2a2bb1c399b80c6170f37c2d.png",
    "riven_type": "melee",
    "url_name": "dark_dagger",
    "item_name": "Dark Dagger",
    "id": "5c5ca81696e8d2003834fdfb",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dark_dagger.bbd0865d2a2bb1c399b80c6170f37c2d.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dark_split_sword_(dual_swords).a0e5f62b68b83216be729ed300be65f7.png",
    "riven_type": "melee",
    "url_name": "dark_split_sword_(dual_swords)",
    "item_name": "Dark Split-Sword (Dual Swords)",
    "id": "5c5ca81696e8d2003834fdfc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dark_split_sword_(dual_swords).a0e5f62b68b83216be729ed300be65f7.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dark_sword.0d15d2fbdd2129494ab98d626798f39f.png",
    "riven_type": "melee",
    "url_name": "dark_sword",
    "item_name": "Dark Sword",
    "id": "5c5ca81696e8d2003834fdfd",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dark_sword.0d15d2fbdd2129494ab98d626798f39f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dehtat.9a28bb6c6f0a1608301aea395a8e87c8.png",
    "riven_type": "zaw",
    "url_name": "dehtat",
    "item_name": "Dehtat",
    "id": "5c5ca81696e8d2003834fdfe",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dehtat.9a28bb6c6f0a1608301aea395a8e87c8.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/destreza.4d34c03000e5462ae2a21c4306a731e0.png",
    "riven_type": "melee",
    "url_name": "destreza",
    "item_name": "Destreza",
    "id": "5c5ca81696e8d2003834fdff",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/destreza.4d34c03000e5462ae2a21c4306a731e0.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dex_dakra.bfa2fbc9398fd0db61a295f4bcff715d.png",
    "riven_type": "melee",
    "url_name": "dex_dakra",
    "item_name": "Dex Dakra",
    "id": "5c5ca81696e8d2003834fe00",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dex_dakra.bfa2fbc9398fd0db61a295f4bcff715d.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dokrahm.57b0f7d49c3389c9760481a8043e9e9f.png",
    "riven_type": "zaw",
    "url_name": "dokrahm",
    "item_name": "Dokrahm",
    "id": "5c5ca81696e8d2003834fe01",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/dokrahm.57b0f7d49c3389c9760481a8043e9e9f.128x128.png",
    "group": "zaw"
  },
  {
    "icon": "icons/en/dragon_nikana.3525eba6c48fb62195e846bc8030b492.png",
    "riven_type": "melee",
    "url_name": "dragon_nikana",
    "item_name": "Dragon Nikana",
    "id": "5c5ca81696e8d2003834fe02",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dragon_nikana.3525eba6c48fb62195e846bc8030b492.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_cleavers.376cee4cc5b1c3cc62e460710ceff5fc.png",
    "riven_type": "melee",
    "url_name": "dual_cleavers",
    "item_name": "Dual Cleavers",
    "id": "5c5ca81696e8d2003834fe03",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_cleavers.376cee4cc5b1c3cc62e460710ceff5fc.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_ether.e42e672c12a5a419a56f79eb68682d41.png",
    "riven_type": "melee",
    "url_name": "dual_ether",
    "item_name": "Dual Ether",
    "id": "5c5ca81696e8d2003834fe04",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_ether.e42e672c12a5a419a56f79eb68682d41.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_heat_swords.db32e731d487a5c4218f71108290cc06.png",
    "riven_type": "melee",
    "url_name": "dual_heat_swords",
    "item_name": "Dual Heat Swords",
    "id": "5c5ca81696e8d2003834fe05",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_heat_swords.db32e731d487a5c4218f71108290cc06.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_ichor.e18da7cac99ec9154bc6ad895fc39185.png",
    "riven_type": "melee",
    "url_name": "dual_ichor",
    "item_name": "Dual Ichor",
    "id": "5c5ca81696e8d2003834fe06",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_ichor.e18da7cac99ec9154bc6ad895fc39185.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_kamas.3a49f1ae023c1988d14200425aff3057.png",
    "riven_type": "melee",
    "url_name": "dual_kamas",
    "item_name": "Dual Kamas",
    "id": "5c5ca81696e8d2003834fe07",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_kamas.3a49f1ae023c1988d14200425aff3057.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/dual_keres.0a93b2e4eab73c24e0fb4675f59f2781.png",
    "riven_type": "melee",
    "url_name": "dual_keres",
    "item_name": "Dual Keres",
    "id": "5c5ca81696e8d2003834fe08",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/dual_keres.0a93b2e4eab73c24e0fb4675f59f2781.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kama.4e5a6ecdb5d523f9684d104714655b9e.png",
    "riven_type": "melee",
    "url_name": "kama",
    "item_name": "Kama",
    "id": "5c5ca81696e8d2003834fe22",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kama.4e5a6ecdb5d523f9684d104714655b9e.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kogake.f09fa04d9a65d621c0505649274db68a.png",
    "riven_type": "melee",
    "url_name": "kogake",
    "item_name": "Kogake",
    "id": "5c5ca81696e8d2003834fe26",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kogake.f09fa04d9a65d621c0505649274db68a.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/krohkur.032f3fcc8aa332fb4ce3bd00ab8b0133.png",
    "riven_type": "melee",
    "url_name": "krohkur",
    "item_name": "Krohkur",
    "id": "5c5ca81696e8d2003834fe27",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/krohkur.032f3fcc8aa332fb4ce3bd00ab8b0133.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kronen.f5271e71b923e6ba302a31bda9b3287f.png",
    "riven_type": "melee",
    "url_name": "kronen",
    "item_name": "Kronen",
    "id": "5c5ca81696e8d2003834fe28",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kronen.f5271e71b923e6ba302a31bda9b3287f.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/lacera.d609ef53d33cadf5c618c93ed238d6d2.png",
    "riven_type": "melee",
    "url_name": "lacera",
    "item_name": "Lacera",
    "id": "5c5ca81696e8d2003834fe2a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/lacera.d609ef53d33cadf5c618c93ed238d6d2.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/lesion.5e02a91a3896e5303279c0c929b8d5ec.png",
    "riven_type": "melee",
    "url_name": "lesion",
    "item_name": "Lesion",
    "id": "5c5ca81696e8d2003834fe2c",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/lesion.5e02a91a3896e5303279c0c929b8d5ec.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/venka.e1ecfa02e0c61e38048695a98868fc3c.png",
    "riven_type": "melee",
    "url_name": "venka",
    "item_name": "Venka",
    "id": "5c5ca81696e8d2003834fe57",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/venka.e1ecfa02e0c61e38048695a98868fc3c.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/volnus.2353fb37d6c473b12f28bfef8c8a95dd.png",
    "riven_type": "melee",
    "url_name": "volnus",
    "item_name": "Volnus",
    "id": "5c5ca81696e8d2003834fe58",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/volnus.2353fb37d6c473b12f28bfef8c8a95dd.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/zenistar.d99a217f3dde3380a9ea5145e9effa67.png",
    "riven_type": "melee",
    "url_name": "zenistar",
    "item_name": "Zenistar",
    "id": "5c5ca81696e8d2003834fe5a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/zenistar.d99a217f3dde3380a9ea5145e9effa67.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/deconstructor.2bc000648cdc4a157808ac70ccc937c2.png",
    "riven_type": "melee",
    "url_name": "deconstructor",
    "item_name": "Deconstructor",
    "id": "5c5ca81696e8d2003834fe5d",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/deconstructor.2bc000648cdc4a157808ac70ccc937c2.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/sweeper.75089120a61fac27357466d9dee19d8f.png",
    "riven_type": "shotgun",
    "url_name": "sweeper",
    "item_name": "Sweeper",
    "id": "5c5ca81696e8d2003834fe61",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sweeper.75089120a61fac27357466d9dee19d8f.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/rattleguts.51473ced4b8099a9fbb25dfad75e8b45.png",
    "riven_type": "kitgun",
    "url_name": "rattleguts",
    "item_name": "Rattleguts",
    "id": "5ced51e0cd3f0b0098a3862d",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/rattleguts.51473ced4b8099a9fbb25dfad75e8b45.128x128.png",
    "group": "kitgun"
  },
  {
    "icon": "icons/en/kreska.b30c46cce9ef8e70c448a1c2479a0faf.png",
    "riven_type": "melee",
    "url_name": "kreska",
    "item_name": "Kreska",
    "id": "5cf572559597e1019b1678d1",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/kreska.b30c46cce9ef8e70c448a1c2479a0faf.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/wolf_sledge.65accab6b5b94753be5db7d124f3b086.png",
    "riven_type": "melee",
    "url_name": "wolf_sledge",
    "item_name": "Wolf Sledge",
    "id": "5cf572569597e1019b1678d3",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/wolf_sledge.65accab6b5b94753be5db7d124f3b086.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/velocitus.cbd04bd264e30012bc32de60f2976d6e.png",
    "riven_type": "rifle",
    "url_name": "velocitus",
    "item_name": "Velocitus",
    "id": "5cfe91798be64500e4430ce0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/velocitus.cbd04bd264e30012bc32de60f2976d6e.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/fluctus.1260f4c62a54ae230993e30f66453712.png",
    "riven_type": "rifle",
    "url_name": "fluctus",
    "item_name": "Fluctus",
    "id": "5cfe917a8be64500e4430ce3",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/fluctus.1260f4c62a54ae230993e30f66453712.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/quatz.f53f42abcec3d6827af56f37657a348e.png",
    "riven_type": "pistol",
    "url_name": "quatz",
    "item_name": "Quatz",
    "id": "5d322d0e74bdad027da4d06a",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/quatz.f53f42abcec3d6827af56f37657a348e.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/acceltra.2d57d4573999b2e19bedb218d9e9846c.png",
    "riven_type": "rifle",
    "url_name": "acceltra",
    "item_name": "Acceltra",
    "id": "5d6e947e7ea27b048cbea8cc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/acceltra.2d57d4573999b2e19bedb218d9e9846c.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/akarius.e347dca439dcc09e7e5e7f45d961787a.png",
    "riven_type": "pistol",
    "url_name": "akarius",
    "item_name": "Akarius",
    "id": "5d6e947e7ea27b048cbea8cd",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/akarius.e347dca439dcc09e7e5e7f45d961787a.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/tazicor.21da9f14f8da3fece55ea43bd598bb58.png",
    "riven_type": "rifle",
    "url_name": "tazicor",
    "item_name": "Tazicor",
    "id": "5d70ebe07ea27b064d455072",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/tazicor.21da9f14f8da3fece55ea43bd598bb58.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/cryotra.fe7350c85bb0b9aca1264f214cc88842.png",
    "riven_type": "rifle",
    "url_name": "cryotra",
    "item_name": "Cryotra",
    "id": "5d70ebe17ea27b064d455073",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cryotra.fe7350c85bb0b9aca1264f214cc88842.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/multron.f4545cda5161c2db5d9168b71ff22114.png",
    "riven_type": "rifle",
    "url_name": "multron",
    "item_name": "Multron",
    "id": "5d70ebe17ea27b064d455074",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/multron.f4545cda5161c2db5d9168b71ff22114.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/vulcax.3a56d04e6c430c9a8a1e6ad219a9a790.png",
    "riven_type": "rifle",
    "url_name": "vulcax",
    "item_name": "Vulcax",
    "id": "5d70ebe17ea27b064d455075",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/vulcax.3a56d04e6c430c9a8a1e6ad219a9a790.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/masseter.e61dbb2678e344be701b9d376c1bf3fc.png",
    "riven_type": "melee",
    "url_name": "masseter",
    "item_name": "Masseter",
    "id": "5dbe9b047ea27b0ffe3ca262",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/masseter.e61dbb2678e344be701b9d376c1bf3fc.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/pathocyst.f423b7a6a78d2e4780c1007f0f0fb464.png",
    "riven_type": "melee",
    "url_name": "pathocyst",
    "item_name": "Pathocyst",
    "id": "5dbe9b057ea27b0ffe3ca263",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/pathocyst.f423b7a6a78d2e4780c1007f0f0fb464.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kuva_shildeg.833d9ac75906e6ed810f87d16fc3bf23.png",
    "riven_type": "melee",
    "url_name": "kuva_shildeg",
    "item_name": "Kuva Shildeg",
    "id": "5dbe9b057ea27b0ffe3ca264",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/kuva_shildeg.833d9ac75906e6ed810f87d16fc3bf23.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/kuva_chakkhurr.a6dd9f9351a16da48402612663ea86da.png",
    "riven_type": "rifle",
    "url_name": "kuva_chakkhurr",
    "item_name": "Kuva Chakkhurr",
    "id": "5dbe9b057ea27b0ffe3ca265",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kuva_chakkhurr.a6dd9f9351a16da48402612663ea86da.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/kuva_ayanga.275bca032df566eff062e1f64920e4f4.png",
    "riven_type": "rifle",
    "url_name": "kuva_ayanga",
    "item_name": "Kuva Ayanga",
    "id": "5dbe9b057ea27b0ffe3ca266",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kuva_ayanga.275bca032df566eff062e1f64920e4f4.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/kuva_twin_stubbas.dc0f04384096b1b10ffd15a4a65bf2fb.png",
    "riven_type": "pistol",
    "url_name": "kuva_twin_stubbas",
    "item_name": "Kuva Twin Stubbas",
    "id": "5dc2d8bbff08fd007d021a44",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kuva_twin_stubbas.dc0f04384096b1b10ffd15a4a65bf2fb.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/shedu.765c016812e915e1e06ceb5e3820ae48.png",
    "riven_type": "rifle",
    "url_name": "shedu",
    "item_name": "Shedu",
    "id": "5e02154d14569703bf43e547",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/shedu.765c016812e915e1e06ceb5e3820ae48.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/pennant.c466162ce14d3ae4acbf5ccae316026c.png",
    "riven_type": "melee",
    "url_name": "pennant",
    "item_name": "Pennant",
    "id": "5e02154d14569703bf43e548",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/pennant.c466162ce14d3ae4acbf5ccae316026c.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/quellor.4a72101e1ef7e50287d619e68a44d97e.png",
    "riven_type": "rifle",
    "url_name": "quellor",
    "item_name": "Quellor",
    "id": "5e02154d14569703bf43e549",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/quellor.4a72101e1ef7e50287d619e68a44d97e.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/kuva_bramma.11b49af045d8c2594e41fffd4490c73f.png",
    "riven_type": "rifle",
    "url_name": "kuva_bramma",
    "item_name": "Kuva Bramma",
    "id": "5e41458f7b0275011bc5b7cc",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/kuva_bramma.11b49af045d8c2594e41fffd4490c73f.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/basmu.d7260ea6d078f34f6ebd751cdc8d7bcb.png",
    "riven_type": "rifle",
    "url_name": "basmu",
    "item_name": "Basmu",
    "id": "5e7ca96f267539062bcc4179",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/basmu.d7260ea6d078f34f6ebd751cdc8d7bcb.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/stropha.08c23ce01edf041f6204aa470f8f12c9.png",
    "riven_type": "melee",
    "url_name": "stropha",
    "item_name": "Stropha",
    "id": "5ee7dea904d55c0b2614f571",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/stropha.08c23ce01edf041f6204aa470f8f12c9.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/stahlta.30d7537c3158976f86998e5b9fa05f96.png",
    "riven_type": "rifle",
    "url_name": "stahlta",
    "item_name": "Stahlta",
    "id": "5ee7dea904d55c0b2614f572",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/stahlta.30d7537c3158976f86998e5b9fa05f96.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/velox.8d807d2b4f5eddf0d1b17e52adc717ac.png",
    "riven_type": "pistol",
    "url_name": "velox",
    "item_name": "Velox",
    "id": "5ee7dea904d55c0b2614f573",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/velox.8d807d2b4f5eddf0d1b17e52adc717ac.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/helstrum.4bbc6d2784cacae7d2c1974d188a1839.png",
    "riven_type": "rifle",
    "url_name": "helstrum",
    "item_name": "Helstrum",
    "id": "5f07214b9f527b017c17a95b",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/helstrum.4bbc6d2784cacae7d2c1974d188a1839.128x128.png",
    "group": "sentinel"
  },
  {
    "icon": "icons/en/xoris.97a7c35070f3d75257662ad38798c9a1.png",
    "riven_type": "melee",
    "url_name": "xoris",
    "item_name": "Xoris",
    "id": "5f07214b9f527b017c17a95c",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/xoris.97a7c35070f3d75257662ad38798c9a1.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/athodai.a43f1e1a103b2fd440e7b940652ed8eb.png",
    "riven_type": "pistol",
    "url_name": "athodai",
    "item_name": "Athodai",
    "id": "5f2af41aad961e006bd6a95f",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/athodai.a43f1e1a103b2fd440e7b940652ed8eb.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/sepulcrum.e092d60c4da946e3d7c273cdbcd2759f.png",
    "riven_type": "pistol",
    "url_name": "sepulcrum",
    "item_name": "Sepulcrum",
    "id": "5f498a379426ed005af5ecac",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/sepulcrum.e092d60c4da946e3d7c273cdbcd2759f.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/quassus.6875bf8f51ad6a9851c7a0588b516420.png",
    "riven_type": "melee",
    "url_name": "quassus",
    "item_name": "Quassus",
    "id": "5f498a379426ed005af5ecad",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/quassus.6875bf8f51ad6a9851c7a0588b516420.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/trumna.f77b5072acb198ecd3a0a06e8f86e3bd.png",
    "riven_type": "rifle",
    "url_name": "trumna",
    "item_name": "Trumna",
    "id": "5f498a379426ed005af5ecae",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/trumna.f77b5072acb198ecd3a0a06e8f86e3bd.128x128.png",
    "group": "primary"
  },
  {
    "icon": "icons/en/zymos.d358a221a7683eb20bd8af1b02e9d0da.png",
    "riven_type": "pistol",
    "url_name": "zymos",
    "item_name": "Zymos",
    "id": "5f498a379426ed005af5ecaf",
    "icon_format": "port",
    "thumb": "icons/en/thumbs/zymos.d358a221a7683eb20bd8af1b02e9d0da.128x128.png",
    "group": "secondary"
  },
  {
    "icon": "icons/en/keratinos.48005cdde13b283b6bf2ecc70b8e866c.png",
    "riven_type": "melee",
    "url_name": "keratinos",
    "item_name": "Keratinos",
    "id": "5f498a379426ed005af5ecb0",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/keratinos.48005cdde13b283b6bf2ecc70b8e866c.128x128.png",
    "group": "melee"
  },
  {
    "icon": "icons/en/mausolon.102f22438237ef4c42be2f8b18c9d03d.png",
    "riven_type": "rifle",
    "url_name": "mausolon",
    "item_name": "Mausolon",
    "id": "5f498a389426ed005af5ecb1",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/mausolon.102f22438237ef4c42be2f8b18c9d03d.128x128.png",
    "group": "archgun"
  },
  {
    "icon": "icons/en/cortege.e9d18f9bab1b8e0b6672978355057f9e.png",
    "riven_type": "rifle",
    "url_name": "cortege",
    "item_name": "Cortege",
    "id": "5f498a389426ed005af5ecb2",
    "icon_format": "land",
    "thumb": "icons/en/thumbs/cortege.e9d18f9bab1b8e0b6672978355057f9e.128x128.png",
    "group": "archgun"
  }
]