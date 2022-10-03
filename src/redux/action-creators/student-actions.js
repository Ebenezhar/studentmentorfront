import axios from "axios";
import { config } from "../../config/config";


export const postStudent = (values) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${config.api}/postStudent`, values);
            console.log(response.data.message);
            dispatch({ type: "POST", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }
}

export const readStudents = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`${config.api}/readStudents`);
            dispatch({ type: "READ", payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}


export const updateStudent = (values) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${config.api}/updateStudent`, values);
            console.log(response.data.message);
            dispatch({ type: "UPDATE", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }

}

export const deleteStudent = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${config.api}/deleteStudent/${id}`);
            console.log(response.data.message);
            dispatch({ type: "DELETE", payload: response.data.message });
        } catch (error) {
            console.log(error);
        }
    }
}