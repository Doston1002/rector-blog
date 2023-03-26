import { ImageGalary} from "../../components";
import { useTranslation } from "react-i18next";
const PhotoNews = () => {
  const {t} = useTranslation()
 
  return (
    <div>
      <h1 className="container mx-auto w-[90%] my-10 font-semibold text-3xl">
      {t("Header.photoNews")}
      </h1>

      <div className="container mx-auto my-10  w-[90%] flex justify-between gap-10 lg:flex-row flex-col">
        <div className="w-full gap-5">
          <ImageGalary />
        </div>
        {/* <div className="lg:w-3/12 w-full">
          <RecommendContent
            inner={true}
            video={false}
            url={"photo/all"}
            category={"c"}
            ownRoute={"/photo-news"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default PhotoNews;
