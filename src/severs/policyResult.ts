import { mockPolicies } from '@/data/policyData'
import type { Policy } from '@/types/policy'

export async function getPolicyResult(policyNo: string): Promise<Policy[]> {
    const policy = mockPolicies.filter(p => p.policyNo === policyNo)

    if (policy.length === 0) {
        throw new Error(`查無保單號：${policyNo}`)
    }

    return policy
}