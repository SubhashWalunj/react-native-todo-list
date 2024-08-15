import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Modal, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function Index() {
  const [goals, setGoals] = useState<{ text: string; key: number }[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  function handleGoalAdd(goal: string) {
    if (!goal) {
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goal, key: Date.now() },
    ]);
    setModalVisible(false);
  }

  function handleGoalRemove(index: number) {
    const newGoalList = goals.filter((goal, goalIndex) => goalIndex !== index);
    setGoals(newGoalList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.addGoalBtn}>
        <Button
          title="Add New Goal"
          onPress={() => setModalVisible(true)}
        ></Button>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <GoalInput
          onGoalAdd={(goal) => handleGoalAdd(goal)}
          onCancel={() => setModalVisible(false)}
        ></GoalInput>
      </Modal>

      <View style={styles.listContainer}>
        {goals.length ? (
          [
            <Text
              key="goal-list-title"
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Your Goal(s):
            </Text>,
            <FlatList
              key="goal-flat-list"
              data={goals}
              renderItem={(dataItem) => {
                return (
                  <GoalItem
                    goalText={dataItem.item.text}
                    index={dataItem.index}
                    handleGoalRemove={handleGoalRemove}
                  ></GoalItem>
                );
              }}
            ></FlatList>,
          ]
        ) : (
          <Text>No goal set yet! Add your 1st Goal</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
    width: "100%",
  },
  addGoalBtn: {
    marginBottom: 10,
  },
  listContainer: {
    flex: 5,
    marginTop: 8,
  },
});
