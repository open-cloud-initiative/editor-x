import { createStore } from 'zustand/vanilla'

import { PREFERENCE_DEFAULTS } from '@/lib/preferences-config'
import type { ThemeMode, ThemePreset } from '@/lib/theme'

export type PreferencesState = {
    themeMode: ThemeMode
    themePreset: ThemePreset
    setThemeMode: (mode: ThemeMode) => void
    setThemePreset: (preset: ThemePreset) => void
    isSynced: boolean
    setIsSynced: (val: boolean) => void
}

export const createPreferencesStore = (init?: Partial<PreferencesState>) =>
    createStore<PreferencesState>()((set) => ({
        themeMode: init?.themeMode ?? PREFERENCE_DEFAULTS.theme_mode,
        themePreset: init?.themePreset ?? PREFERENCE_DEFAULTS.theme_preset,
        setThemeMode: (mode) => set({ themeMode: mode }),
        setThemePreset: (preset) => set({ themePreset: preset }),
        isSynced: init?.isSynced ?? false,
        setIsSynced: (val) => set({ isSynced: val }),
    }))
