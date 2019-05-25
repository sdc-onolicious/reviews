import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

function ReviewList(props) {
  const { pages } = props;
  const { currentPage } = props;
  const { goToPage } = props;
  const { goToNextPage } = props;
  const { goToPreviousPage } = props;

  return (
    <div>
      {pages[currentPage].map(review => (
        <Review key={review.id} review={review} />
      ))}
      <div className="pageButtons">
        {/* always include first and last page */}
        {/* always include current page */}
        {/* include pages to left and right of current page unless they are the first or the last page or they do not exist */}
        {/* if the current page is the first, include the two next pages if each exists */}
        {/* if the current page is the last, include the two prior pages if each exists */}
        {/* add ellipse icon after the next-most/before the previous-most page if the next-next-next or prev-prev-prev is not the last or first */}
        {/* should page buttons be a linked list? */}
        {currentPage > 0
          ? <div className="button left" onClick={goToPreviousPage} />
          : <div className="button left dead" />}
        {pages.map((page, index) => (
          <div className="button" data-page={index} onClick={goToPage}>
            <p>{index + 1}</p>
          </div>
        ))}
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
  currentPage: PropTypes.number.isRequired
};

export default ReviewList;
