import { Layout, Text, Button } from "@ui-kitten/components";
import { useState } from "react";
import { Modal } from "react-native";
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from "@rivascva/react-native-code-editor";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={() => setModalVisible(true)}>Open Editor</Button>
      </Layout>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Layout>
          <Button>This is a button</Button>
          <CodeEditor
            language="markdown"
            syntaxStyle={CodeEditorSyntaxStyles.github}
            showLineNumbers
          />
        </Layout>
      </Modal>
    </>
  );
};

export default HomeScreen;
