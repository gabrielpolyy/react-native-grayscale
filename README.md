# react-native-grayscale

A super lightweight react native package that converts an image
passed as a base64 string to a base64 string that represents
the grayscale version of that image.

:exclamation: Available for iOS only.

:exclamation: Tested on react-native>=0.60 only.

Support for android coming soon.

## Installation

`$ yarn add react-native-grayscale`

or

`$ npm install react-native-grayscale --save`

**then,**

`$ cd ios`

`$ pod install`

done.

## Specs

`...`

`import getBase64Grayscale from "react-native-grayscale"`

`...`

`getBase64Grayscale(base64, returnWithBase64Prefix = false)`

| Parameters             | Required                    | Type    | Description                                                                                                                                                                                                                                                  |
| ---------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| base64                 | required                    | string  | the base64 string of the image. The prefix `data:image/[format];base64,` is optional.                                                                                                                                                                        |
| returnWithBase64Prefix | optional (default is false) | boolean | `true` if you want the base64 returned with the prefix `data:image/png;base64,`, `false` otherwise. Note that without a prefix `data:image/[format];base64,` setting the uri property of the source prop at Image results in the image NOT beeing displayed. |

| Returns         | Description                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Promise<string> | Returns a promise that will resolve with the base64 string of the grayscale version of the image or will be rejected with an error if the input base64 image is in incorrect format |

## Example

```javascript
import React, { useEffect, useState } from "react";
import getBase64Grayscale from "react-native-grayscale";
import { Image, View } from "react-native";

const Test = props => {
  const base64Icon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=";

  const [grayscaleBase64Img, setGrayscaleBase64Img] = useState("");

  useEffect(() => {
    const toGrayscale = async () => {
      const grayscale = await getBase64Grayscale(base64Icon, true);
      setGrayscaleBase64Img(grayscale);
    }
    toGrayscale();
  }, []);

  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 50,
          borderWidth: 1,
          borderColor: "black"
        }}
        source={{ uri: base64Icon }}
      />
      <Image
        style={{
          width: 100,
          height: 50,
          borderWidth: 1,
          borderColor: "black"
        }}
        source={{ uri: grayscaleBase64Img }}
      />
    </View>
  );
};
```
