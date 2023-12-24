
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../AuthProvider/AuthContext";
import { useContext } from "react";


const NewProduct = ({pd}) => {
  const {user}=  useContext(AuthContext)
  const axiosPublic= useAxiosPublic()
    const {img,name,desc,price}=pd;
    const shortedDesc= desc.substring(0,50)
     
      const cartInfo={
         cartId: pd._id,
         email: user?.email
      }
    
      const  handleAddToCart=async(id)=>{
              
              try {
          const postCart= await axiosPublic.post('/api/v1/addto-cart',cartInfo)
          console.log(postCart);
              } catch (error) {
                console.log(error);
              }       
 


      }


    return (
        <div className="card  gap-9 flex-row  card-compact w-96 bg-base-100 shadow-xl">
        <figure className="w-36" ><img className="" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortedDesc}</p>
          <h3 className="text-xl">$ {price}</h3>
          <div className="card-actions justify-start">
            <button onClick={()=>handleAddToCart(pd._id)} className="btn text-white bg-[#68217A]">Add to  Cart</button>
          </div>
        </div>
      </div>
    );
};

export default NewProduct;