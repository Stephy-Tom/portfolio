import {BASE_URL} from './baseurl'
import {commonAPI} from './commonAPI'

export const  homeprojectAPI =async(searchKey) =>{
    return await commonAPI("GET",`${BASE_URL}/project/home-project?search=${searchKey}`,'','')
 }