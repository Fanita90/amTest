import axios from "axios";

export const fetchStaff = () => {
  return axios({
    //url: "http://localhost:8000/staff",
    url: "https://prueba-api-harry.herokuapp.com/staff",
    method: "get",
  });
};

export const fetchStudents = () => {
  return axios({
    //url: "http://localhost:8000/students",
    url: "https://prueba-api-harry.herokuapp.com/students",
    method: "get",
  });
};

