export const convertTemp = (temp, sansDegree) => {
    return `${((temp - 273.15) * (9/5) + 32).toFixed(0)}${!sansDegree ? "" : "°"}`;
}
