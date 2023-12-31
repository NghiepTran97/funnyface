import { Route } from "react-router-dom";

import DetailVideo from "../ver2/page/Videos/DetailVideo/DetailVideo";
import MakeVideo from "../ver2/page/Videos/MakeVideo/MakeVideo";
import MyVideo from "../ver2/page/Videos/MyVideo/MyVideo";
import Videos from "../ver2/page/Videos/Videos";

import DetailImage from "../ver2/page/Images/DetailImage/DetailImage";
import DetailAlbum from "../ver2/page/Images/DetailAlbum/DetailAlbum";
import MakeImage from "../ver2/page/Images/MakeImage/MakeImage";
import MakeAlbum from "../ver2/page/Images/MakeAlbum/MakeAlbum";
import MyImage from "../ver2/page/Images/MyImage/MyImage";
import Images from "../ver2/page/Images/Images";

import EventAdd from "../ver2/page/Events/EventAdd/EventAdd";
import EventResult from "../ver2/page/Events/EventResult/EventResult";
import Events from "../ver2/page/Events/Events";

import CreateImage from "../ver2/page/CreateImage/CreateImage";
import CreateVideo from "../ver2/page/CreateVideo/CreateVideo";
import GenBaby from "../ver2/page/GenBaby/GenBaBy";
import Love from "../ver2/page/Love/Love";

import NotFound from "../ver2/components/NotFound";
import TiktokScandal from "../ver2/tiktok-scandal";
import YoutubeScandal from "../ver2/YoutubeScandal";

import Profile from "../ver2/components/Profile";
import HomeMiddleware from "../middleware/HomeMiddleware";

export const publicRoutes = (
  <Route path="" element={<HomeMiddleware />}>
    <Route path="/events">
      <Route index element={<Events />} />
      <Route path=":id/:stt" element={<EventResult />} />
      <Route path="add" element={<EventAdd />} />
    </Route>

    <Route path="/love" element={<Love />} />
    <Route path="/videos">
      <Route index element={<Videos />} />
      <Route path="make-video" element={<MakeVideo />} />
      <Route path="detail-video/:id" element={<DetailVideo />} />
      <Route path="my-video" element={<MyVideo />} />
    </Route>

    <Route path="/images">
      <Route index element={<Images />} />
      <Route path="make-image" element={<MakeImage />} />
      <Route path="make-album" element={<MakeAlbum />} />
      <Route path="detail-image/:id" element={<DetailImage />} />
      <Route path="detail-album/:id" element={<DetailAlbum />} />
      <Route path="my-image" element={<MyImage />} />
    </Route>

    <Route path="/create-video" element={<CreateVideo />} />
    <Route path="/create-image" element={<CreateImage />} />
    <Route path="/genbaby" element={<GenBaby />} />

    <Route path="/youtube/:idVideo" element={<YoutubeScandal />} />
    <Route path="/tiktok/:idVideo" element={<TiktokScandal />} />
    <Route path="*" exact={true} element={<NotFound />} />

    <Route path="/profile" element={<Profile />} />
  </Route>
);
