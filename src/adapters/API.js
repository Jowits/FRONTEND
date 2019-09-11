const endpoint = "https://catz-play-api-app.herokuapp.com/api/v1";
const signupUrl = `${endpoint}/users`;
const loginUrl = `${endpoint}/login`;
const catsUrl = `${endpoint}/cats`;
const reviewsUrl = `${endpoint}/reviews`;
const meetUpsUrl = `${endpoint}/cats/meet_ups`;
const validateUrl = `${endpoint}/validate`;

const jsonify = res => {
  if (res.ok) return res.json();
  else return Promise.resolve({ error: "no token" });
};
const handleServerError = response => console.log(response);

const saveToken = data => {
  localStorage.setItem("token", data.token);
  return data.user;
};

const constructHeaders = (moreHeaders = {}) => ({
  Authorization: localStorage.getItem("token"),
  ...moreHeaders
});

const signUp = user =>
  fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const logIn = user =>
  fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const validateUser = () => {
  if (
    !localStorage.getItem("token") ||
    localStorage.getItem("token") === "undefined"
  )
    return Promise.resolve({ error: "no token" });

  return fetch(validateUrl, {
    headers: constructHeaders()
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);
};
const fetchProfile = profileID => {
  return fetch(`${signupUrl}/${profileID}`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(resp => resp.json());
};

const createCat = cat => {
  return fetch(catsUrl, {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cat)
  }).then(response => response.json());
};

const createReview = review => {
  return fetch(reviewsUrl, {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  }).then(response => response.json());
};

const createMeetUp = meet_ups => {
  return fetch(meetUpsUrl, {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(meet_ups)
  }).then(response => response.json());
};

const fetchUsers = () => {
  return fetch(`${signupUrl}`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(resp => resp.json());
};

const fetchCats = () => {
  return fetch(`${catsUrl}`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(response => response.json());
};

const fetchReviews = () => {
  return fetch(`${reviewsUrl}`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(response => response.json());
};

const postCat = cat =>
  fetch(catsUrl, {
    method: "POST",
    body: JSON.stringify({ cat }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  })
    .then(jsonify)
    .catch(handleServerError);

const postReview = review =>
  fetch(reviewsUrl, {
    method: "POST",
    body: JSON.stringify({ review }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  })
    .then(jsonify)
    .catch(handleServerError);

const clearToken = () => localStorage.removeItem("token");

const deleteCat = id => {
  return fetch(`${catsUrl}/${id}`, {
    method: "DELETE",
    headers: { Authorization: localStorage.getItem("token") }
  }).then(resp => resp.json());
};

export default {
  signUp,
  logIn,
  validateUser,
  clearToken,
  postCat,
  fetchProfile,
  fetchUsers,
  fetchCats,
  createCat,
  fetchReviews,
  createReview,
  postReview,
  deleteCat,
  createMeetUp
};
