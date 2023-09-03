import {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import mainStore from "../../store/mainStore.ts";
import {Layout} from "../../components/Layout/Layout.tsx";
import {SwiperCards} from "../../components/SwiperCards/SwiperCards.tsx";
import {Loader} from "../../components/Loader/Loader.tsx";

export const FindPeoplePage = observer(() => {
  const {
    getPeople, peopleData: {
      loading, data
    }
  } = mainStore

  useEffect(() => {
    getPeople();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if(loading) {
    return (
      <div className="flex  justify-center items-center h-full">
        <Loader className="text-center"  />
      </div>
    )
  }

  if (data.length === 0) {
    return <></>
  }

  const like = (id: string) => {
    return id;
  }

  const dislike = (id: string) => {
    return id;
  }

  return (
    <Layout>
      <SwiperCards
        likeCallback={like}
        disLikeCallback={dislike}
        data={data}
      />
    </Layout>
  );
});
