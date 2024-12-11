import axios from 'axios';
import { toast } from 'react-toastify';
import { BaseURl } from './Auth.Apis';

export const GetQuestions = async (data:any) => {
  try {
    const response = await axios.post(`${BaseURl}/get-questions`,data);
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

//get question status
export const GetQuestionStatus = async (u_id: any) => {
  try {
    const response = await axios.get(`${BaseURl}/get-qcompleted/${u_id}`);
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};


