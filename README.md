<!-- Bootstrapped with make-react-native-package v0.60.3 -->

# react-native-android-appcheck
[![npm version](https://badge.fury.io/js/react-native-android-appcheck.svg)](https://badge.fury.io/js/react-native-android-appcheck)
[![CircleCI](https://circleci.com/gh/runtrizapps/react-native-android-appcheck.svg?style=svg)](https://circleci.com/gh/runtrizapps/react-native-android-appcheck)
[![Dependency Status](https://david-dm.org/runtrizapps/react-native-android-appcheck.svg)](https://david-dm.org/runtrizapps/react-native-android-appcheck)
[![devDependencies Status](https://david-dm.org/runtrizapps/react-native-android-appcheck/dev-status.svg)](https://david-dm.org/runtrizapps/react-native-android-appcheck?type=dev)
[![typings included](https://img.shields.io/badge/typings-included-brightgreen.svg?t=1495378566925)](package.json)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/react-native-android-appcheck)

Tool to check for install status of apps on Android

## Why?

`Linking.canOpenURL` works well for "Deep Links" with custom schema (e.g. `exampleapp://`), however it is less useful when an app only implements "App Links" with domain verification (i.e. `android:autoVerify="true"`). [See this Android documentation page: https://developer.android.com/training/app-links/verify-site-associations#the-difference](https://developer.android.com/training/app-links/verify-site-associations#the-difference)

Since a browser is capable of opening general HTTPS URLs, `Linking.canOpenURL('https://applink.exampleapp.com')` will **always return true**, whether or not "exampleapp" is installed.

One real-world example of this is Apple Music on Android. On iOS, the `music://` schema can be queried for, but on Android (>= 6.0), only an "app link" is available. In this case, custom schemas are present, but the `autoVerify` attribute 'locks' the intent-filter to the https domains. Android versions lower than 6.0 are probably still able to query for the custom schemes (autoVerify implemented in 6.0/Marshmallow).

## Status: 1.0 Released

- Android:
  - Requires Kotlin
- iOS:
  - **No support planned**
- react-native:
  - supported versions "<strong>&gt;= 0.60.5</strong>"

## Installation

<table>
<td>
<details style="border: 1px solid; border-radius: 5px; padding: 5px">
  <summary>with react-native "<strong>&gt;=0.60.5</strong>"</summary>

### 0. Setup Swift and Kotlin

- Modify `android/build.gradle`:

  ```diff
  buildscript {
    ext {
      ...
  +   kotlinVersion = "1.3.50"
    }
  ...

    dependencies {
  +   classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:${kotlinVersion}")
      ...
  ```

### 1. Install latest version from npm

`$ npm i react-native-android-appcheck -S`

</details>
</td>
</table>

## Demo

 Android                                       |  iOS
:---------------------------------------------:|:---------------------------------------------:
???  |  ???

## Example

```jsx
import { checkPackage } from 'react-native-android-appcheck'

(async function() {
  const isInstalled = await checkPackage('com.chat.fakeapp');
  console.log(`App is installed: ${isInstalled}`);
}());
```
