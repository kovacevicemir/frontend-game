export const getShopAttributeMultiplier = (shopAssetName: string) => {
  switch (shopAssetName) {
    case "attackSpeed":
      return 100;
    case "attack":
      return 10;
    case "deffense":
      return 5;
    case "healthPoints":
      return 30;
    default:
      return 0;
  }
};

export const getShopPrice = () => {
  return 500;
};
