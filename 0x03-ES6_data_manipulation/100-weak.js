export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const Data = weakMap.get(endpoint);
    if (Data >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (Data + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
