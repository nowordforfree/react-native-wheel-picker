declare module "react-native-wheel-picker" {
  import * as React from "react"
  import { StyleProp, TextStyle, ViewStyle } from "react-native"

  export interface WheelPickerProps {
    curtainColor?: string,
    data?: Array<string | number>,
    indicatorColor?: string,
    indicatorSize?: number,
    isAtmospheric?: boolean,
    isCurtain?: boolean,
    isCurved?: boolean,
    isCyclic?: boolean,
    itemSpace?: number,
    itemStyle?: StyleProp<TextStyle>,
    itemTextColor?: string,
    itemTextFontFamily?: string,
    itemTextSize?: number,
    onItemSelected?: (arg: string | number) => void,
    renderIndicator?: boolean,
    selectedItemPosition?: number,
    selectedItemTextColor?: string,
    style?: StyleProp<ViewStyle>,
    visibleItemCount?: number,
  }

  export type State = {
    selectedItemPosition: number
  }

  export interface WheelPickerItemProps {
    label?: string,
    value?: string | number,
  }

  export class WheelPickerItem extends React.Component<WheelPickerItemProps> {}

  export default class WheelPicker extends React.Component<WheelPickerProps, State> {
    static Item: typeof WheelPickerItem
  }

}
