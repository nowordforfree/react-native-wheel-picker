import { PickerIOS, Platform } from 'react-native';

import WheelPicker from './WheelPicker'

module.exports = (Platform.OS === 'ios' ? PickerIOS : WheelPicker)
