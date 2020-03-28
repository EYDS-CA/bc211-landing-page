import React from "react";
import icon_register from '@/assets/icon_register.svg';
import icon_alert from '@/assets/icon_alert.svg';

const icons = {
  register: icon_register,
  alert: icon_alert,
};

const Panel = ({ children, icon, title }) => (
  <div className="panel">
    <img width="100" height="100" src={icons[icon]}/>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
);

export default Panel;
