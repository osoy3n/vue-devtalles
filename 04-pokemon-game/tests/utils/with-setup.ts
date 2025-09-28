/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp } from 'vue'

export const withSetup = (composable: () => any) => {
  let results: any

  const app = createApp({
    setup() {
      results = composable()
      return () => {}
    }
  })

  app.mount(document.createElement('div'))

  return [app, results] as const
}
