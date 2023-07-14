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
  SHOW_ADD_CONTACT_FORM,
  HIDE_ADD_CONTACT_FORM,
  HANDLE_CONTACT_CHANGE,
  CLEAR_CONTACT_VALUES,
  CREATE_CONTACT_BEGIN,
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_SUCCESS,
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
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.alertText || "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      useLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      jobLocation: "",
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, insLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === SHOW_ADD_JOB_FORM) {
    return { ...state, displayAddJobForm: true };
  }

  if (action.type === HIDE_ADD_JOB_FORM) {
    return { ...state, displayAddJobForm: false };
  }

  if (action.type === HANDLE_JOB_CHANGE) {
    return {
      ...state,
      jobPage: 1,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      note: "",
      jobLocation: state.userLocation,
      jobType: "full-time",
      status: "applied",
    };
    return { ...state, ...initialState };
  }

  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoadingEdit: true };
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Job Created!",
    };
  }

  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfJobPages: action.payload.numOfJobPages,
    };
  }

  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, position, company, jobLocation, jobType, status, note } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
      note,
    };
  }

  if (action.type === RESET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.editJobId);
    const { position, company, jobLocation, jobType, status, note } = job;
    return {
      ...state,
      position,
      company,
      jobLocation,
      jobType,
      status,
      note,
    };
  }

  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === EDIT_JOB_BEGIN) {
    return { ...state, isLoadingEdit: true };
  }

  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "success",
      alertText: "Job Updated!",
    };
  }

  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      searchPosition: "",
      searchStatus: "all",
      searchType: "all",
      sort: "latest",
    };
  }

  if (action.type === CHANGE_JOB_PAGE) {
    return { ...state, jobPage: action.payload.jobPage };
  }

  if (action.type === SHOW_STATS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }

  if (action.type === CREATE_CONTACT_BEGIN) {
    return { ...state, isLoadingEdit: true };
  }

  if (action.type === CREATE_CONTACT_SUCCESS) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Contact Created!",
    };
  }

  if (action.type === CREATE_CONTACT_ERROR) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === SHOW_ADD_CONTACT_FORM) {
    return { ...state, displayAddContactForm: true };
  }

  if (action.type === HIDE_ADD_CONTACT_FORM) {
    return { ...state, displayAddContactForm: false };
  }

  if (action.type === CLEAR_CONTACT_VALUES) {
    const initialState = {
      isEditing: false,
      editContactId: "",
      contactName: "",
      contactLastName: "",
      contactCompany: "",
      contactEmail: "",
      contactPhoneNum: "",
      contactNote: "",
    };
    return { ...state, ...initialState };
  }

  if (action.type === HANDLE_CONTACT_CHANGE) {
    return {
      ...state,
      contactPage: 1,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === GET_CONTACTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_CONTACTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      contacts: action.payload.contacts,
      totalContacts: action.payload.totalContacts,
      numOfContactPages: action.payload.numOfContactPages,
    };
  }

  if (action.type === SET_EDIT_CONTACT) {
    const contact = state.contacts.find(
      (contact) => contact._id === action.payload.id
    );
    const { _id, name, lastName, company, note } = contact;
    return {
      ...state,
      isEditing: true,
      editContactId: _id,
      contactName: name,
      contactLastName: lastName,
      contactCompany: company,
      contactEmail: contact.email === "Email" ? "" : contact.email,
      contactPhoneNum:
        contact.phoneNumber === "Phone Number" ? "" : contact.phoneNumber,
      contactNote: note,
    };
  }

  if (action.type === RESET_EDIT_CONTACT) {
    const contact = state.contacts.find(
      (contact) => contact._id === action.payload.editContactId
    );
    const { name, lastName, company, note } = contact;
    return {
      ...state,
      contactName: name,
      contactLastName: lastName,
      contactCompany: company,
      contactEmail: contact.email === "Email" ? "" : contact.email,
      contactPhoneNum:
        contact.phoneNumber === "Phone Number" ? "" : contact.phoneNumber,
      contactNote: note,
    };
  }

  if (action.type === EDIT_CONTACT_BEGIN) {
    return { ...state, isLoadingEdit: true };
  }

  if (action.type === EDIT_CONTACT_SUCCESS) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "success",
      alertText: "Contact Updated!",
    };
  }

  if (action.type === EDIT_CONTACT_ERROR) {
    return {
      ...state,
      isLoadingEdit: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === DELETE_CONTACT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CLEAR_CONTACT_FILTERS) {
    return {
      ...state,
      searchName: "",
      searchCompany: "",
      contactSort: "latest",
    };
  }

  if (action.type === CHANGE_CONTACT_PAGE) {
    return { ...state, contactPage: action.payload.contactPage };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
