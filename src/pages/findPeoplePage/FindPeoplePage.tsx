import { useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import mainStore from "../../store/mainStore.ts";
import {Layout} from "../../components/Layout/Layout.tsx";
import {SwiperCards} from "../../components/SwiperCards/SwiperCards.tsx";
import {Loader} from "../../components/Loader/Loader.tsx";
import {matchPeople} from "../../api";
import {IMatchPeople} from "../../store/types.ts";
import {Modal} from "../../components/Modal/Modal.tsx";

export const FindPeoplePage = observer(() => {
  const {
    getPeople, peopleData: {
      loading, data
    },
    companyId

  } = mainStore

  const [modalInfo, setModalInfo] = useState({})

  useEffect(() => {
    getPeople();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className="flex  justify-center items-center h-full">
        <Loader className="text-center"/>
      </div>
    )
  }

  if (data.length === 0) {
    return <></>
  }

  const like = (id: string) => {
    if (id && companyId) {
      matchPeople(id, companyId).then(({data}) => {
        const {entity} = data as IMatchPeople;
        if (Math.random() < 0.5) {
          setModalInfo({...entity});
        }
      });
    }
  }

  const dislike = (id: string) => {
    return id;
  }

  const isOpenModal = Object.keys(modalInfo).length > 0
  return (
    <>
      <Modal open={isOpenModal} name={modalInfo['name' as keyof typeof modalInfo]} closeModal={() => setModalInfo({})}/>
      <Layout>
        <SwiperCards
          likeCallback={like}
          disLikeCallback={dislike}
          data={data}
        />
      </Layout>
    </>
  );
});


