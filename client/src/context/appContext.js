import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  SHOW_ADD_JOB_FORM,
  HIDE_ADD_JOB_FORM,
  HANDLE_JOB_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  RESET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  CLEAR_FILTERS,
  CHANGE_JOB_PAGE,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CREATE_CONTACT_BEGIN,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
  SHOW_ADD_CONTACT_FORM,
  HIDE_ADD_CONTACT_FORM,
  HANDLE_CONTACT_CHANGE,
  CLEAR_CONTACT_VALUES,
  GET_CONTACTS_BEGIN,
  GET_CONTACTS_SUCCESS,
  SET_EDIT_CONTACT,
  RESET_EDIT_CONTACT,
  EDIT_CONTACT_BEGIN,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_ERROR,
  DELETE_CONTACT_BEGIN,
  CLEAR_CONTACT_FILTERS,
  CHANGE_CONTACT_PAGE,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  isLoadingEdit: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  showSidebar: true,
  displayAddJobForm: false,
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  note: "",
  jobLocation: userLocation || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["applied", "interviewing", "pending", "declined"],
  status: "applied",
  jobs: [],
  totalJobs: 0,
  numOfJobPages: 1,
  jobPage: 1,
  searchPosition: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
  stats: {},
  monthlyApplications: [],
  contactName: "",
  contactLastName: "",
  contactCompany: "",
  contactEmail: "",
  contactPhoneNum: "",
  contactNote: "",
  editContactId: "",
  contacts: [],
  totalContacts: 0,
  numOfContactPages: 1,
  contactPage: 1,
  displayAddContactForm: false,
  searchName: "",
  searchCompany: "",
  contactSort: "latest",
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Axios
  const authFetch = axios.create({ baseURL: "/api/" });

  // Request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = (alertMsg) => {
    dispatch({ type: DISPLAY_ALERT, payload: { alertText: alertMsg } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 1000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(`/api/auth/${endPoint}`, currentUser);
      const { user, token, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
          alertText,
        },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);

      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });
      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const showAddJobForm = () => {
    dispatch({ type: SHOW_ADD_JOB_FORM });
  };

  const hideAddJobForm = () => {
    dispatch({ type: HIDE_ADD_JOB_FORM });
  };

  const handleJobChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_JOB_CHANGE,
      payload: { name, value },
    });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createJob = async () => {
    dispatch({ type: CREATE_JOB_BEGIN });
    try {
      const { position, company, note, jobLocation, jobType, status } = state;
      await authFetch.post("./jobs", {
        company,
        position,
        note,
        jobLocation,
        jobType,
        status,
      });
      dispatch({
        type: CREATE_JOB_SUCCESS,
      });
      dispatch({ type: CLEAR_VALUES });
      setTimeout(() => {
        hideAddJobForm();
        getJobs();
      }, 800);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getJobs = async () => {
    const { searchPosition, searchStatus, searchType, sort, jobPage } = state;
    let url = `/jobs?page=${jobPage}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    if (searchPosition) {
      url = url + `&search=${searchPosition}`;
    }
    dispatch({ type: GET_JOBS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfJobPages } = data;
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { jobs, totalJobs, numOfJobPages },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
    showAddJobForm();
  };

  const resetEditJobValue = () => {
    const { editJobId } = state;
    dispatch({ type: RESET_EDIT_JOB, payload: { editJobId } });
  };

  const editJob = async () => {
    dispatch({ type: EDIT_JOB_BEGIN });
    try {
      const { position, company, note, jobLocation, jobType, status } = state;
      await authFetch.patch(`./jobs/${state.editJobId}`, {
        position,
        company,
        note,
        jobLocation,
        jobType,
        status,
      });
      dispatch({
        type: EDIT_JOB_SUCCESS,
      });
      setTimeout(() => {
        hideAddJobForm();
        clearValues();
        getJobs();
      }, 800);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteJob = async (jobId) => {
    dispatch({ type: DELETE_JOB_BEGIN });
    try {
      await authFetch.delete(`/jobs/${jobId}`);
      getJobs();
    } catch (error) {
      logoutUser();
    }
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const changeJobPage = (jobPage) => {
    dispatch({ type: CHANGE_JOB_PAGE, payload: { jobPage } });
  };

  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN });
    try {
      const { data } = await authFetch("/jobs/stats");
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      logoutUser();
    }
  };

  const createContact = async () => {
    dispatch({ type: CREATE_CONTACT_BEGIN });
    const newContact = {
      name: state.contactName,
      company: state.contactCompany,
      note: state.contactNote,
    };
    if (state.contactLastName !== "") {
      newContact.lastName = state.contactLastName;
    }
    if (state.contactEmail !== "") {
      newContact.email = state.contactEmail;
    }
    if (state.contactPhoneNum !== "") {
      newContact.phoneNumber = state.contactPhoneNum;
    }
    try {
      await authFetch.post("./contacts", newContact);
      dispatch({
        type: CREATE_CONTACT_SUCCESS,
      });
      dispatch({ type: CLEAR_CONTACT_VALUES });
      setTimeout(() => {
        hideAddContactForm();
        getContacts();
      }, 800);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_CONTACT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const showAddContactForm = () => {
    dispatch({ type: SHOW_ADD_CONTACT_FORM });
  };

  const hideAddContactForm = () => {
    dispatch({ type: HIDE_ADD_CONTACT_FORM });
  };

  const clearContactValues = () => {
    dispatch({ type: CLEAR_CONTACT_VALUES });
  };

  const handleContactChange = ({ name, value }) => {
    console.log(name, value);
    dispatch({
      type: HANDLE_CONTACT_CHANGE,
      payload: { name, value },
    });
  };

  const getContacts = async () => {
    const { contactPage, searchName, searchCompany, contactSort } = state;

    let url = `/contacts?page=${contactPage}&sort=${contactSort}`;
    if (searchName) {
      url = url + `&name=${searchName}`;
    }
    if (searchCompany) {
      url = url + `&company=${searchCompany}`;
    }
    dispatch({ type: GET_CONTACTS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { contacts, totalContacts, numOfContactPages } = data;
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: { contacts, totalContacts, numOfContactPages },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const setEditContact = (id) => {
    dispatch({ type: SET_EDIT_CONTACT, payload: { id } });
    showAddContactForm();
  };

  const resetEditContactValue = () => {
    const { editContactId } = state;
    dispatch({ type: RESET_EDIT_CONTACT, payload: { editContactId } });
  };

  const editContact = async () => {
    dispatch({ type: EDIT_CONTACT_BEGIN });
    const newContact = {
      name: state.contactName,
      company: state.contactCompany,
      note: state.contactNote,
    };
    if (state.contactLastName !== "") {
      newContact.lastName = state.contactLastName;
    }
    if (state.contactEmail !== "") {
      newContact.email = state.contactEmail;
    }
    if (state.contactPhoneNum !== "") {
      newContact.phoneNumber = state.contactPhoneNum;
    }
    try {
      await authFetch.patch(`./contacts/${state.editContactId}`, newContact);
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
      });
      setTimeout(() => {
        hideAddContactForm();
        clearContactValues();
        getContacts();
      }, 800);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_CONTACT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteContact = async (contactId) => {
    dispatch({ type: DELETE_CONTACT_BEGIN });
    try {
      await authFetch.delete(`/contacts/${contactId}`);
      getContacts();
    } catch (error) {
      logoutUser();
    }
  };

  const clearContactFilters = () => {
    dispatch({ type: CLEAR_CONTACT_FILTERS });
  };

  const changeContactPage = (contactPage) => {
    dispatch({ type: CHANGE_CONTACT_PAGE, payload: { contactPage } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        showAddJobForm,
        hideAddJobForm,
        handleJobChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        resetEditJobValue,
        editJob,
        deleteJob,
        clearFilters,
        changeJobPage,
        showStats,
        createContact,
        showAddContactForm,
        hideAddContactForm,
        clearContactValues,
        handleContactChange,
        getContacts,
        setEditContact,
        resetEditContactValue,
        editContact,
        deleteContact,
        clearContactFilters,
        changeContactPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
