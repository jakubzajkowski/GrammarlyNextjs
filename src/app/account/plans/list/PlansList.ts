export interface PlansListType{
    plan: string
    header: string
    planName: string
    desc: string
    btnName: string
    planFunctions: string[]
}

export const PlansList:PlansListType[] = [
    {
    plan:'free',
    header: 'FOR INDIVIDUALS',
    planName: 'Free',
    desc: 'Basic writing suggestions and tone detection',
    btnName: 'Free Plan',
    planFunctions: ['1000 prompts'],
    },
    {
    plan:'premium',
    header: 'FOR INDIVIDUALS',
    planName: 'Premium',
    desc: 'Clarity, vocabulary, and tone suggestions',
    btnName: 'Premium Plan',
    planFunctions: ['10000 prompts','Everything in Free'],
    },
    {
    plan: 'buisness',
    header: 'FOR BUISNESS',
    planName: 'Buisness',
    desc: 'Features for teams, organizations, and enterprises',
    btnName: 'Business Plan',
    planFunctions: ['20000 prompts','Everything in Premium'],
    }
]