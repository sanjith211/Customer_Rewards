export const Points = (amount) => {
    let point = 0;
    if (amount > 100) {
        point += (amount - 100) * 2;
        amount = 100;
    }
    if (amount > 50) {
        point += (amount - 50) * 1;
    }
    return point;
}
