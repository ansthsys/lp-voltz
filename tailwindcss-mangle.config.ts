import { defineConfig } from 'tailwindcss-patch'

export default defineConfig({
  mangle: {
    classGenerator: {
      classPrefix: '',
      customGenerate(original) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
        const arr = new Uint8Array(4)

        crypto.getRandomValues(arr)

        const hash = Array.from(original)
          .map(c => c.charCodeAt(0).toString(36))
          .join('')
          .slice(0, 4)

        const randomPart = Array.from(arr, n => chars[n % chars.length]).join(
          ''
        )

        return hash + randomPart
      }
    }
  }
})
