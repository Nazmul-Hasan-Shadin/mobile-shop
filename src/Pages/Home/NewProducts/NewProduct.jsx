import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../AuthProvider/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const NewProduct = ({ pd }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { img, name, desc, price } = pd;
  const shortedDesc = desc.substring(0, 50);
  const navigate= useNavigate()

  const cartInfo = {
    cartId: pd._id,
    email: user?.email,
  };

  const handleAddToCart = async (id) => {
    if (user) {
      try {
        const postCart = await axiosPublic.post("/api/v1/addto-cart", cartInfo);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` ${name} Added To your Cart`,
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.log(error);
      }
    }

    else{
      Swal.fire({
        title: "You are not logged in",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to the login
         navigate('/login'  )
        }
      });
     }


    }
  

  return (
    <div className="card  gap-9 flex-row  card-compact  bg-base-100 shadow-xl">
      <figure className="w-36">
        <img className="" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title  ">{name}</h2>
        <p>{shortedDesc}</p>
        <h3 className="text-xl">$ {price}</h3>
        <div className="card-actions justify-start">
          <button
            onClick={() => handleAddToCart(pd._id)}
            className="btn text-white bg-[#68217A]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
