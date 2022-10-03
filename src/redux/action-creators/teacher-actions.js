import axios from "axios";
import { config } from "../../config/config";

export const postTeacher = (values) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${config.api}/postTeacher`, values);
            alert(response.data.message);
            console.log(response.data.message);
            setTimeout(() => {
                window.location.href = "/portal/teachersList";
            }, 1000);
            dispatch({ type: "POST", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }
}

export const readTeachers = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`${config.api}/readTeachers`);

            dispatch({ type: "READ", payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateTeacher = (values) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${config.api}/updateTeacher`, values);
            alert(response.data.message);
            setTimeout(() => {
                window.location.href = "/portal/teachersList";
            }, 1000);
            dispatch({ type: "UPDATE", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }

}

export const deleteTeacher = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${config.api}/deleteTeacher/${id}`);
            alert(response.data.message);
            setTimeout(() => {
                window.location.href = window.location.href;
            }, 1000);
            dispatch({ type: "DELETE", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }
}