import firebase from 'firebase/app'
import 'firebase/analytics'
import { firebaseConfig } from './config'

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
