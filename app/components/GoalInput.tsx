import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

type GoalInputProps = {
  onGoalAdd: (goal: string) => void;
  onCancel: () => void;
};

function GoalInput({ onGoalAdd, onCancel }: GoalInputProps) {
  const [goal, setGoal] = useState<string>("");

  function handleGoalTextChange(goal: string) {
    setGoal(goal);
  }

  function handleGoalAdd() {
    onGoalAdd(goal);
    setGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={goal}
        placeholder="What is your next goal?"
        style={styles.goalInput}
        onChangeText={handleGoalTextChange}
      ></TextInput>
      <View style={styles.buttonContainer}>
        <Button title="Add Goal" onPress={handleGoalAdd}></Button>
        <Button title="Cancel" onPress={onCancel}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  goalInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    alignSelf: "stretch",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalInput;
