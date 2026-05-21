import { Policy } from "@/types/policy"

export const mockPolicies: Policy[] = [
  { policyNo: 'A123456789', holderName: '王小明', productName: '終身壽險', status: '有效' },
  { policyNo: 'B987654321', holderName: '李小花', productName: '醫療險',  status: '有效' },
  { policyNo: 'C000000001', holderName: '張大同', productName: '車險',    status: '失效' },
]