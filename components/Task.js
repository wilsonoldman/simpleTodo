import React from "react";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Text, Checkbox } from "react-native-paper";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        status={state === "TASK_ARCHIVED" ? "checked" : "unchecked"}
        onPress={() => onArchiveTask(id)}
        style={{ width: 50 }}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity onPress={() => onPinTask(id)} style={styles.starIcon}>
        <AntDesign
          name="star"
          size={20}
          color={state === "TASK_PINNED" ? "orange" : "#ccc"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    flex: 1,
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 5,
    textAlignVertical: "center",
  },
  createdAt: {
    marginLeft: "auto"
  },
  starIcon: {
    width: 30
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
