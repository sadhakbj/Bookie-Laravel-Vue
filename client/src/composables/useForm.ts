import { isAxiosError } from 'axios'
import { reactive } from 'vue'

interface FormErrors {
  [key: string]: string[]
}

interface FormMethods<T> {
  fields: T
  processing: boolean
  errors: FormErrors
  submit(submitter: (fields: T) => Promise<void>): Promise<void>
  hasError(field: string): boolean
  getError(field: string): string
}

export default function useForm<T>(initialFields: any): FormMethods<T> {
  const state = reactive({
    fields: initialFields,
    processing: false,
    errors: {} as FormErrors,
    async submit(submitter: (fields: T) => Promise<void>): Promise<void> {
      if (state.processing) return

      state.errors = {}
      state.processing = true

      try {
        await submitter(state.fields)
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 422) {
          state.errors = error.response.data.errors
        }
      }

      state.processing = false
    },
    hasError(field: string): boolean {
      return Object.prototype.hasOwnProperty.call(state.errors, field)
    },
    getError(field: string): string {
      return (state.errors[field] && state.errors[field][0]) || ''
    }
  })

  return state
}
