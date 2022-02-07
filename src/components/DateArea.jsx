function DateArea({strDate, setStrDate}) {
  return (
    <div className="mt-2 border-black">
      <input type={'date'}
             value={strDate}
             className={'text-center border border-black rounded-md'}
             onChange={(e) => setStrDate(e.target.value)}/>
    </div>
  );
}

export default DateArea;
