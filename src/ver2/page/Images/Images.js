import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Images.css";

import Loading from "../../../Loading/Loading";
import Paginations from "../../components/Paginations";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import filterApp from "../../components/image/filter-app.png";
import Header from "../../components/Header/Header";
import { ImageItem } from "../../components/ImageItem/ImageItem";
import { AlbumItem } from "../../components/AlbumItem/AlbumItem";

const Images = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("Albums");
  const [listItems, setListItems] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages =
    category === "Albums" ? Math.ceil(listItems.length / 20) : 23;

  const categoryList = ["Albums", "Images"];

  const getData = async () => {
    setIsLoading(true);
    try {
      const albumsApi = `https://api.mangasocial.online/get/list_image/1?album=${1}`;
      const imagesApi = `https://api.mangasocial.online/get/list_image/1?album=${page}`;
      const response = await axios.get(
        category === "Images" ? imagesApi : albumsApi
      );

      if (response.status === 200) {
        setListItems(response.data.list_sukien_video);
        // console.log("list items", response.data);
      }
    } catch (error) {
      toast.error(error.message);
      console.log({ error: error.message });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page, category]);

  const handleChangeCategory = (e) => {
    setPage(1);
    setCategory(e.target.value);
  };

  return (
    <>
      <Header
        data={{
          title: "images",
          myCollection: true,
          download: true,
        }}
      />
      <div className="max-h-[120vh] overflow-y-scroll rounded-lg">
        <div className="image-list-main">
          <div className="image-list-category flex justify-between items-center">
            <div>
              <div className="image-list-filterIcon">
                <img src={filterApp} alt="" />
              </div>

              <Select
                className="image-list-select"
                value={category}
                onChange={handleChangeCategory}
              >
                {categoryList.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-white text-4xl font-semibold">Page:</span>
              <Paginations
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            </div>
          </div>

          {category === "Images" ? (
            <ul className="image-list-content max-h-[80vh] overflow-y-scroll">
              {listItems &&
                listItems.map((image, index) => (
                  <ImageItem {...image} type="source" key={index} />
                ))}
            </ul>
          ) : (
            <ul className="image-list-content max-h-[80vh] overflow-y-scroll">
              {listItems &&
                listItems
                  .slice(20 * (page - 1), 20 * page)
                  .map((album, index) => (
                    <AlbumItem {...album} type="source" key={index} />
                  ))}
            </ul>
          )}
        </div>
      </div>
      <Loading status={isLoading} />
    </>
  );
};

export default Images;
