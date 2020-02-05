import { NativeModules } from 'react-native'

export const NativeModule = NativeModules.RNAACheckPackage as {
  readonly checkPackage: (message: string) => Promise<boolean>
}
