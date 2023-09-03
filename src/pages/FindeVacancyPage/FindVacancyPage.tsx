import {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import mainStore from "../../store/mainStore.ts";
import {Layout} from "../../components/Layout/Layout.tsx";
import {SwiperCards} from "../../components/SwiperCards/SwiperCards.tsx";
import {Loader} from "../../components/Loader/Loader.tsx";
import {matchVacancy} from "../../api";
import {IMatchPeople} from "../../store/types.ts";
import {Modal} from "../../components/Modal/Modal.tsx";

export const FindVacancyPage = observer(() => {
  const {
    getCompany, companyData: {
      loading, data
    },
    staffId,
  } = mainStore

  const [modalInfo, setModalInfo] = useState({})

  useEffect(() => {
    getCompany();
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
    if (id && staffId) {
      matchVacancy(staffId, id).then(({data}) => {
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
      <Modal open={isOpenModal} name={modalInfo['jobTitle' as keyof typeof modalInfo]}
             closeModal={() => setModalInfo({})}/>
      <Layout>
        <SwiperCards
          disLikeCallback={dislike}
          likeCallback={like}
          data={data}
        />
      </Layout>
    </>
  );
});
