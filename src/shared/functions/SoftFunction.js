// Filtre de Trie de données
export function reverseInDatas(data) {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time || a.id);
    const bInt = parseInt(b.time || b.id);
    if (aInt < bInt) return 1;
    if (aInt === bInt) return 0;
    if (aInt > bInt) return -1;
  });
}
