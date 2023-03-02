import React from "react";
import "./Dashboard.css";
import user from "../assets/user.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Categoris from "../components/Categoris";
import ThisWeekSpend from "../components/ThisWeekSpend";
import LastMonthActivities from "../components/LastMonthActivities";
const Dashboard = () => {
  return (
    <div className="dashboard-container home-page">
      <div className="add-expense">
        <button>+ Add Expense</button>
        <img src={user} alt="" />
        <MdOutlineKeyboardArrowDown />
      </div>

      <div className="weekly-spend-categories-container">
        {/* This week spend */}
        <ThisWeekSpend />

        {/* categoris */}
        <Categoris />
      </div>

      {/* Last month activities */}
      <LastMonthActivities />
    </div>
  );
};

export default Dashboard;
