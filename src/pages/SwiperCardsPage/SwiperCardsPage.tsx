import {Wrapper} from '../../components/CardWrapper/CardWrapper';
import {CardItem} from "../../components/CardItem/CardItem.tsx";


const testerData = [{value: 'waffles', text: ' 🧇 '}, {value: 'waffles', text: ' 🧇 '}, {value: 'waffles', text: ' 🧇 '}, {value: 'waffles', text: ' 🧇 '}, {value: 'waffles', text: ' 🧇 '}, {value: 'waffles', text: ' 🧇 '},]


//vote это направление
// vote = false лево
// vote = true право
 const SwiperCardsPage = () => {

    const onSwipe = (props: unknown, vote: boolean) => {
        console.log(props, vote)
    }

    return (
        <Wrapper onVote={(item, vote) => onSwipe(item, vote)}>
            {testerData.map((item, index) => <CardItem key={index} data-value={item.value}>
                    {item.text}
                </CardItem>
            )}
        </Wrapper>);
};

export default SwiperCardsPage;




