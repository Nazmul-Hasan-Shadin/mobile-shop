import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import NewProduct from "./NewProduct";


const NewProducts = () => {
    const axiosPublic=useAxiosPublic()
    const {data:newProduct, isLoading,refetch}=useQuery({
        queryKey: ['newProduct'],
        queryFn: async ()=>{
            const newProducts= await axiosPublic.get('/api/v1/phones')
            return newProducts.data
        }
    })

    console.log(newProduct);
    return (
        <div className="my-6  grid place-content-center  ">
            <h2 className="text-2xl py-3">New Product</h2>
         <div className="flex gap-3 place-items-center" >
            {
                newProduct?.slice(1,4).map((pd,index)=> <NewProduct pd={pd} key={index}></NewProduct> )
            }
        </div>
        </div>
    );
};

export default NewProducts;