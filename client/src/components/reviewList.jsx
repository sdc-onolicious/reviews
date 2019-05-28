import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';
import styles from '../styles/styles.module.css';

function ReviewList(props) {
  const { pages } = props;
  const { currentPage } = props;
  const { pageButtonList } = props;
  const { goToPage } = props;
  const { goToNextPage } = props;
  const { goToPreviousPage } = props;
  const { openReport } = props;
  const { handleReportClick } = props;
  const { handleReportClear } = props;
  const buttonArray = pageButtonList.getArray();
  return (
    <div className={styles.reviewList}>
      {pages[currentPage].map((review) => {
        if (openReport === review.id) {
          return <Review key={review.id} review={review} openReport handleReportClick={handleReportClick} handleReportClear={handleReportClear} />;
        }
        return <Review key={review.id} review={review} handleReportClick={handleReportClick} handleReportClear={handleReportClear} />;
      })}
      <div className={styles.pageButtons}>
        {currentPage > 0
          ? <div className={styles.pageRight} onClick={goToPreviousPage} />
          : <div className="button left dead" />}
        {buttonArray.map((button) => {
          if (button.display === 'button' || button.display === 'button current') {
            return (
              <div className={button.display} data-page={button.page} onClick={goToPage}>
                <p>{button.page + 1}</p>
              </div>
            );
          }
          if (button.display === 'ellipse') {
            return (
              <span className={button.display}>...</span>
            );
          }
          return null;
        })}
        {currentPage < pages.length - 1
          ? <div className="button right" onClick={goToNextPage} />
          : <div className="button right dead" />}
      </div>
    </div>
  );
}

ReviewList.propTypes = {
  goToPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageButtonList: PropTypes.object.isRequired,
  openReport: PropTypes.number,
  handleReportClick: PropTypes.func.isRequired,
  handleReportClear: PropTypes.func.isRequired
};

ReviewList.defaultProps = {
  openReport: null
};

export default ReviewList;
