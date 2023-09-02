import {CSSProperties, FC, HTMLAttributes} from "react";

type ImgContentInnerDivProps = {
  img: string;
  otherStyle?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>

export const ImgContentInnerDiv: FC<ImgContentInnerDivProps> = ({img, otherStyle, ...props}) => {
  return <div
    style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100%',
      ...otherStyle
    }}
    {...props}
  />
}
