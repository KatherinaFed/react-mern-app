import * as axios from 'axios';
import process from 'process';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

// AUTH
export const authAPI = {
  isAuth() {
    return instance
      .get('auth/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then(({ data }) => data);
  },
  signup({ username, email, password }) {
    return instance
      .post('auth/signup', { username, email, password })
      .then(({ data }) => data);
  },
  login({ email, password }) {
    return instance
      .post('auth/login', { email, password })
      .then(({ data }) => data);
  },
  logout() {
    return instance.delete('auth/login').then(({ data }) => data);
  },
};

// USERS
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&size=${pageSize}`)
      .then(({ data }) => {
        return data;
      });
  },
  getUserProfile(userId) {
    return instance.get(`user/${userId}`).then(({ data }) => data);
  },
};

// PROFILE
// export const profileAPI = {
//   getProfile(userId) {
//     return instance.get(`profile/${userId}`).then(({ data }) => data);
//   },
// };

// EVENTS
export const eventsAPI = {
  getEvents(currentPage = 1, pageSize = 10) {
    // debugger
    return instance
      .get(`events/all-events?page=${currentPage}&size=${pageSize}`)
      .then(({ data }) => {
        // console.log(data)
        return data;
      });
  },
  createEvent(event) {
    return instance.post('events/all-events', event).then(({ data }) => data);
  },
  // addEventImage(photoFile) {
  //   const formData = new FormData();
  //   formData.append('image', photoFile);

  //   return instance.post('event/image', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  // },
};
