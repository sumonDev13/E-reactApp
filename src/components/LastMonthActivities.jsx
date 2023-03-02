import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiHome } from "react-icons/ci";
import { AiFillCar } from "react-icons/ai";

const LastMonthActivities = () => {
  return (
    <div className="last-month-activities">
      <div className="activities-heading">
        <div>
          <h4 className="subheading">Last Month Activities</h4>
          <span className="activities-sub-heading">Monthly Activities</span>
        </div>

        <div>
          <p>View All</p>
        </div>
      </div>
      <div>
        <span>categories Names</span>
        <span>Transactions</span>
        <span>Dates</span>
        <span>Amount</span>
      </div>

      <div className="monthly-activities">
        <div>
          <CiHome className="home-icon" />
          <h4>Home Electricity Bill</h4>
        </div>

        <div>
          <span>Successful</span>
        </div>

        <div>
          <h5>27 / 10 /2021</h5>
        </div>
        <div>
          <h5>$540</h5>
        </div>
      </div>

      <div className="monthly-activities">
        <div>
          <HiOutlineShoppingCart className="cart-icon" />
          <h4>Home Electricity Bill</h4>
        </div>

        <div>
          <span>Successful</span>
        </div>

        <div>
          <h5>27 / 10 /2021</h5>
        </div>

        <div>
          <h5>$540</h5>
        </div>
      </div>

      <div className="monthly-activities">
        <div>
          <AiFillCar className="car-icon" />
          <h4>Home Electricity Bill</h4>
        </div>

        <div>
          <span>Successful</span>
        </div>

        <div>
          <h5>27 / 10 /2021</h5>
        </div>

        <div>
          <h5>$540</h5>
        </div>
      </div>
    </div>
  );
};

export default LastMonthActivities;
