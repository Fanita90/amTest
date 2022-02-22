import axios from "axios";



export const fetchStaff = () => {
  return axios({
    url: "http://localhost:8000/staff",
    method: "get",
  });
};

export const fetchStudents = () => {
    return axios({
      url: "http://localhost:8000/students",
      method: "get",
    });
  };