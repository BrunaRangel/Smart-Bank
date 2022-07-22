import React from "react";

import Item from "../Item";
import ImageFilter from "../ImageFilter";

//UI
import {Items} from "../../Components/UI";

export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};