import transactions from "../../transactions.json"

export const fetchTransaction = () => {
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(transactions);
    },1000)
   }) 
}
