import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import NewProduct from "./NewProduct";


const NewProducts = ({isAllProduct}) => {
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
        <div className="my-6  grid   ">
           
            
              {  isAllProduct ?       <h2 className="text-3xl font-bold py-3">Our Phones</h2>: <h2 className="text-3xl font-bold py-3">New Product</h2>}
            
         <div className="grid grid-cols-3 gap-3 place-content-center" >

            {/* conditallnally reuse component based on isAllProduct props  */}

            {
             isAllProduct ?     newProduct?.slice(4).map((pd,index)=> <NewProduct pd={pd} key={index}></NewProduct> ):
                 newProduct?.slice(1,4).map((pd,index)=> <NewProduct pd={pd} key={index}></NewProduct> )
            }
           

        </div>
        </div>
    );
};

export default NewProducts;