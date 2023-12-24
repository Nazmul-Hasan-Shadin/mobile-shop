

const NewProduct = ({pd}) => {
    const {img,name,desc,price}=pd;
    const shortedDesc= desc.substring(0,50)
    console.log(shortedDesc);
    return (
        <div className="card  gap-9 flex-row  card-compact w-96 bg-base-100 shadow-xl">
        <figure className="w-36" ><img className="" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortedDesc}</p>
          <h3 className="text-xl">$ {price}</h3>
          <div className="card-actions justify-start">
            <button className="btn text-white bg-[#68217A]">Add to  Cart</button>
          </div>
        </div>
      </div>
    );
};

export default NewProduct;