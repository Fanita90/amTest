// Action
//export function suma(valor) {
//  return { type: "SUMA", payload: valor };
//}

//export function resta(valor) {
//  return { type: "RESTA", payload: 5 };
//}

//export function multiplicacion(valor) {
//  return { type: "MULTIPLICACION", payload: 5 };
//}

export function addToFavorites(character) {
  return { type: "ADD_TO_FAVORITES", payload: character };
}

export function removeFromFavorites(character) {
  return { type: "REMOVE_FROM_FAVORITES", payload: character };
}
