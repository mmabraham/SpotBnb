export const fetchReviews = spot_id => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: { spot_id },
  });
};

export const createReview = review => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: { review },
  });
};
