export default async function ProductDetails({ params }:{
    params: Promise<{productid: string}>
}){
    const productId = (await params).productid
    return <h1>Details{productId}</h1>;
}