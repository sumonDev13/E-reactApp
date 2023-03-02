import React from "react";
import { AiOutlineSetting, AiFillCar, AiOutlineStar } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { BiLogOutCircle } from "react-icons/bi";
import { BsKey } from "react-icons/bs";
import logo from "../assets/logo.png";
import wallet from "../assets/Wallet.png";
import bg from "../assets/Decoration.png";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navLinks = [
    {
      icon: <RxDashboard />,
      path: "/",
    },
    {
      icon: <AiOutlineStar />,
      path: "/ratings",
    },
    {
      icon: <CgFileDocument />,
      path: "/bar",
    },
    {
      icon: <HiOutlineDocumentReport />,
      path: "/reports",
    },
    {
      icon: <AiOutlineSetting />,
      path: "/settings",
    },
  ];

  return (
    <div className="sidebar-container">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul>
          {navLinks.map((link) => (
            <li>
              <NavLink to={link.path} activeClassName="active">
                {link.icon}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="logout-icon">
          <BiLogOutCircle />
        </div>
      </div>

      <div>
        <div className="expense-manager">
          <h5>Kösten</h5>
          <span>Expense manager</span>
        </div>

        <div className="current-balance">
          <p>Current Balance</p>
          <div>
            <img src={wallet} alt="" />
            <div>
              <h4>$55,569</h4>
              <span>Total Expense</span>
            </div>
          </div>
          <div className="current-balace-bg">
            <img src={bg} alt="" />
          </div>
        </div>

        <div className="latest-activity">
          <span>Latest Activity</span>
          <div className="activity todays-activity">
            <div>
              <span>Today</span>
              <div>
                <div>
                  <BsKey />
                  <h6>Antivirus</h6>
                </div>
                <h5>-$500</h5>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <AiFillCar />
                  <h6>Re-filled</h6>
                </div>
                <h5>-$200</h5>
              </div>
            </div>
          </div>
          <div className="activity yesterday-activity">
            <div>
              <span>Yesterday</span>
              <div>
                <div>
                  <BsKey />
                  <h6>IP cams</h6>
                </div>
                <h5>-$300</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
