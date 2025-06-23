const {PrismaClient}=require('@prisma/client')




exports.create=async(req,res)=>{
    //code
    try{
        //code
        const listProducts = await Prisma.product.findMany()
        res.send(listProduct);
        const {name,price}= req.body
        const newProduct = await PrismaClient.product.create({
            data:{
                name:name,
                price:price,
            },
        });
        res.send("Hello Controller Create")
    }catch(err){
        //err
    console.log(err)
    }
    exports.list=async(req,res)=>{
try{
    //code
    res.send('Hello Controller delete')
}catch(err){
    //err
    console.log(err)

}
    }

}