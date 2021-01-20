import React from "react";
import { connect } from "react-redux";

const Paginator = (props) => {
  const { currentPage, getPage } = props;

  let prevPage = currentPage > 1 ? currentPage - 1 : currentPage;
  let nextPage = currentPage + 1;

  return (
    <div>
      <button onClick={() => getPage(prevPage)}>Prev List</button>

      <span>{currentPage}</span>

      <button onClick={() => getPage(nextPage)}>Next List</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.paginator,
});

const mapDispatchToProps = (dispatch, props) => ({
  getPage: (pageNumber) => dispatch(props.onPaginatorPage(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
