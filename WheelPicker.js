import React from 'react';
import { View, requireNativeComponent } from 'react-native';

const WheelPickerNative = requireNativeComponent('WheelPicker', WheelPicker);

type Props = {
  onValueChange?: (arg: string | number) => void,
  selectedItemPosition?: number,
  style?: View.props.style,
}

type State = { selectedItemPosition: number }

type ItemProps = {
  label?: string,
  value?: string | number,
}

class WheelPickerItem extends React.Component<ItemProps> {
  render() {
    return null
  }
}

export default class WheelPicker extends React.Component<Props, State> {

  state = {
    selectedItemPosition: 0,
  }

  static Item = WheelPickerItem

  constructor(props) {
    super(props)
    this.state = this._stateFromProps(props)
  }

  _stateFromProps = (props) => {
    const selectedIndex = 0
    const data = []
    const { children, onValueChange, style } = props

    React.Children.forEach(children, (child, i) => {
      if (child.props.value === props.selectedValue) {
        selectedIndex = i
      }
      data.push({ value: child.props.value, label: child.props.label })
    })


    return {
      curtainColor: undefined,
      data,
      indicatorColor: style ? style.color : undefined,
      indicatorSize: undefined,
      isAtmospheric = true,
      isCurtain,
      isCurved = true,
      isCyclic = false,
      itemSpace,
      itemTextColor: style ? style.color : undefined,
      itemTextFontFamily: style ? style.fontFamily : undefined,
      itemTextSize: style ? style.fontSize : undefined,
      onItemSelected: onValueChange,
      renderIndicator: true,
      selectedItemPosition: selectedIndex,
      selectedItemTextColor: undefined,
      visibleItemCount: undefined,
    }
  }

  onItemSelected = (item: string | number) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(item)
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState(this._stateFromProps(nextProps))
  }

  render() {
    return (
      <WheelPickerNative {...this.state} />
    )
  }
}
