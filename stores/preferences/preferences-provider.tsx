'use client'

import { THEME_PRESET_VALUES } from '@/lib/theme'
import { createContext, useContext, useEffect, useState } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { createPreferencesStore, type PreferencesState } from './preferences-store'

const PreferencesStoreContext = createContext<StoreApi<PreferencesState> | null>(null)

function getSafeValue<T extends string>(raw: string | null, allowed: readonly T[]): T | undefined {
    if (!raw) return undefined
    return allowed.includes(raw as T) ? (raw as T) : undefined
}

function readDomState(): Partial<PreferencesState> {
    const root = document.documentElement

    const mode = root.classList.contains('dark') ? 'dark' : 'light'

    return {
        themeMode: mode,
        themePreset: getSafeValue(root.getAttribute('data-theme-preset'), THEME_PRESET_VALUES),
    }
}

export const PreferencesStoreProvider = ({
    children,
    themeMode,
    themePreset,
}: {
    children: React.ReactNode
    themeMode: PreferencesState['themeMode']
    themePreset: PreferencesState['themePreset']
}) => {
    const [store] = useState<StoreApi<PreferencesState>>(() => createPreferencesStore({ themeMode, themePreset }))

    useEffect(() => {
        const domState = readDomState()

        store.setState((prev) => ({
            ...prev,
            ...domState,
            isSynced: true,
        }))
    }, [store])

    return <PreferencesStoreContext.Provider value={store}>{children}</PreferencesStoreContext.Provider>
}

export const usePreferencesStore = <T,>(selector: (state: PreferencesState) => T): T => {
    const store = useContext(PreferencesStoreContext)
    if (!store) throw new Error('Missing PreferencesStoreProvider')
    return useStore(store, selector)
}
