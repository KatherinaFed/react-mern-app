import * as axios from 'axios';
import process from 'process';

const authHeader = () => {
  const userToken = JSON.parse(localStorage.getItem('token'));

  if (userToken) {
    return { 'x-access-token': userToken };
  } else {
    return null;
  }
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

console.log(`Bearer ${localStorage.getItem('token')}`);

// AUTH
export const authAPI = {
  isAuth() {
    return instance.get('auth/me').then(({ data }) => {
      return data;
    });
  },
  signup({ username, email, password }) {
    return instance
      .post('signup', { username, email, password })
      .then(({ data }) => data);
  },
  login({ email, password }) {
    // debugger
    return instance.post('login', { email, password }).then(({ data }) => data);
  },
  logout() {
    return instance.delete('login').then(({ data }) => data);
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
    return instance.get(`profile/${userId}`).then(({ data }) => {
      // console.log('getUserProfile DATA: ', data);

      return data;
    });
  },
};

// PROFILE
export const profileAPI = {
  updateProfileData(newProfileData) {
    return instance.put('profile', newProfileData);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    instance.post('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return instance.post('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

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
