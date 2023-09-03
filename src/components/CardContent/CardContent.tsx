import {FC, useState} from "react";
import {ImgContentInnerDiv} from "../ImgContentInnerDiv/ImgContentInnerDiv.tsx";
import {ReactComponent as Info} from "../../assets/Icon/info.svg";


const getStack = (technologyStack, requirements) => {
  const lexiocon = ' Стэк технологий: ';
  if (requirements?.length > 0) {
    return `${lexiocon}  ${requirements?.join(' / ')}`
  } else if (technologyStack?.length > 0) {
    return `${lexiocon}  ${technologyStack?.join(' / ')}`
  }
}

type CardContentProps = {
  name: string;
  photo: string;
  specialization?: string;
  directions?: string;
  description?: string;
  aboutMe?: string;
  requirements?: string[];
  payFork?: string;
  technologyStack?: string[];
  jobTitle?: string;

};
export const CardContent: FC<CardContentProps> = ({
                                                    payFork,
                                                    name,
                                                    photo,
                                                    aboutMe,
                                                    specialization,
                                                    directions,
                                                    description,
                                                    requirements,
                                                    technologyStack,
                                                    jobTitle,
                                                  }) => {

  const [detailinfo, setDetailinfo] = useState(false);

  const detailInfoControl = () => setDetailinfo(prevState => !prevState)


  return (
    <div className=" w-full h-full relative rounded-3xl border-blue-200  ">
      <ImgContentInnerDiv
        img={photo?.replace('https://cloud.mail.ru/public/LdCP/Exo9vEuh1/', 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/LdCP/Exo9vEuh1/')}
        className="rounded-2xl border-4"
      />
      <div className=" absolute p-4 w-full bottom-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-end">
              <h2 className="text-xl font-semibold mr-3 text-white">{name || jobTitle}</h2>
              <h3 className="font-semibold text-xl text-white">{specialization}</h3>
            </div>
            <div className="block">
              <div className="text-white">{technologyStack?.join(' / ') || requirements?.join(' / ')} {payFork && `${payFork}$`}</div>
              <h4 className="block text-white">{directions}</h4>
            </div>
          </div>
          <button
            className="btn-none outline-0 focus:outline-none outline-inherit  border-none"
            type="button"
            onClick={detailInfoControl}>
            <Info/>
          </button>
        </div>
        {!detailinfo && description || aboutMe &&
          <>
            <div className="overflow-hidden h-12 text-white">
              {description || aboutMe}
            </div>
            <button
              type="button" onClick={detailInfoControl}
              className="btn-none outline-0 focus:outline-none outline-inherit  border-none underline"
            >
              Показать всю информацию
            </button>
          </>

        }
      </div>
      {detailinfo &&
        <div className="bg-white text-black relative  rounded-xl p-3 border-blue-200 ">
          <div>
            {getStack(technologyStack, requirements)}
          </div>
          {description || aboutMe}
        </div>
      }
    </div>
  )
}
