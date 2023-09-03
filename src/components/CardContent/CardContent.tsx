import {FC} from "react";
import {ImgContentInnerDiv} from "../ImgContentInnerDiv/ImgContentInnerDiv.tsx";
import {ReactComponent as Info} from "../../assets/Icon/info.svg";

type CardContentProps = {
  name: string;
  photo: string;
  specialization?: string;
  directions?: string;
  description?: string;
  about_me?: string;
};
export const CardContent: FC<CardContentProps> = ({name, photo, about_me,specialization, directions, description}) => {
  return (
    <div className=" w-full h-full rounded-3xl relative">
      <ImgContentInnerDiv img={photo} className="rounded"/>
      <div className="rounded-b-lg absolute p-4 w-full bottom-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-end">
              <h2 className="text-xl font-semibold mr-3">{name}</h2>
              <h3 className="font-semibold text-xl">{specialization}</h3>
            </div>
            <div className="block">
              <h4 className="block">{directions}</h4>
            </div>
          </div>
          <button
            className="btn-none outline-0 focus:outline-none outline-inherit  border-none"
            type="button">
            <Info/>
          </button>
        </div>
        <div className="overflow-hidden h-24 ">
          {description || about_me}
        </div>
      </div>
    </div>
  )
}
