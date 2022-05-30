import React from "react";
import "./table-wrapper.css";

const TableWrapper = () => {
  return (
    <div className="tableWrapperWrapper">
      <div className="tableWrapperTextWrapper">
        <p className="tableWrapperText1 contentTitle">당신이 먹는 생수의</p>
        <p className="tableWrapperText2 mainTitle">수질 부적합 판정횟수</p>
        <p className="tableWrapperText3 mainSubTitle">수질 적합도 검사는 매년 ?회 실시됩니다.</p>
      </div>
      <div className = 'tableWrapperTableWrapper1'></div>
      <div className = 'tableWrapperTableWrapper2'></div>
    </div>
  );
};

export default TableWrapper;
