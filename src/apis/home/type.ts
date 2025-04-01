// 定义首页模块ts数据类型
export interface ReponseData {
  code: number; // 响应状态码
  message: string; // 响应消息
  ok: boolean; // 响应是否成功
}

// 代表已有的医院数据的ts类型
export interface Hospital {
  id: string; // 医院id
  createTime: string; // 医院创建时间
  updateTime: string; // 医院更新时间
  isDeleted: number; // 医院是否被删除
  param: {
    fullAddress: string; // 医院详细地址
    hostypeString: string; // 医院等级
  }; // 医院参数
  hoscode: string; // 医院编号
  hosname: string; // 医院名称
  hostype: string; // 医院类型
  provinceCode: string; // 省份编码
  cityCode: string; // 城市编码
  districtCode: string; // 区域编码
  logoData: string; // 医院logo
  intro: string; // 医院介绍
  route: string; // 医院路线
  status: number; // 医院状态
  bookingRule: {
    cycle: number; // 预约周期
    releaseTime: string; // 预约时间
    stopTime: string; // 停止预约时间
    quitDay: number; // 取消预约的天数
    quitTime: string; // 取消预约的时间
    rule: string[]; // 预约规则
  }; // 医院预约规则
}

// 存储全部已有医院的数组类型
export type Content = Hospital[];

// 获取已有医院接口返回的数据ts类型
export interface HospitalResponseData extends ReponseData {
  data: {
    content: Content; // 医院数组
    pageable: {
      sort: {
        sorted: boolean; // 是否排序
        unsorted: boolean; // 是否未排序
        empty: boolean; // 是否为空
      }; // 排序
      pageNumber: number; // 当前页码
      pageSize: number; // 每页大小
      offset: number; // 偏移量
      paged: boolean; // 是否分页
      unpaged: boolean; // 是否未分页
    }
    totalPages: number; // 医院总页数
    totalElements: number; // 医院总数
    last: boolean; // 是否是最后一页
    first: boolean; // 是否是第一页
    sort: {
      sorted: boolean; // 是否排序
      unsorted: boolean; // 是否未排序
      empty: boolean; // 是否为空
    }; // 排序
    numberOfElements: number; // 当前页医院数量
    size: number; // 每页医院数量
    number: number; // 当前页码
    empty: boolean; // 是否为空
  }
}