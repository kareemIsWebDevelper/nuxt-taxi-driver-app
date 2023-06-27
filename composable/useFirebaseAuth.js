import { createUserWithEmailAndPassword} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()



  return { registerUser }
}
