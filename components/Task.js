import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Checkbox } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Task = ({ task, onArchiveTask }) => {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <View style={styles.taskChild}>
          <Checkbox status="unchecked" />
        </View>
        <View style={styles.taskChild}>
          <Text>{task.title}</Text>
        </View>
        <TouchableOpacity
          style={[styles.taskChild, { marginLeft: "auto", marginRight: 10 }]}
        >
          <FontAwesomeIcon icon="star" color="yellow" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%"
  },
  task: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  taskChild: {
    alignSelf: "center"
  }
});

export default Task;
