import React from "react";
import { connect } from "react-redux";
import style from './Paginator.module.css';
import Button from '@material-ui/core/Button';

const Paginator = (props) => {
  const { currentPage, getPage } = props;

  let prevPage = currentPage > 1 ? currentPage - 1 : currentPage;
  let nextPage = currentPage + 1;

  return (
    <div className={style.paginator}>
      <Button onClick={() => getPage(prevPage)}>Prev List</Button>

      <span className={style.pageNumber}>{currentPage}</span>

      <Button onClick={() => getPage(nextPage)}>Next List</Button>
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
