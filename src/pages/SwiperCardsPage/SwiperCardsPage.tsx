import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Wrapper} from '../../components/CardWrapper/CardWrapper';
import {CardItem} from "../../components/CardItem/CardItem.tsx";
import {Layout} from "../../components/Layout/Layout.tsx";
import mainStore from "../../store/mainStore.ts";
import {CardContent} from "../../components/CardContent/CardContent.tsx";


//vote это направление
// vote = false лево
// vote = true право
const SwiperCardsPage = observer(() => {

  useEffect(() => {
    mainStore.getPeople();
  }, []);

  const onSwipe = (props: unknown, vote: boolean) => {
    console.log(props, vote)
  }

  return (
    <Layout>
      <Wrapper onVote={(item, vote) => onSwipe(item, vote)}>
        {mainStore.peopleData?.map((item, index) =>
          <CardItem key={index} data-value={item.value}>
            <CardContent {...item} />
          </CardItem>
        )}
      </Wrapper>
    </Layout>
  );
});

export default SwiperCardsPage;



