import { PiggyBank } from 'lucide-react'
import React from 'react'

function logo() {
    return <a href='/' className='flex items-center gap-2'>
        <PiggyBank className='h-11 w-11 stroke stroke-[1.5] stroke-amber-500' />
        <p className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
            BudgetTracker
        </p>
    </a>
}

export default logo