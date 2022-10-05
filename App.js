import { View, Button, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function App() {
  const offset = useSharedValue(-145);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            offset.value,
            {
              duration: 2000,
            },
            () => {
              offset.value = -145;
            }
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.boxContainer}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = 145)} title='Move' />
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
