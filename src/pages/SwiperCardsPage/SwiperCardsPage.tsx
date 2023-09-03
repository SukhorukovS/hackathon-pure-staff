import  {FC, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Wrapper} from '../../components/CardWrapper/CardWrapper';
import {CardItem} from "../../components/CardItem/CardItem.tsx";
import mainStore from "../../store/mainStore.ts";
import {CardContent} from "../../components/CardContent/CardContent.tsx";
import {Layout} from "../../components/Layout/Layout.tsx";

// const render = [
//   {
//     img: 'https://images.unsplash.com/photo-1630254688956-40da9f30216a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
//     value: 1212,
//     name: 'Bruno',
//     age: '28',
//     directions: 'Frontend(React)',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
//     value: 1212,
//     name: 'Anna',
//     age: '28',
//     directions: 'Frontend(React)',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1560547126-ccd9d56db8af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80',
//     value: 1212,
//     name: 'Bruno',
//     age: '28',
//     directions: 'Frontend(React)',
//   },
// ]

//vote это направление
// vote = false лево
// vote = true право
const SwiperCardsPage: FC = observer(() => {

  const {getPeople, peopleData} = mainStore

  useEffect(() => {
    getPeople();
  }, []);

  const onSwipe = (props: unknown, vote: boolean) => {
    console.log(props, vote)
  }

  if(peopleData.length === 0) {
    return <></>
  }

  return (
    <Layout>
      <Wrapper onVote={(item, vote) => onSwipe(item, vote)}>
        {peopleData?.map((item, index) =>
          <CardItem key={index} data-value={item.value}>
            <CardContent {...item} />
          </CardItem>
        )}
      </Wrapper>
    </Layout>
  );
});

export default SwiperCardsPage;



