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

export const customerPoints = (transactions) => {

    if (!transactions || transactions.length === 0) {
        return {}
    }

    return transactions.reduce((acc, val) => {
        const month = new Date(val.date).getMonth();
        acc[month] = (acc[month] || 0) + Points(val.amount);
        return acc;
    }, {})
}