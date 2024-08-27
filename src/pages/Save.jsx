import React, { useContext } from "react";
import { SavedProductsContext } from "../Context/Context";
import Back from "../assets/images/back.svg";
import { useNavigate } from "react-router-dom";

function Save() {
    const { savedItems, dispatch } = useContext(SavedProductsContext);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch({ type: "DELETE_PRODUCT", payload: id });
    };

    return (
        <div className="pb-[30px]">
            <button
                onClick={() => navigate(-1)}
                className="ml-[40px] mt-[30px]"
            >
                <img
                    src={Back}
                    alt="Back"
                    width={30}
                    height={30}
                    className="text-white"
                />
            </button>
            <h1 className="text-white text-center text-[35px] my-[20px]">
                Saved Products
            </h1>
            <ul className="flex flex-wrap mx-auto w-[1300px]">
                {savedItems.length > 0 ? (
                    savedItems.map((item, index) => (
                        <li
                            key={index}
                            className="w-[300px] shadow text-white h-[450px] mt-[20px] ml-[20px] border-[1px] flex flex-col justify-between items-center rounded-lg border-white p-[10px] cursor-pointer"
                        >
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="relative right-[120px] border border-white px-2 rounded-lg my-[7px]"
                            >
                                <span className="text-[13px]">X</span>
                            </button>
                            <h2 className="text-center">{item.title}</h2>
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="w-full h-[300px] rounded-lg"
                                onError={(e) =>
                                    (e.target.src =
                                        "https://placehold.co/600x600?text=Not+Found")
                                }
                            />
                            <p className="border-[1px] border-white p-1 rounded-lg">
                                {item.price}$
                            </p>
                        </li>
                    ))
                ) : (
                    <div className="absolute left-[700px] top-[300px] text-[35px]">
                        <p className="text-white">No products saved yet.</p>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default Save;
