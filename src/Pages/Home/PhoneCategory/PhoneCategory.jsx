import { FcAndroidOs } from "react-icons/fc";
const PhoneCategory = ({data}) => {
     
    return (
        <div className={`w-96 text-white p-3 px-7 bg-${data?.color} justify-center`} style={{backgroundColor:data?.color}}>
            <div className="flex gap-2 items-center ">
                <div className="text-7xl ">
                {
                    data.icon
                  }
                </div>
                <div>
                 <h2 className="text-3xl ">Android Phone</h2>
                </div>
            </div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet perspiciatis numquam.</p>
        </div>
    );
};

export default PhoneCategory;