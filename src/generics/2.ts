type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, keyof AllType>>(
  top: T,
  bottom: T
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject = {
  name: "TopName",
  position: 1,
  color: "Red",
  weight: 50,
};

const bottomObject = {
  name: "BottomName",
  position: 2,
  color: "Blue",
  weight: 75,
};

const result = compare(topObject, bottomObject);
console.log(result);
