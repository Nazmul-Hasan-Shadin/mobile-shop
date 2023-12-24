import { FcAndroidOs } from "react-icons/fc";
const PhoneCategory = ({data}) => {
     
    return (
        <div className={`w- text-white p-3 px-7 bg-${data?.color} justify-center`} style={{backgroundColor:data?.color}}>
            <div className="flex gap-7 lg:gap-2 items-center ">
                <div className="text-7xl ">
                {
                    data.icon
                  }
                </div>
                <div>
                 <h2 className=" text-2xl lg:text-3xl ">Android Phone</h2>
                </div>
            </div>

            <p>Find latest official, unofficial mobile phone, smartphone, android, feature phone etc. updated prices in Banglades.</p>
        </div>
    );
};

export default PhoneCategory;