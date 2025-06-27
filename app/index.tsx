import { Pressable, Text, View } from "react-native";
import { html as h } from "react-strict-dom";

export default function Index() {
  return (
    <h.div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        gap: 20,
      }}
    >
      <h.button>Pre focus</h.button>
      <Text>RN Text</Text>
      <Text onPress={() => {}}>RN Text - with onPress</Text>
      <Pressable onPress={() => {}}>
        <Text accessible onPress={() => {}}>
          RN Text in Pressable
        </Text>
      </Pressable>

      <View accessible>
        <Text>RN Text in an accessibleView</Text>
      </View>

      <Text>
        This is a longer RN Text with a{" "}
        <Pressable onPress={() => {}}>
          <Text>RN Text in Pressable</Text>
        </Pressable>{" "}
        inside it.
      </Text>
      <Text>
        This is a longer RN Text with a{" "}
        <View accessible>
          <Text>RN Text in an accessible View</Text>
        </View>
        inside it.
      </Text>

      <h.span>RSD Span</h.span>
      <h.h1>RSD H1</h.h1>
      <h.button>Post focus</h.button>
    </h.div>
  );
}
