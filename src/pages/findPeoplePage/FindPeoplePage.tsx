import {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import mainStore from "../../store/mainStore.ts";
import {Layout} from "../../components/Layout/Layout.tsx";
import {SwiperCards} from "../../components/SwiperCards/SwiperCards.tsx";

export const FindPeoplePage = observer(() => {
  const {getPeople, peopleData} = mainStore

  useEffect(() => {
    getPeople();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  if (peopleData.length === 0) {
    return <></>
  }

  return (
    <Layout>
      <SwiperCards data={peopleData}/>
    </Layout>
  );
});
