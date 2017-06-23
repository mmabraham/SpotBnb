export const fetchReviews = spot_id => {
  return $.ajax({
    method: "GET",
    url: '/api/reviews',
    data: { spot_id },
  })
}
