function arrayOperations(arr, start, deleteCount, items) {
  let copy = [...arr];
  let removed = copy.splice(start, deleteCount, ...items);
  return {
    original: arr,
    sliced: arr.slice(start, start + deleteCount),
    spliced: copy,
    removed
  };
}

console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));
console.log(arrayOperations(["a", "b", "c", "d"], 0, 1, ["x"]));