export const fetchLikes = () =>
  $.ajax({
    method: 'GET',
    url: '/api/likes',
  }
);

export const fetchLike = (id) =>
  $.ajax({
    method: 'GET',
    url: `/api/likes/${id}`,
  }
);

export const createLike = like =>
  $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like }
  });

export const editLike = like =>
  $.ajax({
    method: 'PATCH',
    url: `/api/likes/${like.id}`,
    data: {like}
  }
);

export const removeLike = id =>
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  }
);



