import { Pressable, Text } from "react-native";
import { html as h } from "react-strict-dom";

export default function Index() {
  return (
    <h.div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h.button>Pre focus</h.button>
      <Text>RN Text</Text>
      <Text accessible role="button" onPress={() => {}}>
        RN Text - with onPress
      </Text>
      <Pressable onPress={() => {}}>
        <Text accessible onPress={() => {}}>
          RN Text in Pressable
        </Text>
      </Pressable>
      <h.span>RSD Span</h.span>
      <h.h1>RSD H1</h.h1>
      <h.button>Post focus</h.button>
    </h.div>
  );
}
