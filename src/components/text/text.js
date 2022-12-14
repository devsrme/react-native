import { StyleSheet, Text as RNText } from 'react-native';
import { presets } from './text-preset';

export default function Text({ children, preset = 'default', style }) {
  const textStyle = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyle}>{children}</RNText>;
}
