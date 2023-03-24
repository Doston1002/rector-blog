import { lazy } from "react";

const Navbar = lazy(() => import("./header/Navbar"));
const Hero = lazy(() => import("./hero/Hero"));
const Footer = lazy(() => import("./footer/Footer"));
const Layout = lazy(() => import("./layout/Layout"));
const AdminLayout = lazy(() => import("./layout/AdminLayout"));
const NewsCard = lazy(() => import("./news_card/NewsCard"));
const Researcher = lazy(()=> import ("./researcher/Researcher"))
const ImageGalary = lazy(() => import("./image_galary/ImageGalary"));
const MoreDetails = lazy(() => import("./more_details/MoreDetails"));
const RecommendContent = lazy(() => import("./recommend_content/RecommendContent"));
const Sidebar = lazy(() => import("./admin/sidebar/Sidebar"));
const LoginRegister = lazy(() => import("./admin/login_register/LoginRegister"));
const ProtectedRoute = lazy(() => import("./admin/protected_route/ProtectedRoute"));
const Loader = lazy(() => import("./loader/Loader"));
const SkeletonPost = lazy(() => import("./skeleton_loader/SkeletonPost"));
const ErrorFallback = lazy(() => import("./error_fallback/ErrorFallback"))
const TextEditor = lazy(() => import("./admin/text_editor/TextEditor"))
const Form = lazy(() => import("./admin/form/Form"))
const FormHeader = lazy(() => import("./admin/form_header/FormHeader"))
const Table = lazy(() => import("./admin/table/Table"))
const EditForm = lazy(() => import("./admin/edit_form/EditForm"))

export {
  Navbar,
  Hero,
  Footer,
  Layout,
  NewsCard,
  Researcher,
  ImageGalary,
  MoreDetails,
  RecommendContent,
  Sidebar,
  AdminLayout,
  LoginRegister,
  ProtectedRoute,
  Loader,
  SkeletonPost,
  ErrorFallback,
  TextEditor,
  Form,
  FormHeader, 
  Table,
  EditForm
};
