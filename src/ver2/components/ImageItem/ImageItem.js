import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ImageItem.css";

export const ImageItem = (props) => {
  const { type } = props;

  return (
    <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 component-image">
      <div className="component-image-wrap relative">
        <Link
          to={
            type === "swap"
              ? `/images/detail-image/${props.id_saved}`
              : `/images/make-image?link=${props.image}&id=${props.id}`
          }
        >
          <div className="h-[450px]">
            <img
              src={type === "swap" ? props.link_da_swap : props.image}
              alt={type}
              className="w-full h-full bg-cover"
            />
          </div>

          <div className="component-image-link absolute bottom-0 right-0 w-full">
            <h3>{type === "swap" ? props.ten_su_kien : props.thongtin}</h3>
            {type === "swap" && <p className="">{props.thoigian_sukien}</p>}
          </div>
        </Link>
      </div>
    </li>
  );
};
