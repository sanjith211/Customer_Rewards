import { Points, customerPoints } from "../rewards/Points";

test('Points',()=>{
    expect(Points(120)).toBe(90);
    expect(Points(80)).toBe(30);
    expect(Points(51)).toBe(1);
})

test('customerPoints',()=>{
    const transactions=[
        {date:"2024-05-14",amount:83},
        {date:"2024-06-07",amount:111}
    ];
    const result=customerPoints(transactions);
    expect(result).toEqual({
        4: 33,
        5: 72
    })
})