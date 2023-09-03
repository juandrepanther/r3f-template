import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Types {
  bears: number
  increase: (by: number) => void
}

const useAppStore = create<Types>()(
  devtools(
    persist(
      (set) => ({
        bears: 1,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: 'bearStore' },
    ),
  ),
)

export default useAppStore
