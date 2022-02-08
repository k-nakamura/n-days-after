import {useCallback, useEffect, useState} from "react";

const DAY = ['日', '月', '火', '水', '木', '金', '土'];

function AfterDateList({strDate}) {
  const [dateList, setDateList] = useState([]);
  const [hasError, setHasError] = useState(false);

  const createAfterDateList = useCallback((strDate) => {
    if (strDate === '') {
      return;
    }

    try {
      setHasError(false);

      const list = [];

      for (let i = 0; i < 6; i++) {
        const date = new Date(strDate);
        date.setDate(date.getDate() + Math.pow(10, i));
        list.push(date);
      }

      setDateList(list);
    } catch (e) {
      setHasError(true);
    }
  }, []);

  useEffect(() => {
    createAfterDateList(strDate);
  }, [createAfterDateList, strDate]);

  if (hasError) {
    return (
      <div className={"text-red-900"}>
        入力内容にエラーがあります。
      </div>
    );
  }

  const DateList = () => {
    const days = dateList.map((d, i) => (
      <div className={'flex flex-row border-b-gray-400 border-b py-4 sm:text-2xl'}>
        <div className={'basis-1/4 text-right'}>
          {Math.pow(10, i)} 日後
        </div>
        <div className={'basis-3/4'}>
          <div className={'flex flex-row text-right'}>
            <div className={'basis-1/4'}>
              {d.getFullYear()}年
            </div>
            <div className={'basis-1/4'}>
              {d.getMonth() + 1}月
            </div>
            <div className={'basis-1/4'}>
              {d.getDate()}日
            </div>
            <div className={'basis-1/4'}>
              ({DAY[d.getDay()]})
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <>
        {days}
      </>
    )
  }

  return (
    <div className={'pt-6 xl:px-64 lg:px-52 md:px-20 sm:px-6 px-1'}>
      <DateList/>
    </div>
  );
}

export default AfterDateList;
