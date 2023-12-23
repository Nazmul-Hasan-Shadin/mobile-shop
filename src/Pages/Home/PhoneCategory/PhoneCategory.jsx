import { FcAndroidOs } from "react-icons/fc";
const PhoneCategory = () => {
    
    return (
        <div className="w-96 text-white p-3 bg-[#8BC017] justify-center">
            <div className="flex gap-2 items-center ">
                <div>
                <FcAndroidOs className="text-8xl " style={{color:'white'}} />
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