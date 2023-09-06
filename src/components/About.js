import { useNavigate, useParams } from "react-router-dom";

export function About() {
    const { details } = useParams();

    const productData = JSON.parse(localStorage.getItem('products'))
    const productDisplay = productData.data.filter((el) => el._id === details)[0];

    return (
        <div style={{ margin: "10%" }}>
            <div className="w-full max-w-4xl m-auto md:flex bg-slate-100">
                <div className="max-w-sm  overflow-hidden w-full">

                    <img src={productDisplay.product_image} style={{ width: 250, height: 250 }} />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
                        {productDisplay.title}
                    </h3>
                    <p className=" text-slate-500  font-medium text-2xl">{productDisplay.category}</p>
                    <p className=" font-bold md:text-2xl">
                        <span className="text-red-500 ">₹</span>
                        <span>{productDisplay.price}</span>
                    </p>

                    <div>
                        <p className="text-slate-600 font-medium">Description : </p>
                        <p>{productDisplay.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

