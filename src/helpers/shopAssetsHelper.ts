export const getShopAttributeMultiplier = (shopAssetName: string) => {
  switch (shopAssetName) {
    case "attackSpeed":
      return 100;
    case "attack":
      return 20;
    case "deffense":
      return 10;
    case "healthPoints":
      return 50;
    default:
      return 0;
  }
};
