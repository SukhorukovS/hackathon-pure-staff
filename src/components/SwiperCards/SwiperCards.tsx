import {FC} from "react";
import {Wrapper} from '../CardWrapper/CardWrapper.tsx';
import {CardItem} from "../CardItem/CardItem.tsx";
import {CardContent} from "../CardContent/CardContent.tsx";
import {IPeopleData} from "../../store/types.ts";


type SwiperCardsProps = {
  data: IPeopleData[]
}
export const SwiperCards: FC<SwiperCardsProps> = ({data}) => {
  const onSwipe = (props: unknown, vote: boolean) => {
    if (vote) {
      // like callback
    } else {
      // dislike callback
    }
    console.log(props, vote)
  }

  return (
    <Wrapper onVote={(item, vote) => onSwipe(item, vote)}>
      {data?.map((item, index) =>
        <CardItem key={index} data-value={item.value}>
          <CardContent {...item} />
        </CardItem>
      )}
    </Wrapper>
  );
};




