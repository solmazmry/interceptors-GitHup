import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const baseURL= import.meta.env.VITE_APP_BASE_API_URL
//axiosdan baseURl yarat 
const axiosInstance= axios.create({baseURL,})
//request atmaq ucun (gonder)
axiosInstance.interceptors.request.use(
    // onfullfilled hissesi
(config)=>{
    toast.info('sorgu gonderilir')
    return config
} , 
//onrejected hissesi
(error)=>{
    toast.error('sorgu gonderilerken xeta bash verdi')
    return Promise.reject(error)
}
)


axiosInstance.interceptors.response.use(
    // onfullfilled hissesi
(response)=>{
    toast.success('cavab alindi ')
    return response
} , 
//onrejected hissesi
(error)=>{
    toast.error('cavab alinarken  xeta bash verdi')
    return Promise.reject(error)
}
)

export default axiosInstance

