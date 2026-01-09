'use client'

import { setLocalStorageValue } from './localstorage-client'
import { PREFERENCE_PERSISTENCE, type PreferenceKey } from './preferences-config'

export async function persistPreference(key: PreferenceKey, value: string) {
    const mode = PREFERENCE_PERSISTENCE[key]

    switch (mode) {
        case 'none':
            return

        case 'localStorage':
            setLocalStorageValue(key, value)
            return

        default:
            return
    }
}
