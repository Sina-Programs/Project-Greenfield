import axios from 'axios';

//<-------------------Query Constants--------------------->

const baseUrl = 'http://18.224.200.47';
const handleError = (err) => console.log('ERROR: ', err);

// <-------------------------------------------Cart Queries---------------------------------------------->

// Should return array of Items added to the cart
export const getCart = (user_token) => {
  return axios
    .get(`${baseUrl}/cart/${user_token}`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should add items to the cart
export const addToCart = () => {
  return axios
    .post(`${baseUrl}/cart/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// <------------------------------------------Product Queries-------------------------------------------->

// Should return single product object and Info
export const getProductList = () => {
  return axios
    .get(`${baseUrl}/products/list/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should return single product object and Info
export const getProductInfo = (product_id) => {
  return axios
    .get(`${baseUrl}/products/${product_id}/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should return array of single products styles
export const getProductStyles = (product_id) => {
  return axios
    .get(`${baseUrl}/products/${product_id}/styles/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should return array of related products product-id's
export const getRelatedProducts = (product_id) => {
  return axios
    .get(`${baseUrl}/products/${product_id}/related/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// <-------------------------------------------QA Queries------------------------------------------------>

// Should return object with product-id and array of question objects
export const getQuestions = (product_id) => {
  return axios
    .get(`${baseUrl}/qa/${product_id}/`)
    .then(({ data }) => {
      return data.results;
    })
    .catch(handleError);
};

// Should return object with question-id, page-number, count-of-answers, and array of answer objects
export const getAnswers = (question_id) => {
  return axios
    .get(`${baseUrl}/qa/${question_id}/answers/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should post a question to a particular product, REQUIRED for question post: question-text, username, and Email
export const addQuestion = (product_id, post) => {
  return axios
    .post(`${baseUrl}/qa/${product_id}/`, post)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should post an answer to a particular question, REQUIRED for answer post: question-text, username, and Email. OPTIONAL: image_thumbnails.
export const addAnswer = (question_id, post) => {
  return axios
    .post(`${baseUrl}/qa/${question_id}/answers/`, post)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should increment question_helpfulness property of single question
export const markQuestionHelpful = (question_id) => {
  return axios
    .put(`${baseUrl}/qa/question/${question_id}/helpful/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should increment reported property of single question
export const reportQuestion = (question_id) => {
  return axios
    .put(`${baseUrl}/qa/question/${question_id}/report/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should increment helpfulness property of single answer
export const markAnswerHelpful = (answer_id) => {
  return axios
    .put(`${baseUrl}/qa/answer/${answer_id}/helpful/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should hide answer from appearing in getAnswers query
export const reportAnswer = (answer_id) => {
  return axios
    .put(`${baseUrl}/qa/answer/${answer_id}/report/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// <------------------------------------Rating and Review Queries-------------------------------------->

// Should return object with product, page-number, review-count, and array of review objects
export const getReviews = (product_id) => {
  console.log('yo');
  return axios
    .get(`${baseUrl}/reviews/${product_id}/list/`)
    .then(({ data }) => {
      return data.results;
    })
    .catch(handleError);
};

// Should return object with product_id, ratings-obj, recommended-obj, characteristics-obj, Width-obj, comfort-obj
export const getReviewMeta = (product_id) => {
  return axios
    .get(`${baseUrl}/reviews/${product_id}/meta/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should add review to single product CHECK API DOC FOR post PARAMS
export const addReview = (product_id, post) => {
  return axios
    .post(`${baseUrl}/reviews/${product_id}/`, post)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should increment review helpfulness property
export const markReviewHelpful = (review_id) => {
  return axios
    .put(`${baseUrl}/reviews/helpful/${review_id}/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};

// Should hide review from appearing in get request results
export const reportReview = (review_id) => {
  return axios
    .put(`${baseUrl}/reviews/report/${review_id}/`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};
