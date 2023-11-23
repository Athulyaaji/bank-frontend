import BASE_URL from "./base_url"
import { commonRequest } from "./commonRequest"

// add data
export const addApi=async (header,body)=>{
   return await commonRequest("POST",`${BASE_URL}/bankers/add`,body,header)

}
// get all data
export const getAllData=async()=>{
   return await commonRequest("GET",`${BASE_URL}/bankers/getData`,"")
}

// delete
export const removeData=async(id)=>{
   return await commonRequest("DELETE",`${BASE_URL}/bankers/removeData/${id}`,{})


}

