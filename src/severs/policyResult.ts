import { mockPolicies } from '@/data/policyData'
import type { Policy } from '@/types/policy'

export async function getPolicyResult(policyNo: string): Promise<Policy> { //, holderName: string
    const policy = mockPolicies.find(p => p.policyNo === policyNo)
    //const policies = mockPolicies.find(p => p.holderName === holderName)

    if (!policy) {
        throw new Error(`查無保單號：${policyNo}`)
    }
    // if (!policies) {
    //     throw new Error(`查無此被保人：${holderName}`)
    // }

    return policy
}