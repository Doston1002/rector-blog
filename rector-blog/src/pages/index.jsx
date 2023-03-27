import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const LatestNews = lazy(() => import("./latest_news/LatestNews"));
const ActualNews = lazy(() => import("./actual_news/ActualNews"));
const Researcher =lazy(() => import("./reception/Reception"));
const VideoNews = lazy(() => import("./video_news/VideoNews"));
const PhotoNews = lazy(() => import("./photo_news/PhotoNews"));
const FourZeroFour = lazy(() => import("./404/404.jsx"));
const Dashboard = lazy(() => import("./admin/dashboard/Dashboard"));
const News = lazy(() => import("./admin/news/News"));
const Users = lazy(() => import("./admin/users/Users"));
const Banner = lazy(() => import("./admin/banner/Banner"));
const Media = lazy(() => import("./admin/media/Media"));
const Application = lazy(() => import("./admin/application/Application"));

export {
  Home,
  LatestNews,
  ActualNews,
  Researcher,
  VideoNews,
  PhotoNews,
  FourZeroFour,
  Dashboard,
  News,
  Users,
  Banner,
  Media,
  Application
};
