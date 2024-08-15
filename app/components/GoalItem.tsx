import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({
  goalText,
  index,
  handleGoalRemove,
}: {
  goalText: string;
  index: number;
  handleGoalRemove: (index: number) => void;
}) {
  return (
    <Pressable onPress={() => handleGoalRemove(index)}>
      <View style={styles.goalList}>
        <Text style={styles.goalListText}>{goalText}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    padding: 12,
    backgroundColor: "#001a72",
    borderRadius: 6,
  },
  goalListText: {
    color: "white",
  },
});

export default GoalItem;
