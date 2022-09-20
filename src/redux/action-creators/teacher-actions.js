import axios from "axios";
import { config } from "../../config/config";

export const postTeacher = (values) => {
    return async (dispatch) => {
        console.log(values);
        // dispatch({ type: "POST_TEACHER", payload: true });
        try {
            const response = await axios.post(`${config.api}/postTeacher`, values);
            dispatch({ type: "POST_TEACHER", payload: response.data.message });
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }
}

export const readTeachers = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`${config.api}/readTeachers`);
            dispatch({ type: "READ_TEACHERS", payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateTeacher = (values) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${config.api}/updateTeacher`, values);
            dispatch({ type: "UPDATE_TEACHER", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }

}

export const deleteTeacher = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${config.api}/deleteTeacher/${id}`);
            dispatch({ type: "DELETE_TEACHER", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }
}