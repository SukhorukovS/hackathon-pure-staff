import {FC, ReactElement} from "react";
import {Wrapper} from '../CardWrapper/CardWrapper.tsx';
import {CardItem} from "../CardItem/CardItem.tsx";
import {CardContent} from "../CardContent/CardContent.tsx";
import {ICompanyData, IPeopleData} from "../../store/types.ts";


type SwiperCardsProps = {
  data: IPeopleData[] | ICompanyData[];
  likeCallback?: (id: string) => void;
  disLikeCallback?: (id: string) => void;
}
export const SwiperCards: FC<SwiperCardsProps> = ({data, likeCallback, disLikeCallback}) => {
  const onSwipe = (card: unknown, vote: boolean) => {
    const {props} = card as ReactElement
    const id = props['data-value' as keyof typeof props];
    if (likeCallback !== undefined && disLikeCallback !== undefined) {
      if (vote) {
        likeCallback(id);
      } else {
        disLikeCallback(id);
      }
    }
  }

  return (
    <Wrapper onVote={(item, vote) => onSwipe(item, vote)}>
      {data?.map((item, index) =>
        <CardItem key={`_${index}`} data-value={item.id}>
          <CardContent {...item} />
        </CardItem>
      )}
    </Wrapper>
  );
};




