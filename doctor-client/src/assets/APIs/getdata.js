import axiosSecure from "."
export const getServices= async()=>{
    const {data}=await axiosSecure.get('/services')
    return data
}
// Get all doctores
export const getDoctors= async()=>{
    const {data}=await axiosSecure.get('/doctors')
    return data
}
// get single doctor profile
export const getDoctorProfile= async(id)=>{
    const {data}=await axiosSecure.get(`/doctor/${id}`)
    return data
}
