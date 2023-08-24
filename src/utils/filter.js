export function compareItemsByPrice(item1, item2) {
  const price1 = item1?.card?.card?.info?.price;
  const price2 = item2?.card?.card?.info?.price;

  return price2 - price1; // descending order return price2 - price1;
}
export function compareItemsByPriceHL(item1, item2) {
  const price1 = item1?.card?.card?.info?.price;
  const price2 = item2?.card?.card?.info?.price;

  return price1 - price2; // This will sort in ascending order
}
export function sortDeliveryTime(item1, item2) {
  const time1 = item1?.card?.card?.restaurant?.info?.sla?.deliveryTime;
  const time2 = item2?.card?.card?.restaurant?.info?.sla?.deliveryTime;
  return time1 - time2; // This will sort in ascending order;
}

export function ratingHL(item1, item2) {
  const Rating1 = item1?.card?.card?.restaurant?.info?.avgRating;
  const Rating2 = item2?.card?.card?.restaurant?.info?.avgRating;
  return Rating2 - Rating1; // This will sort in descending order;
}
