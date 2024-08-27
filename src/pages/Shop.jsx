import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Basket from "../assets/images/basket.svg";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import { SavedProductsContext } from "../Context/Context";
import { useAxios } from "../hook/useAxios";
import Search from '../assets/images/search.svg'

function Shop() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const { savedItems, dispatch } = useContext(SavedProductsContext);
    const navigate = useNavigate();

    useEffect(() => {
        useAxios().get("")
            .then((res) => {
                setTimeout(() => {
                    setUsers(res.data);
                }, 1000);
            })
            .catch((error) => {
                console.error("Failed to fetch products:", error);
                toast.error("Failed to load products");
            });
    }, []);

    const handleItemClick = (item) => {
        navigate("/about", { state: { item } });
    };

    const handleSaveItem = (item) => {
        const isItemSaved = savedItems.some(
            (savedItem) => savedItem.id === item.id
        );

        if (isItemSaved) {
            toast.error("Product is already saved");
        } else {
            dispatch({ type: "ADD_ITEM", payload: item });
            toast.success("Saved");
        }
    };

    const filteredUsers = users.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Header savedItemCount={savedItems.length} />
            <label className="relative w-[1300px] mx-auto flex mt-[20px]">
                <input
                    type="text"
                    placeholder="Search . . ."
                    className="w-full p-[10px] px-[18px] rounded-xl outline-none focus:shadow-lg focus:shadow-blue-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img src={Search} alt="Search" width={22} height={22} className="absolute top-[10px] right-[10px]"/>
            </label>
            <ul className="flex space-x-[20px] flex-wrap mt-[20px] w-[1300px] mx-auto space-y-[20px] pb-[40px]">
                {filteredUsers.length ? (
                    filteredUsers.map((item) => (
                        <li
                            key={item.id}
                            className="w-[300px] shadow text-white h-[400px] mt-[20px] ml-[20px] border-[1px] flex flex-col justify-between items-center rounded-lg border-white p-[10px] cursor-pointer"
                        >
                            <Toaster position="top-center" reverseOrder={false} />
                            <p className="font-semibold text-center">
                                {item.title}
                            </p>
                            <img
                                src={item.images[0]}
                                onError={(e) =>
                                    (e.target.src =
                                        "https://placehold.co/600x600?text=Not+Found")
                                }
                                alt="Product"
                                className="rounded-lg mx-auto mt-[10px] h-[250px]"
                                onClick={() => handleItemClick(item)}
                            />
                            <div className="flex gap-[50px] items-center pb-[7px]">
                                <span className="border-[1px] border-white p-1 rounded-lg">
                                    {item.price}$
                                </span>
                                <button
                                    onClick={() => handleSaveItem(item)}
                                    className="border-[1px] border-white p-1 rounded-lg"
                                >
                                    <img
                                        src={Basket}
                                        alt="basket"
                                        className=""
                                    />
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <div className="w-screen h-screen flex items-center justify-center">
                        <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#4fa94d"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                )}
            </ul>
        </>
    );
}

export default Shop;
