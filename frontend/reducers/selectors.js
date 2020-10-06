export const entityAsArray = entity => (
    Object.keys(entity).map(key => entity[key])
);
