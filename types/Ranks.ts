export enum Ranks {
  Unrated = 0,
  Unused1 = 1,
  Unused2 = 2,
  Iron1 = 3,
  Iron2 = 4,
  Iron3 = 5,
  Bronze1 = 6,
  Bronze2 = 7,
  Bronze3 = 8,
  Silver1 = 9,
  Silver2 = 10,
  Silver3 = 11,
  Gold1 = 12,
  Gold2 = 13,
  Gold3 = 14,
  Platinum1 = 15,
  Platinum2 = 16,
  Platinum3 = 17,
  Diamond1 = 18,
  Diamond2 = 19,
  Diamond3 = 20,
  Ascendant1 = 21,
  Ascendant2 = 22,
  Ascendant3 = 23,
  Immortal1 = 24,
  Immortal2 = 25,
  Immortal3 = 26,
  Radiant1 = 27,
}
const RANK_LIST_BASE_URL = "https://valorant-api.com/v1/competitivetiers";
export async function GetRank(rankTier: Ranks) {
  let rankName = "";
  let icon = "";

  await fetch(`${RANK_LIST_BASE_URL}`)
    .then((res) => res.json())
    .then((data) => {
      const { tierName, largeIcon } = data.data
        .at(-1)
        .tiers.filter((rank: any) => rank.tier == rankTier)[0];
      rankName = tierName;
      icon = largeIcon;
    });

  return { tierName: rankName, largeIcon: icon };
}
