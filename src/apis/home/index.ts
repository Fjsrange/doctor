// 首页接口
import request from "../../utils/requests";
import type { HospitalResponseData } from "./type";


// 通过枚举管理首页模块的接口地址
enum HomeApi {
  HOSPITAL_URL = '/hosp/hospital/', // 医院列表
  HospitalalLEvelAndRegion_url = '/cmn/dict/findByDictCode/' // 获取医院等级与地区列表
}

// 获取医院列表数据
export const getHospitalList = (page: number, limit: number) => {
  return request.get<any, HospitalResponseData>(`${HomeApi.HOSPITAL_URL}${page}/${limit}`);
}

// 获取医院等级与地区列表数据
// export const getHospitalalLEvelAndRegion = (dictCode: string) => {
//   return request.get<any, any>(HomeApi.HospitalalLEvelAndRegion_url + dictCode);
// }
export const getdoctorList = (dictCode: string)=>{
  return request.get<any, any>(HomeApi.HospitalalLEvelAndRegion_url + dictCode);
}