import { NativeModules } from 'react-native'

export default NativeModules.RNAACheckPackage as {
  readonly checkPackage: (packageName: string) => Promise<boolean>
}
