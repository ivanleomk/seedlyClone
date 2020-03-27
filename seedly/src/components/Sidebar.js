import React from 'react';

import '../static/css/sidebar.css'

import TagList from './tagList';

const Sidebar = () => {
  const fake_tags = ["COVID-19", "COVID-19 Refunds", "FIRE Movement","MileLion","SG Budget Babe", 'Stocks Discussion', "Investments", "Insurance", "Property", "Credit Card", "Savings", "Lifestyle", "Family", "Retirement", "Career", "Loans", "Savings Account"," Payments", "Entrepreneurship"," Multi Currency Cards"]

  const default_setting = ["All Questions"]
  return (
          <div className = "sidebarBody">
            <div>
                <TagList tags={default_setting} title = ""/>
            </div>
            <div className = "combinedTags" style = {{paddingTop: "20px"}}>
                <TagList tags={fake_tags} title = "Featured Topics"/>
            </div>
          </div>
      )};

export default Sidebar;