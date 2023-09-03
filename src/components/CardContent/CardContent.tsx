import {FC, useState} from "react";
import {ImgContentInnerDiv} from "../ImgContentInnerDiv/ImgContentInnerDiv.tsx";
import {ReactComponent as Info} from "../../assets/Icon/info.svg";


const getStack = (technologyStack, requirements) => {
  const lexiocon =' Стэк технологий: ';
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
  about_me?: string;
  requirements?: string[];
  payFork?: string;
  technologyStack?: string[];

};
export const CardContent: FC<CardContentProps> = ({
                                                    payFork,
                                                    name,
                                                    photo,
                                                    about_me,
                                                    specialization,
                                                    directions,
                                                    description,
                                                    requirements,
                                                    technologyStack,
                                                  }) => {

  const [detailinfo, setDetailinfo] = useState(false);

  const detailInfoControl = () => setDetailinfo(prevState => !prevState)

  return (
    <div className=" w-full h-full relative rounded-3xl border-blue-200  ">
      <ImgContentInnerDiv
        img={photo || 'https://images.unsplash.com/photo-1560547126-ccd9d56db8af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80'}
        className="rounded-2xl border-4"
      />
      <div className=" absolute p-4 w-full bottom-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-end">
              <h2 className="text-xl font-semibold mr-3">{name}</h2>
              <h3 className="font-semibold text-xl">{specialization}</h3>
            </div>
            <div className="block">
              <div>{technologyStack?.join(' / ') || requirements?.join(' / ')} {payFork && `${payFork}$`}</div>
              <h4 className="block">{directions}</h4>
            </div>
          </div>
          <button
            className="btn-none outline-0 focus:outline-none outline-inherit  border-none"
            type="button"
            onClick={detailInfoControl}>
            <Info/>
          </button>
        </div>
        {!detailinfo && description || about_me &&
          <>
            <div className="overflow-hidden h-10">
              {description || about_me}
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
          {description || about_me}
        </div>
      }
    </div>
  )
}
