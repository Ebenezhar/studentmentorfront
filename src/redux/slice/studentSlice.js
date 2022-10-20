import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config/config";


export const postStudent = createAsyncThunk('Student/poststudent', async (values) => {
    try {
        const responseStudent = await axios.post(`${config.api}/postStudent`, values);
        if (responseStudent) {
            return responseStudent.data;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
    }
})

export const fetchStudents = createAsyncThunk('Student/getstudents', async () => {
    try {
        const studentList = await axios.get(`${config.api}/readStudents`);
        console.log(studentList);
        if (studentList.status == 200) {
            return studentList.data;
        }
    } catch (error) {
        console.log(error);
    }
})

export const updateStudent = createAsyncThunk('Student/updateStudent', async (values) => {
    try {
        const response = await axios.put(`${config.api}/updatestudent`, values)
        console.log(response);
    } catch (error) {
        console.log(error);
    }

})


export const deleteStudent = createAsyncThunk('Student/deletestudent', async (id) => {
    try {
        const result = await axios.delete(`${config.api}/deleteStudent/${id}`)
    } catch (error) {
        console.log(error);
    }
})


export const studentSlice = createSlice({
    name: "Student",
    initialState: {
        status: "idle",
        students: [],
    },
    // reducers: {
    //     addstudent: (state, action) => {
    //         if (action.payload) {
    //             state.students.push(action.payload);
    //         }
    //     },
    // },
    extraReducers(builders) {
        builders.addCase(postStudent.pending, (state, action) => {
            state.status = 'loading';
        });
        builders.addCase(postStudent.fulfilled, (state, action) => {
            state.status = 'success';
            // alert(action.payload)
            console.log(action.payload);
        });
        builders.addCase(postStudent.rejected, (state, action) => {
            state.status = 'failed';
            console.log(action.error);
        });
        builders.addCase(fetchStudents.pending, (state, action) => {
            state.status = 'loading';
        });
        builders.addCase(fetchStudents.fulfilled, (state, action) => {
            state.status = 'success';
            state.students = action.payload;
        });
        builders.addCase(fetchStudents.rejected, (state, action) => {
            state.status = 'failed';
            console.log(action.error);
        });
    }
})
console.log(studentSlice);

export const { addstudent } = studentSlice.actions;
export default studentSlice.reducer;