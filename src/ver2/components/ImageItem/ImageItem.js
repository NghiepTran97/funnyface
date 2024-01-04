import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ImageItem.css";

export const ImageItem = (props) => {
  const videoRef = useRef();
  const [height, setHeight] = useState("650px");
  const { type } = props;

  useEffect(() => {
    const width = videoRef.current.offsetWidth;
    setHeight(Math.trunc(width * 1.7));
  }, [videoRef.current]);

  return (
    <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 component-image">
      <div className="component-image-wrap">
        <Link
          to={
            type === "image swap"
              ? `/images/detail-image/${props.id_video}`
              : `/images/make-image?link=${props.link_video}&id=${props.id}`
          }
        >
          <video style={{ height }} controls ref={videoRef}>
            <source
              src={
                type === "image swap" ? props.link_vid_swap : props.link_video
              }
              type="video/mp4"
            />
          </video>

          <div className="component-image-link">
            <h3>
              {type === "image swap" ? props.ten_su_kien : props.noi_dung}
            </h3>
            {type === "image swap" && (
              <p className="">{props.thoigian_taosk}</p>
            )}
          </div>
        </Link>
      </div>
    </li>
  );
};
