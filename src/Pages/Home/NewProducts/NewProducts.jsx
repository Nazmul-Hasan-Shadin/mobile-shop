import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import NewProduct from "./NewProduct";
import useAllPhones from "../../../hooks/useAllPhones";


const NewProducts = ({isAllProduct}) => {
  const [newProduct,isLoading,refetch]=useAllPhones()

    console.log(newProduct);
    return (
        <div className="my-6  grid   ">
           
            
              {  isAllProduct ?       <h2 className="text-3xl font-bold py-3">Our Phones</h2>: <h2 className="text-3xl font-bold py-3">New Product</h2>}
            
         <div className="grid  grid-cols-1 lg:grid-cols-3 gap-3 place-content-center" >

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