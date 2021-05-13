import { firebaseApp } from '.'
import firebase from 'firebase/app'
import 'firebase/analytics'

export const analyticsResolver: Promise<
  ReturnType<typeof firebase.analytics>
> = new Promise((resolve) => {
  if (typeof window !== 'undefined') {
    resolve(firebaseApp.analytics())
  }
})

export const logEvent = async (
  eventName: string,
  eventParams?: { [key: string]: string }
): Promise<void> => {
  const analytics = await analyticsResolver
  analytics.logEvent(eventName, eventParams)
}
