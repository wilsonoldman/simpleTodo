import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Checkbox } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import PropTypes from "prop-types";

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <View style={styles.taskChild}>
          <Checkbox
            status={state === "TASK_ARCHIVED" ? "checked" : "unchecked"}
            onPress={onArchiveTask}
          />
        </View>
        <View style={styles.taskChild}>
          <Text>{title}</Text>
        </View>
        <TouchableOpacity
          style={[styles.taskChild, { marginLeft: "auto", marginRight: 10 }]}
          onPress={onPinTask}
        >
          <FontAwesomeIcon
            icon="star"
            color={state === "TASK_PINNED" ? "#ffc107" : "#ccc"}
            s7ize={20}
          />
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

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    state: PropTypes.string
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};

export default Task;
