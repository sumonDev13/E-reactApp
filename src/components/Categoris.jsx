import React from "react";
import { CiHome } from "react-icons/ci";
import { CgGames, CgFileDocument } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { BsKey, BsCameraVideo } from "react-icons/bs";

const Categoris = () => {
  const categories = [
    {
      icon: <CiHome />,
      category: "Home",
    },
    {
      icon: <AiFillCar />,
      category: "Gas",
    },
    {
      icon: <BsKey />,
      category: "Security",
    },
    {
      icon: <BsCameraVideo />,
      category: "Videos",
    },
    {
      icon: <CgGames />,
      category: "Games",
    },
    {
      icon: <CgFileDocument />,
      category: "Papers",
    },
    {
      icon: <HiOutlineShoppingCart />,
      category: "Shops",
    },
    {
      icon: <AiFillCar />,
      category: "Travel",
    },
    {
      icon: <AiFillCar />,
      category: "Service",
    },
  ];
  return (
    <div className="categories-section">
      <h4 className="subheading">Categories</h4>

      <div className="categoris-container">
        {categories.map((category) => (
          <div>
            {category.icon}
            <span>{category.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoris;
