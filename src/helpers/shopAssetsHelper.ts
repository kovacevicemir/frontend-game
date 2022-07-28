export const getShopAttributeMultiplier = (shopAssetName: string) => {
  switch (shopAssetName) {
    case "attackSpeed":
      return 175;
    case "attack":
      return 7;
    case "deffense":
      return 4;
    case "healthPoints":
      return 20;
    default:
      return 0;
  }
};

export const getShopPrice = () => {
  return 500;
};
